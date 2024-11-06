// Type of initial URL : https://youtu.be/kNDPSKnNT8g?si=jA1cQh5sftzxgK0B

const ytChannelsPage = require("../Classes/ytChannels.page.js");
const ytShortsPage = require("../Classes/ytShorts.page.js");
const ytVideosPage = require("../Classes/ytVideos.page.js");
const examplePage = require("../Classes/example.page.js");

module.exports.pageFactory = async (page, url) => {
  console.log("In Page Factory checkpoint 1");

  console.log("In Page Factory checkpoint 2 Waiting of 5 seconds started");
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("In Page Factory checkpoint 3 Waiting of 5 seconds Ended.");

  await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 });
  await page.waitForFunction(() => document.readyState === "complete", {
    timeout: 30000,
  });

  console.log("In Page Factory checkpoint 3");

  url ||= await page.url();

  console.log("Initial navigation to : " + url);

  if (url.includes("example.com")) {
    console.log("Yes, it is example.com");
    return new examplePage(page);
  } else if (url.includes("youtu")) {
    if (url.includes("@")) {
      return new ytChannelsPage(page);
    } else if (url.includes("watch") || url.includes("youtu.be")) {
      // it is youtube's video url
      return new ytVideosPage(page);
    } else if (url.includes("shorts")) {
      // it is youtube's shorts url
      return new ytShortsPage(page);
    } else return new ytUnknownPage(page);
  }
};
