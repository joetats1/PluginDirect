export default async function handler(req, res) {
  // Stripe webhook handler for subscription events
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const Stripe = require('stripe');
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle subscription events
  switch (event.type) {
    case 'customer.subscription.created':
      console.log('Subscription created:', event.data.object);
      // TODO: Log to database
      break;
    case 'customer.subscription.deleted':
      console.log('Subscription deleted:', event.data.object);
      // TODO: Log to database
      break;
    case 'invoice.payment_succeeded':
      console.log('Payment succeeded:', event.data.object);
      // TODO: Send invoice email
      break;
  }

  res.json({ received: true });
}

export const config = {
  api: {
    bodyParser: {
      raw: true,
    },
  },
};
