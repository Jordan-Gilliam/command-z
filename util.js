const goToUrl = async (page, u) => page.goto(`https://twitter.com/${u}`, { waitUntil: 'networkidle0' });
const waitForEl = async (page, el) => page.waitForSelector(el);
const typeInEl = async (page, el, val) => page.type(el, val);
const click = async (page, el) => page.click(el);

module.exports = { goToUrl, waitForEl, typeInEl, click };
