import os
import json
import requests
import subprocess
import re
from datetime import datetime

def run_db_cmd(cmd):
    """Executes a database command using team-db CLI."""
    try:
        result = subprocess.run(f"team-db \"{cmd}\"", shell=True, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"DB Error: {result.stderr}")
            return None
        return json.loads(result.stdout)
    except Exception as e:
        print(f"Database command failed: {e}")
        return []

def init_db():
    """Initializes the video_performance table in the shared team-db."""
    run_db_cmd("CREATE TABLE IF NOT EXISTS video_performance (video_id TEXT PRIMARY KEY, title TEXT, views INTEGER DEFAULT 0, shares INTEGER DEFAULT 0, likes INTEGER DEFAULT 0, comments INTEGER DEFAULT 0, last_updated DATETIME)")

def post_video_to_tiktok(access_token, open_id, video_url, title):
    """
    Posts a video to TikTok using the Content Posting API (Direct Post).
    Uses the source_url method.
    """
    url = "https://open.tiktokapis.com/v2/post/publish/video/init/"
    headers = {
        "Authorization": f"Bearer {access_token}",
        "Content-Type": "application/json"
    }
    data = {
        "post_info": {
            "title": title,
            "privacy_level": "PUBLIC_TO_EVERYONE",
            "video_cover_timestamp_ms": 1000
        },
        "source_info": {
            "source": "PULL_FROM_URL",
            "video_url": video_url
        }
    }
    try:
        response = requests.post(url, headers=headers, json=data)
        return response.json()
    except Exception as e:
        print(f"TikTok Posting Error: {e}")
        return {"error": str(e)}

def post_video_to_buffer(buffer_token, profile_id, video_url, text):
    """
    Fallback: Posts a video to Buffer.
    """
    url = "https://api.bufferapp.com/1/updates/create.json"
    headers = {
        "Authorization": f"Bearer {buffer_token}"
    }
    data = {
        "profile_ids[]": [profile_id],
        "text": text,
        "media[video]": video_url
    }
    try:
        response = requests.post(url, headers=headers, data=data)
        return response.json()
    except Exception as e:
        print(f"Buffer Posting Error: {e}")
        return {"error": str(e)}

def update_performance(video_id, title, views, shares, likes, comments):
    """Updates video performance metrics in team-db and checks for viral signals."""
    now = datetime.now().isoformat()
    cmd = f"INSERT OR REPLACE INTO video_performance (video_id, title, views, shares, likes, comments, last_updated) VALUES ('{video_id}', '{title}', {views}, {shares}, {likes}, {comments}, '{now}')"
    run_db_cmd(cmd)
    
    # Check for viral signals
    if views > 1000: # Threshold for viral signal
        viral_signal_path = "/home/team/shared/viral_signals.md"
        signal = f"- [{now}] Video {video_id} ('{title}') went viral with {views} views!\n"
        with open(viral_signal_path, "a") as f:
            f.write(signal)
        print(f"Viral signal recorded for video {video_id}")

def run_scheduler():
    """Pulls content plans and prepares them for posting."""
    content_plan_path = "/home/team/shared/content_plans.md"
    if not os.path.exists(content_plan_path):
        print("No content plans found.")
        return

    print(f"Reading content plans from {content_plan_path}...")
    with open(content_plan_path, "r") as f:
        plans = f.readlines()
    
    # Pattern to match: - YYYY-MM-DD "Title" URL
    pattern = r'- (\d{4}-\d{2}-\d{2}) "(.*?)" (https?://\S+)'
    
    for line in plans:
        match = re.match(pattern, line.strip())
        if match:
            date_str = match.group(1)
            title = match.group(2)
            video_url = match.group(3)
            
            print(f"Found plan: {date_str} - {title} - {video_url}")
            prepare_post(title, video_url)

def prepare_post(title, video_url):
    """Placeholder for preparing a post."""
    print(f"Preparing to post: {title} ({video_url})")

if __name__ == "__main__":
    init_db()
    run_scheduler()
