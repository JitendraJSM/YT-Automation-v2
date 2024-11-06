class ytChannelsPage {
  constructor(page) {
    this.page = page;
  }

  async subscribe() {
    await this.page.click('button[aria-label="Subscribe"]');
  }

  async getChannelName() {
    const channelNameElement = await this.page.$('meta[itemprop="name"]');
    return await this.page.evaluate((el) => el.content, channelNameElement);
  }

  async isSubscribed() {
    const subscribedButton = await this.page.$(
      'button[aria-label="Subscribed"]'
    );
    return subscribedButton !== null;
  }
}
module.exports = ytChannelsPage;
