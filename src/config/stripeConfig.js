import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51TZLdFL6QOjnJb61XmD3Hf2glBe0BPz1JRpIVgt03ON0ErWLk7V6nqi1xT775z1QhmTz80GFR0sAV6nh2okvqsWG00Kkv0NfIR');

export default stripePromise;