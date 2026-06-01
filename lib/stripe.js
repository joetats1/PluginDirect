// Stripe payment integration
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createCheckoutSession(priceId, customerEmail) {
  const session = await stripe.checkout.sessions.create({
    customer_email: customerEmail,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/calculator`,
    subscription_data: {
      metadata: {
        product: 'premium_calculator',
      },
    },
  });
  
  return session;
}

export async function getSubscriptionStatus(customerId) {
  const subscriptions = await stripe.subscriptions.list({
    customer: customerId,
    limit: 1,
  });
  
  return subscriptions.data[0] || null;
}
