# PluginDirect - UK's Independent Plug-In Solar Marketplace

A fully functioning website for comparing plug-in solar kits, calculating savings, and completing DNO registrations.

## Features

✅ **Kit Comparison Engine** - Compare all major UK plug-in solar systems side-by-side
✅ **Savings Calculator** - Postcode-based ROI and payback calculations
✅ **DNO Wizard** - Step-by-step registration with distribution network operators
✅ **Customer Reviews** - Real testimonials from UK homeowners
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Fast Performance** - Built with Next.js for lightning-fast load times

## Tech Stack

- **Frontend**: Next.js 14, React 18, CSS-in-JS
- **Backend**: Node.js/Express, PostgreSQL
- **Hosting**: Vercel (recommended)
- **Database**: PostgreSQL + Redis caching

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/joetats1/PluginDirect.git
cd PluginDirect
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── pages/
│   ├── index.js              # Homepage
│   ├── compare.js            # Kit comparison page
│   ├── calculator.js         # Savings calculator
│   ├── dno.js                # DNO registration wizard
│   ├── reviews.js            # Customer reviews
│   └── api/
│       ├── products.js       # Product API
│       ├── savings.js        # Savings calculation API
│       └── reviews.js        # Reviews API
├── components/
│   ├── Layout.js             # Main layout wrapper
│   ├── Header.js             # Navigation header
│   ├── Footer.js             # Footer
│   ├── Hero.js               # Homepage hero section
│   ├── Features.js           # Features section
│   ├── KitComparison.js      # Product cards
│   ├── SavingsCalculator.js  # Calculator form
│   ├── DNOWizard.js          # Multi-step form
│   └── Reviews.js            # Reviews display
├── styles/
│   └── globals.css           # Global styles
└── public/
    └── assets/               # Images and static files
```

## API Endpoints

### GET /api/products
Returns all available plug-in solar kits

### POST /api/savings
Calculates annual savings based on postcode and system size
```json
{
  "postcode": "SW1A 1AA",
  "kitSize": 400,
  "consumption": 2800
}
```

### GET /api/reviews
Returns all customer reviews

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Set environment variables
5. Click Deploy

### Deploy to Other Platforms

The site can be deployed to any Node.js hosting (Heroku, Railway, DigitalOcean, etc.)

```bash
npm run build
npm start
```

## Next Steps - Monetization

To generate £3 million, consider:

1. **Affiliate Commissions** (10-15% per sale) - Partner with kit manufacturers
2. **Installer Referrals** (£100-300 per qualified lead)
3. **Premium Membership** (£99/year) - Advanced calculator, installation guarantee
4. **Advertising** (£5-20 CPM) - Brands paying to reach solar enthusiasts
5. **White Label** - License the platform to energy companies

## Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License - feel free to use for commercial purposes

## Support

Need help? Contact: support@plugindirect.co.uk

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Installation marketplace
- [ ] Battery storage comparison
- [ ] Grid export revenue calculator
- [ ] Multi-language support
- [ ] Smart installer matching
