const VlActionGroup = require('../components/vl-action-group');
const { Page, Config } = require('vl-ui-core').Test;

class VlActionGroupPage extends Page {
    async _getActionGroup(selector) {
        return new VlActionGroup(this.driver, selector);
    }

    async getActionGroup() {
        return this._getActionGroup('#vl-action-group-1');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-action-group.html');
    }
}

module.exports = VlActionGroupPage;
