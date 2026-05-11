export default async function handler(req, res) {
  const pixelId = '1427376332477830';
  const accessToken = 'EAAOE40I2e0sBRaXE31zBDvAFeaih1SxPp2ZCY0KrSVc5A7EKzilV2eK6w7ZA71ZAGCflxs6jHwIMpHnhUbmXirbpUgHxhypJZCsbV0ZCGxmPxw8bPkTX72WvRabGMgu2EOx6bZCsZBXAtUNw3XqKZAXO6HYPMtD4gj2sp77iELHtkLYbdVsusy5tQcpSPZCBtAQZDZD';

  const body = req.body || {};
  const eventId = body.eventId || ('event_' + Date.now());

  const payload = {
    data: [
      {
        event_name: body.event_name || 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: 'website',
        user_data: {
          client_ip_address: req.headers['x-forwarded-for'],
          client_user_agent: req.headers['user-agent']
        }
      }
    ]
  };

  const fbRes = await fetch(
    `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }
  );

  const data = await fbRes.json();

  res.status(200).json(data);
}
