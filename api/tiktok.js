export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://autodrop-ai-saas.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.url.includes('/auth/tiktok/callback')) {
    const { code, error } = req.query;
    if (error) return res.status(400).json({ error: 'TikTok authorization failed' });
    if (!code) return res.status(400).json({ error: 'Missing authorization code' });
    return res.status(200).json({ status: 'success', message: 'TikTok authorization code received' });
  }
  if (req.url.includes('/tiktok/webhook')) {
    if (req.url.includes('/test')) {
      return res.status(200).json({ status: 'active', endpoint: 'tiktok-webhook-test', message: 'Webhook test endpoint is operational', timestamp: new Date().toISOString() });
    }
    if (req.method === 'GET') {
      const challenge = req.query['challenge'];
      if (challenge) return res.status(200).json({ challenge });
      return res.status(200).json({ status: 'webhook_active' });
    }
    if (req.method === 'POST') {
      const body = req.body || {};
      console.log('TikTok webhook event:', body.event || 'unknown');
      return res.status(200).json({ status: 'received', event: body.event || 'unknown' });
    }
  }
  res.status(404).json({ error: 'Not found' });
}