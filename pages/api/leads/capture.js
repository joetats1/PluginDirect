export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, postcode, kitSize } = req.body;

  // Validate input
  if (!email || !postcode) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Add to Mailchimp
    const mailchimp = await import('@mailchimp/mailchimp_marketing');
    mailchimp.default.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_SERVER_PREFIX,
    });

    const response = await mailchimp.default.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName || 'Customer',
          POSTCODE: postcode,
          KITSIZE: kitSize || '400',
        },
        tags: ['solar_interested', 'calculator_user'],
      }
    );

    // Log to analytics
    console.log('Lead captured:', email);

    res.status(200).json({
      success: true,
      message: 'Lead captured successfully',
      leadId: response.id,
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    res.status(500).json({ error: 'Failed to capture lead' });
  }
}
