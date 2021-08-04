// import connection
const connection = require('./model/connection');
// make scraping using puppeter
const puppeter = require('puppeteer');

(async () => {
  try {
    const data = await puppeter.launch({ headless: false });
    const page = await data.newPage();
    await page.setViewport({
      width: 1396,
      height: 878,
      deviceScaleFactor: 1,
    });

    const BASE_URL = 'https://sample-university-site.herokuapp.com/approvals/';
    let pageNumber = 1;

    do {
      const endpoint = `${BASE_URL}${pageNumber}`;
      await page.goto(endpoint);
      const elements = await page.$$("body > li");

      for (let i = 2; i < elements.length + 2; i++) {
        const CPFSelector = `body > li:nth-child(${i}) > a`;

        const cpfToSave = await page.$eval(CPFSelector, (element) => {
          return element.innerHTML;
        });

        await page.waitForSelector(CPFSelector);

        // click for details
        await page.click(CPFSelector);
      
        const nameSelector = 'body > div:nth-child(2)';
        await page.waitForSelector(nameSelector);

        const name = await page.evaluate(() => {
          const nameSelector = 'body > div:nth-child(2)';
          return document.querySelector(nameSelector).innerText;
        });

        const nametoSave = name.substring(6);

        const scoreSelector = 'body > div:nth-child(3)';
        await page.waitForSelector(scoreSelector);

        const score = await page.evaluate(() => {
          const scoreSelector = 'body > div:nth-child(3)';
          return document.querySelector(scoreSelector).innerText;
        });

        const scoreToSave = score.slice(-5);

        connection.query(
          'INSERT INTO approved_persons (name, score, cpf) VALUES (?, ?, ?);',
          [nametoSave, scoreToSave, cpfToSave],
          function (err, results, _fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
          },
        );
        await page.goBack();
      };
        pageNumber ++;
    } while(pageNumber > 0);
    return page.close();
  } catch (error) {
      console.log(error);
  };
})();
