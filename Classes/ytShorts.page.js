class ytShortsPage {
  constructor(page) {
    this.page = page;
  }

  async playNextVideo() {
    await this.page.click('button[aria-label="Play next video"]');
  }

  async isVideoPlaying() {
    return (await this.page.$('video[aria-label="Video player"]')) !== null;
  }
}

module.exports = ytShortsPage;
