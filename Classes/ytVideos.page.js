class ytVideosPage {
  constructor(page) {
    this.page = page;
  }

  getPageName() {
    console.log("Page name: " + this.constructor.name);
    return this.constructor.name;
  }
  async playVideo() {
    await this.page.click('button[aria-label="Play"]');
  }

  async isVideoPlaying() {
    return (await this.page.$('video[aria-label="Video player"]')) !== null;
  }

  async getVideoTitle() {
    return await this.page.title();
  }
}
module.exports = ytVideosPage;
