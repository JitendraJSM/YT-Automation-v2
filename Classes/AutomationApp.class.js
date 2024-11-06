let { getBrowser } = require("../modules/browser.module.js");

class AutomationApp {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async init(options) {
    let { browser, page } = await getBrowser(options);
    this.browser = browser;
    this.page = page;
  }

  async navigateToPage(url) {
    await this.page.goto(url);
  }

  async close() {
    await this.browser.close();
  }

  async performActionsOnPage(pageInstance) {
    await pageInstance.performActions();
  }
}

module.exports = AutomationApp;
