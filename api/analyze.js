export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body;
    console.log('Body size:', JSON.stringify(body).length);
    console.log('Model:', body.model);
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    console.log('Response status:', response.status);
    console.log('Response type:', data.type);
    if (data.error) console.log('API error:', JSON.stringify(data.error));
    
    res.status(response.status).json(data);
  } catch (err) {
    console.log('Catch error:', err.message);
    res.status(500).json({ error: err.message });
  }
}
