const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlActionGroupPage = require('./pages/vl-action-group.page');

describe('vl-action-group', async () => {
    const vlActionGroupPage = new VlActionGroupPage(driver);

    before(() => {
        return vlActionGroupPage.load();
    });

    it('als gebruiker kan ik het verschil zien tussen een left, center en right aligned action group', async () => {
        const actionGroup = await vlActionGroupPage.getActionGroup();
        const actionGroupAlignCenter = await vlActionGroupPage.getAlignCenterActionGroup();
        const actionGroupAlignRight = await vlActionGroupPage.getAlignRightActionGroup();

        await assert.eventually.isTrue(actionGroup.isLeftAligned());
        await assert.eventually.isFalse(actionGroupAlignCenter.isLeftAligned());
        await assert.eventually.isFalse(actionGroupAlignRight.isLeftAligned());

        await assert.eventually.isFalse(actionGroup.isCenterAligned());
        await assert.eventually.isTrue(actionGroupAlignCenter.isCenterAligned());
        await assert.eventually.isFalse(actionGroupAlignRight.isCenterAligned());

        await assert.eventually.isFalse(actionGroup.isRightAligned());
        await assert.eventually.isFalse(actionGroupAlignCenter.isRightAligned());
        await assert.eventually.isTrue(actionGroupAlignRight.isRightAligned());
    });

    it('als gebruiker kan ik het verschil zien tussen een standaard en een action group space-between variant', async () => {
        const actionGroup = await vlActionGroupPage.getActionGroup();
        const actionGroupSpaceBetween = await vlActionGroupPage.getSpaceBetweenActionGroup();

        await assert.eventually.isFalse(actionGroup.hasSpaceBetween());
        await assert.eventually.isTrue(actionGroupSpaceBetween.hasSpaceBetween());
    });

    it('als gebruiker kan ik het verschil zien tussen een standaard en een action group bordered variant', async () => {
        const actionGroup = await vlActionGroupPage.getActionGroup();
        const actionGroupBordered = await vlActionGroupPage.getBorderedActionGroup();

        await assert.eventually.isFalse(actionGroup.isBordered());
        await assert.eventually.isTrue(actionGroupBordered.isBordered());
    });

    it('als gebruiker kan ik op de knoppen klikken van een action group', async () => {
        const actionGroup = await vlActionGroupPage.getActionGroup();
        const primaryButton = await actionGroup.getButtonMetIndex(0);
        const secondaryButton = await actionGroup.getButtonMetIndex(1);
        await primaryButton.click();
        await secondaryButton.click();
        await assert.eventually.isFalse(primaryButton.isSecondary());
        await assert.eventually.isTrue(secondaryButton.isSecondary());
    });

    after(async () => { return driver.quit(); });
});
