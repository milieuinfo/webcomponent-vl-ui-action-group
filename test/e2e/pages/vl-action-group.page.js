const VlActionGroup = require('../components/vl-action-group');
const { Page, Config } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlActionGroupPage extends Page {
    async _getActionGroup(selector) {
        return new VlActionGroup(this.driver, selector);
    }

    async klikOpEersteButtonVanActionGroup() {
        return (await this.driver.findElement(By.css('#vl-button-1'))).click();
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-action-group.html');
    }
}

module.exports = VlActionGroupPage;
