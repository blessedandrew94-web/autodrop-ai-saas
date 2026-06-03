import os
import json
import subprocess
import requests
import secrets
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from dotenv import load_dotenv
from urllib.parse import urlencode

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', os.urandom(24))

# TikTok Config
CLIENT_KEY = os.getenv('TIKTOK_CLIENT_KEY')
CLIENT_SECRET = os.getenv('TIKTOK_CLIENT_SECRET')
REDIRECT_URI = os.getenv('TIKTOK_REDIRECT_URI')

def run_db_cmd(cmd):
    """Executes a database command using team-db CLI or logs failure on Vercel."""
    try:
        result = subprocess.run(f"team-db \"{cmd}\"", shell=True, capture_output=True, text=True)
        if result.returncode != 0:
            print(f"DB Error: {result.stderr}")
            return None
        return json.loads(result.stdout)
    except Exception as e:
        print(f"Database command failed (likely running on Vercel without team-db): {e}")
        return []

def store_tokens_in_db(tokens):
    """Stores tokens in the shared team-db."""
    tokens_json = json.dumps(tokens)
    escaped_json = tokens_json.replace("'", "''")
    run_db_cmd(f"INSERT OR REPLACE INTO secrets (key, value) VALUES ('tiktok_tokens', '{escaped_json}')")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit-lead', methods=['POST'])
def submit_lead():
    email = request.form.get('email')
    if email:
        run_db_cmd(f"INSERT INTO leads (email) VALUES ('{email}')")
        return jsonify({"status": "success", "message": "Thanks for subscribing!"})
    return jsonify({"status": "error", "message": "Email is required"}), 400

@app.route('/checkout', methods=['GET', 'POST'])
def checkout():
    product_id = request.args.get('product_id', 'flame-humidifier')
    products = {
        'flame-humidifier': {'name': 'Aura Flame Humidifier', 'price': 39.99},
        'soap-dispenser': {'name': 'Touchless Foam Dispenser', 'price': 24.99},
        'galaxy-projector': {'name': 'Celestial Galaxy Projector', 'price': 44.99}
    }
    product = products.get(product_id, products['flame-humidifier'])

    if request.method == 'POST':
        email = request.form.get('email')
        quantity = request.form.get('quantity', 1)
        # Mock checkout process
        run_db_cmd(f"INSERT INTO orders (product_id, quantity, customer_email, status) VALUES ('{product_id}', {quantity}, '{email}', 'paid')")
        return redirect(url_for('success', order_id=123)) # Mock order ID

    return render_template('checkout.html', product=product)

@app.route('/success')
def success():
    return render_template('success.html')

@app.route('/tos')
def tos():
    return render_template('tos.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/callback')
def callback():
    """OAuth callback handler placeholder (coordinated with TikTok Integrator)"""
    code = request.args.get('code')
    state = request.args.get('state')
    return jsonify({
        "status": "success",
        "message": "Callback received (placeholder)",
        "code": code,
        "state": state
    })

# --- TikTok OAuth Routes ---

@app.route('/tiktok/login')
def tiktok_login():
    csrf_state = secrets.token_urlsafe(16)
    auth_url = "https://www.tiktok.com/v2/auth/authorize/"
    scopes = "user.info.basic,video.upload,video.publish"
    params = {
        "client_key": CLIENT_KEY,
        "scope": scopes,
        "response_type": "code",
        "redirect_uri": REDIRECT_URI,
        "state": csrf_state
    }
    auth_full_url = f"{auth_url}?{urlencode(params)}"
    return redirect(auth_full_url)

@app.route('/tiktok/callback')
def tiktok_callback():
    code = request.args.get('code')
    if not code:
        return "Error: No code received", 400
    
    token_url = "https://open.tiktokapis.com/v2/oauth/token/"
    data = {
        "client_key": CLIENT_KEY,
        "client_secret": CLIENT_SECRET,
        "code": code,
        "grant_type": "authorization_code",
        "redirect_uri": REDIRECT_URI
    }
    headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Cache-Control": "no-cache"
    }
    response = requests.post(token_url, data=data, headers=headers)
    if response.status_code == 200:
        tokens = response.json()
        store_tokens_in_db(tokens)
        return "<h1>Success!</h1><p>TikTok tokens acquired and saved to database.</p>", 200
    else:
        return f"<h1>Error</h1><p>{response.text}</p>", response.status_code

# --- TikTok Verification Routes ---

@app.route('/tiktok-verify.txt')
@app.route('/tiktok_site_verification.txt')
@app.route('/tiktok-developers-site-verification.txt')
@app.route('/tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt')
def tiktok_verify():
    return "tiktok-developers-site-verification=i0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA", 200, {'Content-Type': 'text/plain'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', 5000)), debug=True)
