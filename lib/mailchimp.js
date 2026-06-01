// Lead capture and CRM integration
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function addLeadToMailchimp(email, firstName, postcode, kitSize) {
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        POSTCODE: postcode,
        KITSIZE: kitSize,
        SIGNUP_SOURCE: 'plugindirect_calculator',
      },
      tags: ['solar_interested', 'calculator_user'],
    });
    
    return response;
  } catch (error) {
    console.error('Mailchimp error:', error);
    throw error;
  }
}

export async function getLeadCount() {
  try {
    const list = await mailchimp.lists.getList(process.env.MAILCHIMP_AUDIENCE_ID);
    return list.stats.member_count;
  } catch (error) {
    console.error('Error fetching lead count:', error);
    return null;
  }
}

export async function createTag(email, tags) {
  try {
    await mailchimp.lists.updateListMember(process.env.MAILCHIMP_AUDIENCE_ID, email, {
      tags: tags.map(tag => ({ name: tag, status: 'active' })),
    });
  } catch (error) {
    console.error('Error tagging contact:', error);
  }
}
