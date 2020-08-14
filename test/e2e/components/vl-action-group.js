const {VlElement} = require('vl-ui-core').Test;
const {VlButton} = require('vl-ui-button').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlActionGroup extends VlElement {
  async getAlignedType() {
    return this.getAttribute('align');
  }

  async isLeftAligned() {
    return (await this.getAlignedType()) === '';
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

  async getButtonMetIndex(index) {
    return new VlButton(this.driver, (await this.findElements(By.css('button')))[index]);
  }
}

module.exports = VlActionGroup;
