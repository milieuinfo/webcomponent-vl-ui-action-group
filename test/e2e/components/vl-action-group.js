const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlActionGroup extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
    }

    async klikOpButtonMetIndex(index) {
        return (await this.findElements(By.css('button')))[index].click();
    }
}

module.exports = VlActionGroup;
