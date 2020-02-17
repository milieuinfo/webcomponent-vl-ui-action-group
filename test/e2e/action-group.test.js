
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlActionGroupPage = require('./pages/vl-action-group.page');

describe('vl-action-group', async () => {
    const vlActionGroupPage = new VlActionGroupPage(driver);

    before(() => {
        return vlActionGroupPage.load();
    });

    it('als gebruiker kan ik op een knop klikken in een action group', async () => {
        await vlActionGroupPage.klikOpEersteButtonVanActionGroup();
    });

    after((done) => {
        if (driver) {
            driver.quit();
        }
        done();
    });
});
