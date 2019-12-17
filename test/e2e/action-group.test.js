
const { assert, driver } = require('vl-ui-core').Test;
const VlActionGroupPage = require('./pages/vl-action-group.page');

describe('vl-action-group', async () => {
    const vlActionGroupPage = new VlActionGroupPage(driver);

    before(() => {
        return vlActionGroupPage.load();
    });

    after(() => driver && driver.quit());
});