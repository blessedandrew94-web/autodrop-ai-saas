# AutoDrop AI SaaS — GlowHome

Automated, faceless TikTok content creation for dropshipping — driving viral traffic to a high-converting landing page.

## 📦 Repo Structure

| Path | Description |
|------|-------------|
| `app.py` | Flask backend — landing page, lead capture, checkout, TikTok OAuth |
| `analytics.py` | CLI analytics helper for leads/orders/revenue |
| `requirements.txt` | Python dependencies |
| `templates/` | Jinja2 HTML templates (index, checkout, success, etc.) |
| `static/` | Product images, logos, overlays |
| `tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt` | **TikTok domain verification file** — served via GitHub Pages |
| `vercel.json` | Vercel deployment config (optional) |
| `README-VERCEL.md` | Vercel deployment guide |
| `.github/workflows/` | CI/CD workflows (CodeQL, Pages deploy) |
| `.nojekyll` | Disables Jekyll so Pages serves raw files |

## 🚀 GitHub Pages — TikTok Domain Verification

This repo hosts TikTok domain verification via GitHub Pages at:

**`https://blessedandrew94-web.github.io/autodrop-ai-saas/tiktoki0OVhokgo6gujjlWDTOlLGZ5PtRNGRsA.txt`**

Configure this URL in your TikTok Developer Portal as the domain verification path.

## 🔐 TikTok OAuth

The Flask backend (`app.py`) includes TikTok OAuth routes:
- `/tiktok/login` — Initiates OAuth flow
- `/tiktok/callback` — Handles OAuth callback and stores tokens

**OAuth Redirect URI Approach:**
For production, deploy the Flask app to Vercel (see `README-VERCEL.md`). GitHub Pages only hosts static files, so OAuth callback handling requires a server-side runtime. Vercel's free tier works well for this.

## 🛒 CTA Links

All "Add to Cart" and "View More" links point to: **https://linktr.ee/DensVibez**

## 🧪 Quick Start

```bash
pip install -r requirements.txt
python app.py
```

## 📊 Analytics

```bash
python analytics.py
```

## 👥 Team

- **Lead** — Team management, planning
- **Researcher** — Niche/product research
- **Engineer** — Backend, API integration, automation
- **Designer** — UI/UX, landing page, brand identity
- **GitHub Specialist** — Repository management, Pages hosting
