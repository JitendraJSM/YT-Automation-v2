// This function is most useful when you want to wait for multiple elements to appear
//  Ex. url could be either channel url or shorts url.

async function waitForFirstElement(page, selectors, timeout = 30000) {
  const elementPromises = selectors.map((selector) =>
    page
      .waitForSelector(selector, { timeout })
      .then((el) => ({ el, selector }))
      .catch(() => null)
  );

  const firstElementnSelector = await Promise.race(elementPromises);

  if (firstElementnSelector) {
    return firstElementnSelector;
  } else {
    throw new Error("None of the elements appeared within the timeout.");
  }
}
module.exports.waitForFirstElement = waitForFirstElement;
/* example Usage:
try {
   const { el, selector } = await waitForFirstElement(page, ['#selector1', '#selector2', '#selector3'], 10000);
   console.log(`First element found: ${selector}`);
   // Do something with el, which is the element handle
} catch (error) {
   console.error(error);
}
*/
