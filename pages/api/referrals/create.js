export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, postcode, phone, systemSize, installationDate } = req.body;

  try {
    // Mark as qualified lead in database
    // Save referral data
    const referralData = {
      name,
      email,
      postcode,
      phone,
      systemSize,
      installationDate,
      createdAt: new Date(),
      status: 'qualified',
      source: 'dno_wizard',
    };

    // TODO: Save to database
    console.log('Qualified lead created:', referralData);

    // Get installer networks
    const installers = [
      { name: 'Checkatrade', commission: 150 },
      { name: 'Which? Trusted', commission: 200 },
      { name: 'STA', commission: 175 },
    ];

    res.status(200).json({
      success: true,
      message: 'Lead registered for installer referrals',
      installers,
      potentialEarnings: installers.reduce((sum, i) => sum + i.commission, 0),
    });
  } catch (error) {
    console.error('Lead registration error:', error);
    res.status(500).json({ error: 'Failed to register lead' });
  }
}
