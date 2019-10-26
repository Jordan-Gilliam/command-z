const puppeteer = require('puppeteer');
const { goToUrl, waitForEl, typeInEl, click } = require('./util');

(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();

  try {
    await goToUrl(page, 'login');
    await waitForEl(page, 'div:nth-child(2) > input');
    await typeInEl(page, 'div:nth-child(2) input', user);
    await waitForEl(page, 'div:nth-child(3) > input');
    await typeInEl(page, 'div:nth-child(3) input', pass);
    await click(page, 'form div.clearfix button');
    await goToUrl(page, `${name}/with_replies`);
  } catch (e) {
    console.log(e);
  }
})();
