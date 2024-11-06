const db = require("./modules/data.module.js");
const AutomationApp = require("./Classes/AutomationApp.class.js");

const { pageFactory } = require("./modules/page.module.js");

async function main() {
  const app = new AutomationApp();
  await app.init(db.options);

  await app.navigateToPage(db.url);

  console.log("db.url : ", db.url);

  // await subscribeToChannel(app.page, db.url);
  const ytpage = await pageFactory(app.page, db.url);

  const pageName = ytpage.getPageName();
  console.log("In index pageName : ", pageName);

  // const pageYT = await navigateToChannel(browser, db.url);
}
main();
