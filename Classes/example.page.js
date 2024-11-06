class examplePage {
  constructor(page) {
    this.page = page;
  }

  async getPageTitle() {
    return await this.page.title();
  }
  async clickOnMoreInfo() {
    await this.page.click('a[href="https://www.iana.org/domains/example"]');
  }
}

module.exports = examplePage;
