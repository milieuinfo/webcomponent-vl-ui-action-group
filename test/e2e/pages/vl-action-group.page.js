const {Page, Config} = require('vl-ui-core').Test;
const VlActionGroup = require('../components/vl-action-group');

class VlActionGroupPage extends Page {
  async getActionGroup() {
    return this._getActionGroup('#vl-action-group');
  }

  async getAlignCenterActionGroup() {
    return this._getActionGroup('#vl-action-group-align-center');
  }

  async getAlignRightActionGroup() {
    return this._getActionGroup('#vl-action-group-align-right');
  }

  async getSpaceBetweenActionGroup() {
    return this._getActionGroup('#vl-action-group-space-between');
  }

  async getBorderedActionGroup() {
    return this._getActionGroup('#vl-action-group-bordered');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-action-group.html');
  }

  async _getActionGroup(selector) {
    return new VlActionGroup(this.driver, selector);
  }
}

module.exports = VlActionGroupPage;
