// Savings calculation based on postcode and system size
const UK_POSTCODES = {
  'E': { sunHours: 3.2, avgUsage: 2800 },
  'W': { sunHours: 3.5, avgUsage: 2700 },
  'M': { sunHours: 3.0, avgUsage: 2900 },
  'N': { sunHours: 2.8, avgUsage: 3000 },
  'S': { sunHours: 3.8, avgUsage: 2600 },
  'B': { sunHours: 3.1, avgUsage: 2850 },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { postcode, kitSize, consumption } = req.body;
    
    const postcodePrefix = postcode?.charAt(0).toUpperCase() || 'E';
    const data = UK_POSTCODES[postcodePrefix] || UK_POSTCODES['E'];
    
    // Calculate annual generation
    const annualGeneration = kitSize * data.sunHours * 365;
    
    // Assume 50p per kWh saved
    const annualSavings = (annualGeneration * 0.5).toFixed(2);
    
    // Calculate payback period
    const systemCost = kitSize * 600; // £600 per W average
    const paybackYears = (systemCost / annualSavings).toFixed(1);
    
    // 25 year ROI
    const roi25Year = (annualSavings * 25 - systemCost).toFixed(2);
    
    res.status(200).json({
      postcode,
      kitSize,
      consumption: consumption || data.avgUsage,
      sunHours: data.sunHours,
      annualGeneration: annualGeneration.toFixed(0),
      annualSavings,
      systemCost,
      paybackYears,
      roi25Year,
      recommendedKit: kitSize >= 600 ? 'EcoFlow Delta Pro 5' : kitSize >= 500 ? 'Bluetti AC300' : 'Anker 757',
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
