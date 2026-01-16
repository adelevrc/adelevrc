export interface SubscribeNewsletterInput {
  email: string;
}

export interface SubscribeNewsletterResponse {
  subscribeNewsletter: {
    email: string;
  };
}
