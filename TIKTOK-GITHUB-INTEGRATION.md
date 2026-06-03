# TikTok + GitHub Integration Guide

## 1. Domain Verification (GitHub Pages)

### Status: ✅ Ready for Activation

The TikTok domain verification file has been committed to the repository root:
- **File:** `tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt`
- **Content:** `tiktok-developers-site-verification=i0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA`
- **GitHub Pages URL (once enabled):** `https://blessedandrew94-web.github.io/autodrop-ai-saas/tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt`

### To Enable GitHub Pages:
1. Go to: `https://github.com/blessedandrew94-web/autodrop-ai-saas/settings/pages`
2. Under "Branch", select: `main` and root folder `/`
3. The `.github/workflows/deploy-pages.yml` workflow will automatically deploy the site
4. The `.nojekyll` file ensures raw files (like the verification TXT files) are served as-is

### Alternative Verification Files (Also Committed):
The repo also includes these variants of TikTok verification files:
- `tiktok-developers-site-verification.txt`
- `tiktok-verify.txt`
- `tiktok_site_verification.txt`
- `tiktokG9rv0XfKvI9mwhkYyb00526dzWQBASQm.txt`

## 2. TikTok OAuth Redirect URI

### Issue
The TikTok OAuth flow requires a server-side callback endpoint (`/tiktok/callback`) that can:
1. Receive the OAuth authorization code via query parameter
2. Exchange it for access tokens via POST to TikTok APIs
3. Store the tokens in a database

### GitHub Pages Limitation
GitHub Pages only serves **static files**. It cannot:
- Execute server-side code (Python, Node.js, etc.)
- Handle POST requests with custom logic
- Make outbound API calls to TikTok's token endpoint

### Solutions (Ranked)

#### Solution A: Vercel/Serverless (✅ Recommended)
Deploy the Flask backend to Vercel (free tier works). The Vercel project can be linked to this GitHub repo for auto-deployment:
- Uses `vercel.json` already in the repo
- Set environment variables: `TIKTOK_CLIENT_KEY`, `TIKTOK_CLIENT_SECRET`, `TIKTOK_REDIRECT_URI`
- The redirect URI would be: `https://<your-vercel-project>.vercel.app/tiktok/callback`
- See `README-VERCEL.md` for details

#### Solution B: GitHub Actions with Static Redirect (⚠️ Partial)
You could create an HTML page that captures the OAuth `?code=` parameter via JavaScript and redirects:
```html
<!-- oauth-callback.html (served via GitHub Pages) -->
<script>
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  if (code) {
    // Redirect to a serverless endpoint or external service
    window.location.href = `https://your-server.com/tiktok/callback?code=${code}`;
  }
</script>
```
This doesn't solve the problem — it just moves it.

#### Solution C: GitHub Actions + Webhook
You could build a GitHub Action that triggers on OAuth callback via `repository_dispatch`, but this adds complexity and still requires an external webhook receiver.

### Recommendation
**Use Vercel for the backend (OAuth, checkout, lead capture)** and **GitHub Pages only for TikTok domain verification**. Both services are free. The TikTok OAuth `redirect_uri` should point to the Vercel deployment URL.

## 3. CTA Links — Verified ✅

All "Add to Cart" and "View More" links in the codebase point to:
- **https://linktr.ee/DensVibez**

### Files checked:
- `templates/index.html` — 5 occurrences (product cards)
- `templates/checkout.html` — 1 occurrence (checkout page)
- `app.py` — No hardcoded CTA links (uses redirect from `.env` config)

## 4. Repo Structure Summary

```
autodrop-ai-saas/
├── .github/workflows/
│   ├── codeql.yml              # Code scanning (auto-generated)
│   └── deploy-pages.yml        # GitHub Pages deployment
├── .nojekyll                   # Disables Jekyll for raw file serving
├── app.py                      # Flask backend (OAuth, landing page, checkout)
├── analytics.py                # CLI analytics helper
├── requirements.txt            # Python deps
├── vercel.json                 # Vercel deployment config
├── templates/                  # Jinja2 HTML templates
│   ├── index.html              # Main landing page
│   ├── checkout.html           # Checkout page
│   └── ...
├── static/                     # Product images and logos
├── tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt  # TikTok verification
├── TIKTOK-GITHUB-INTEGRATION.md                 # This file
└── README.md                   # Project README
```