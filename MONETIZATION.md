# PluginDirect — Monetization Setup Guide

## 💰 Revenue Streams Activated

### 1. **Affiliate Commissions** (High Priority)
- **EcoFlow, Anker, Bluetti** - Track clicks & conversions
- **Amazon Associates** - 10% commission on kit sales
- **Installer networks** - £100-300 per qualified lead

**Setup:**
```bash
# Add affiliate links to environment
EAFLOW_AFFILIATE_ID=your_ecoflow_id
ANKER_AFFILIATE_ID=your_anker_id
AMAZON_ASSOCIATE_TAG=plugindirect-21
```

### 2. **Premium Subscriptions** (Stripe)
- **Premium Calculator** - £9.99/month
- **Advanced Analytics** - £19.99/month
- **Installer Dashboard** - £49.99/month

**Setup:**
```bash
# Stripe API keys
STRIPE_PUBLIC_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Price IDs from Stripe
STRIPE_PRICE_PREMIUM=price_...
STRIPE_PRICE_ANALYTICS=price_...
STRIPE_PRICE_INSTALLER=price_...
```

### 3. **Lead Capture** (Mailchimp)
- Collect emails from calculator users
- Segment by postcode & kit size
- Email marketing campaigns
- Installer referrals

**Setup:**
```bash
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=your_list_id
```

### 4. **Display Advertising** (Google AdSense)
- Ads on homepage & guides
- In-content ads
- High CPM (£2-10 per 1000 views)

**Setup:**
```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-...
```

### 5. **Installer Referrals**
- Send qualified leads to installers
- £150-200 per referral
- Track via API

---

## 📊 Revenue Projections

### Year 1 Target: £500K
- **Affiliate commissions**: £200K (10,000 conversions × £20 avg)
- **Lead referrals**: £150K (1,000 leads × £150)
- **AdSense**: £100K (1M impressions)
- **Premium subscribers**: £50K (500 users × £100/yr)

### Year 2 Target: £1.5M
- Scale all channels 3x
- Add partnerships with energy companies
- Expand to EU markets

### Year 3 Target: £3M+
- Full market penetration in UK
- Premium installer network
- API access for partners
- White-label licensing

---

## 🔗 Integration Checklist

- [ ] Create Stripe account & add products
- [ ] Connect Mailchimp audience
- [ ] Register with affiliate networks
- [ ] Apply for Google AdSense
- [ ] Set up webhook handlers
- [ ] Add analytics tracking (GA4)
- [ ] Create payment forms
- [ ] Set up email sequences
- [ ] Track all conversions
- [ ] Deploy to production

---

## 📈 Monitoring

### Key Metrics to Track
1. **Conversion Rate** - calculator → lead
2. **Affiliate CTR** - clicks to affiliate sites
3. **Subscription MRR** - monthly recurring revenue
4. **Lead Quality Score** - installer conversion rate
5. **Cost Per Acquisition** - vs. lifetime value

### Dashboard
```
Visitors → Leads → Conversions → Revenue
   ↓          ↓          ↓          ↓
 10K       1K (10%)   500 (50%)   £25K+
```
