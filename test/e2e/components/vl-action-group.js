const {VlElement} = require('vl-ui-core').Test;

class VlActionGroup extends VlElement {
  async getAlignedType() {
    return this.getAttribute('data-vl-align');
  }

  async isLeftAligned() {
    return (await this.getAlignedType()) == undefined;
  }

  async isCenterAligned() {
    return (await this.getAlignedType()) === 'center';
  }

  async isRightAligned() {
    return (await this.getAlignedType()) === 'right';
  }

  async hasSpaceBetween() {
    return this.hasAttribute('space-between');
  }

  async isBordered() {
    return this.hasAttribute('bordered');
  }
}

module.exports = VlActionGroup;
