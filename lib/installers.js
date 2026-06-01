// Installer referral network
const INSTALLER_NETWORKS = [
  {
    name: 'Checkatrade',
    commission: 150,
    url: 'https://www.checkatrade.com/trades/solar-panels',
    description: 'UK\'s largest rated trade network',
  },
  {
    name: 'Which? Trusted Traders',
    commission: 200,
    url: 'https://www.which.co.uk/trusted-traders',
    description: 'Quality vetted installers',
  },
  {
    name: 'Solar Trade Association',
    commission: 175,
    url: 'https://www.solar-trade.org.uk',
    description: 'Official UK solar body',
  },
];

export async function getInstallerLeads() {
  // This would connect to a backend that tracks qualified leads
  try {
    const response = await fetch('/api/leads/qualified');
    return await response.json();
  } catch (error) {
    console.error('Error fetching installer leads:', error);
    return [];
  }
}

export async function referLeadToInstaller(leadData, installerId) {
  // Track the referral
  try {
    const response = await fetch('/api/referrals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lead: leadData,
        installerId,
        timestamp: new Date(),
      }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error referring lead:', error);
    throw error;
  }
}

export default INSTALLER_NETWORKS;
