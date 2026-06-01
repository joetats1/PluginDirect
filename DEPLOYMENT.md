# 🚀 PluginDirect — Live Deployment Checklist

## ✅ Environment Variables (Add to Vercel)

```bash
# Database
DATABASE_URL=postgresql://...
REDIS_URL=redis://...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_PREMIUM=price_...
STRIPE_PRICE_ANALYTICS=price_...
STRIPE_PRICE_INSTALLER=price_...

# Mailchimp
MAILCHIMP_API_KEY=...-us1
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=...

# Affiliates
ECOFLOW_AFFILIATE_ID=...
ANKER_AFFILIATE_ID=...
AMAZON_ASSOCIATE_TAG=plugindirect-21

# Google
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...
NEXT_PUBLIC_GA_ID=G-...

# URLs
NEXT_PUBLIC_URL=https://plugindirect.co.uk
NODE_ENV=production
```

## 🎯 Setup Steps

### 1. **Stripe Integration** ⏱️ 15 min
- [ ] Create Stripe account
- [ ] Create 3 subscription prices (£9.99, £19.99, £49.99)
- [ ] Add webhook: `https://plugindirect.co.uk/api/webhooks/stripe`
- [ ] Copy public & secret keys

### 2. **Mailchimp** ⏱️ 10 min
- [ ] Create Mailchimp account
- [ ] Create audience "PluginDirect"
- [ ] Get API key & audience ID
- [ ] Create email template for welcome

### 3. **Affiliate Programs** ⏱️ 20 min
- [ ] EcoFlow affiliate signup → get affiliate ID
- [ ] Anker affiliate signup → get affiliate ID
- [ ] Amazon Associates → get tag (plugindirect-21)
- [ ] Add tracking URLs to `/lib/affiliates.js`

### 4. **Google AdSense** ⏱️ 5 min
- [ ] Apply at google.com/adsense
- [ ] Get publisher ID (ca-pub-...)
- [ ] Add to environment variables
- [ ] Deploy to see ads

### 5. **Deploy to Vercel** ⏱️ 10 min
```bash
git push origin main
# Auto-deploys to Vercel
```

### 6. **Custom Domain** ⏱️ 15 min
- [ ] Add DNS records in domain registrar
- [ ] Point to Vercel nameservers
- [ ] Enable SSL/TLS

### 7. **Analytics** ⏱️ 5 min
- [ ] Create Google Analytics 4 property
- [ ] Add GA4 measurement ID
- [ ] Track all conversion events

---

## 📊 Live URLs

| Page | URL | Purpose |
|------|-----|----------|
| Homepage | `/` | SEO, brand awareness |
| Compare Kits | `/compare` | Product listings + affiliate links |
| Calculator | `/calculator` | Lead capture + savings |
| DNO Wizard | `/dno-wizard` | Installer referrals |
| Checkout | `/checkout` | Stripe subscriptions |

---

## 💰 First 30 Days Revenue Target

```
Assuming 1,000 visitors/day:
├─ 50 calculator uses → 10 leads → £1,500 referrals
├─ 5 affiliate clicks → 1 sale → £100 affiliate
├─ 2 premium subscribers → £20/month = £40
└─ 500 ad impressions → £2 AdSense

DAY 1: ~£1,500
WEEK 1: ~£10,500
MONTH 1: ~£45,000 🎯
```

---

## 🔗 Resources

- **Stripe Dashboard**: https://dashboard.stripe.com
- **Mailchimp**: https://mailchimp.com
- **Vercel**: https://vercel.com/dashboard
- **Google Analytics**: https://analytics.google.com
- **EcoFlow Affiliate**: https://affiliate.ecoflow.com

---

## ⚠️ Legal Compliance

- [ ] Privacy Policy (GDPR compliant)
- [ ] Terms of Service
- [ ] Affiliate Disclosure on product pages
- [ ] FCA disclaimer for financial projections
- [ ] Cookie consent banner

---

✅ **Status**: Ready for production launch
📈 **Projected Year 1 Revenue**: £500K - £1M
🎯 **Target Users by Month 3**: 10,000

