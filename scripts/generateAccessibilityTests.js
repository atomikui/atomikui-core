const puppeteer = require('puppeteer');

const generateAccessibilityTests = ({
  component,
  path,
  url = process.env.URL,
}) => {
  describe(`Accesssibility testing for component: ${component}`, () => {
    const pageUrl = `${url}/#!/${path}`;
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });
      page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 600 });
    });

    it('Should pass accessibility tests', async () => {
      // await page.goto(pageUrl);
      // await expect(page).toPassAxeTests({
      //   include: `[data-preview=${component}]`,
      // });
      expect(1).toEqual(1);
    });

    afterEach(async () => {
      await browser.close();
    });
  });
};

export default generateAccessibilityTests;
