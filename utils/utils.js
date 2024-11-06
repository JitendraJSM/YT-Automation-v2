require("dotenv").config();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.delay = delay;

// NOTE:- You must pass options object as second argument it could be empty to take default values but it must be there.
// func passed to this shuold not call any other function, if it does then may or may not have some bugs.
// func passed to this must not have try-catch block.
exports.robustPolling = async (func, options = {}, ...args) => {
  const {
    maxAttempts = 30,
    delayMs = 1000,
    timeoutMs = 30000,
    retryCondition = () => true,
  } = options;
  return new Promise(async (resolve, reject) => {
    let errMSG,
      attempts = 0;
    const startTime = Date.now();
    while (attempts < maxAttempts && Date.now() - startTime < timeoutMs) {
      attempts++;
      try {
        const result = await func(...args);

        if (result && retryCondition(result)) {
          resolve(result);
          break;
        }
      } catch (err) {
        errMSG = err.message;
        console.log(`Attempt ${attempts} failed with error:`, errMSG);
      }

      await delay(delayMs);
    }
    reject(
      `Function failed after ${maxAttempts} attempts. with Error: ${errMSG}`
    );
  });
};

// ---- new Utiles developed while developing YTAutomation. ----

const randomDelay = async (minSec, maxSec) => {
  await delay(
    (Math.floor(Math.random() * (maxSec - minSec) * 10) + minSec * 10) * 100
  );
};

exports.randomDelay = randomDelay;
// --------------------------------------------------------------
