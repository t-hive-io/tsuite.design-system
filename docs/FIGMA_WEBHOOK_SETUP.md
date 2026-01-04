# Figma Webhook Setup (Optional but Recommended)

This enables instant updates when designers make changes in Figma, instead of waiting for the daily scheduled sync.

## 1. Create Webhook Endpoint

Add this to your repository or use a webhook proxy service like Smee.io:

### Using GitHub Repository Dispatch

Figma will send webhooks → You need an endpoint that converts them to GitHub repository_dispatch events.

### Option A: Simple Webhook Handler (Vercel/Netlify Function)

Create `api/figma-webhook.js`:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { GITHUB_TOKEN, GITHUB_REPO } = process.env;

  // Trigger GitHub Actions
  await fetch(`https://api.github.com/repos/${GITHUB_REPO}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      event_type: 'figma-update',
      client_payload: {
        timestamp: new Date().toISOString(),
      },
    }),
  });

  res.status(200).json({ success: true });
}
```

### Option B: Use Smee.io (Development/Testing)

1. Go to https://smee.io/
2. Click "Start a new channel"
3. Copy the webhook URL
4. Use it in Figma webhook settings below

## 2. Configure Figma Webhook

1. Go to your Figma file
2. Click **Plugins** → **Development** → **Manage webhooks**
3. Click **Create webhook**
4. Configure:
   - **Event**: FILE_UPDATE
   - **URL**: Your webhook endpoint URL
   - **Description**: Design System Auto Sync

## 3. Test the Webhook

1. Make a change in your Figma file
2. Check GitHub Actions to see if workflow triggered
3. Verify tokens were updated in the repository

## Security Best Practices

- Use HMAC signature verification for production webhooks
- Store secrets in environment variables
- Implement rate limiting
- Log all webhook events

## Troubleshooting

**Webhook not triggering?**

- Check Figma webhook logs
- Verify endpoint is publicly accessible
- Test with curl:
  ```bash
  curl -X POST your-webhook-url -H "Content-Type: application/json" -d '{}'
  ```

**GitHub Actions not running?**

- Verify `repository_dispatch` permissions
- Check GitHub token has workflow permissions
- Review Actions logs
