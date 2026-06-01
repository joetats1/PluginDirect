export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productId, affiliateId } = req.body;

  try {
    // Log affiliate click to database
    // In production, save to PostgreSQL
    const clickData = {
      productId,
      affiliateId,
      timestamp: new Date(),
      userAgent: req.headers['user-agent'],
      ipAddress: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
    };

    // TODO: Save to database
    console.log('Affiliate click tracked:', clickData);

    res.status(200).json({
      success: true,
      message: 'Click tracked',
    });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: 'Failed to track click' });
  }
}
