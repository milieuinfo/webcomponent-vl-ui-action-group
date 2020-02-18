const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlActionGroupPage = require('./pages/vl-action-group.page');

describe('vl-action-group', async () => {
    const vlActionGroupPage = new VlActionGroupPage(driver);

    before(() => {
        return vlActionGroupPage.load();
    });

    it('als gebruiker kan ik op de knoppen klikken van een action group', async () => {
        const actionGroup = await vlActionGroupPage.getActionGroup();
        await actionGroup.klikOpButtonMetIndex(0);
        await actionGroup.klikOpButtonMetIndex(1);
    });

    after(async () => { return driver.quit(); });
});
