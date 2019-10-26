const goToUrl = async (page, u) => page.goto(`https://twitter.com/${u}`, { waitUntil: 'networkidle0' });
const waitForEl = async (page, e) => page.waitForSelector(e);
const typeInEl = async (page, e, v) => page.type(e, v);
const click = async (page, e) => page.click(e);

module.exports = { goToUrl, waitForEl, typeInEl, click };
