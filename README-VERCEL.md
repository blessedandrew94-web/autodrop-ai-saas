# GlowHome Backend - Vercel Deployment Guide

This directory contains the GlowHome landing page and backend, ready for deployment to Vercel.

## Deployment Steps

### Option 1: Vercel CLI (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory.
3. Follow the prompts to link your project.
4. Add the required Environment Variables (see below).
5. Run `vercel --prod` to deploy to production.

### Option 2: Vercel Dashboard
1. Initialize a Git repository in this directory.
2. Push the code to GitHub/GitLab/Bitbucket.
3. Import the project into the Vercel Dashboard.
4. Configure the Environment Variables during setup.

## Required Environment Variables

You must set the following environment variables in your Vercel project settings:

| Variable | Description |
| --- | --- |
| `SECRET_KEY` | A random string for session security. |
| `TIKTOK_CLIENT_KEY` | Your TikTok Developer App Client Key. |
| `TIKTOK_CLIENT_SECRET` | Your TikTok Developer App Client Secret. |
| `TIKTOK_REDIRECT_URI` | Your deployment URL + `/tiktok/callback` (e.g., `https://glowhome.vercel.app/tiktok/callback`). |
| `TURSO_DATABASE_URL` | (Optional) Your Turso Database URL if using direct connection. |
| `TURSO_AUTH_TOKEN` | (Optional) Your Turso Auth Token if using direct connection. |

## TikTok Integration

- **Verification:** The backend automatically handles TikTok domain verification for the routes used in the app.
- **OAuth:** Navigate to `/tiktok/login` on your deployed site to authorize your TikTok account. Tokens will be stored in the database.
- **Automation:** Use the `tiktok_upload.py` script (provided in the shared directory) with your production database credentials to automate uploads.

## Note on Database
The current `app.py` uses a mock database helper that logs commands when running on Vercel (since `team-db` is a local tool). For a production-ready database, we recommend integrating the `libsql` package and updating `run_db_cmd` to connect to Turso directly using `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`.
