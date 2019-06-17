import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';


/**
 * VLActionGroup
 * @class
 * @classdesc Toon meerdere knoppen of links. De groep zorgt ervoor dat ze correct zijn uitgelijnd. <a href="demo/vl-action-group.html">Demo</a>.
 *
 * @extends VlElement
 */
export class VlActionGroup extends NativeVlElement(HTMLDivElement) {

  connectedCallback() {
    this.classList.add('vl-action-group');
    this._applyAttributes();
  }

  get _classPrefix() {
    return 'vl-action-group--';
  }

  get _stylePath() {
    return '../style.css';
  }


  static get _observedClassAttributes() {
    return ['align','space-between','bordered'];
  }

  get _align() {
    return this.getAttribute('align');
  }

  get _spaceBetween() {
    return this.getAttribute('space-between');
  }

  get _bordered() {
    return this.getAttribute('bordered');
  }

  _alignChangedCallback(oldValue, newValue){
    if (["center", "right"].indexOf(newValue) >= 0){
      this._element.classList.add(this._classPrefix + 'align-' + newValue);
    }else {
      this._element.classList.remove(this._classPrefix + 'align-' + oldValue);
    }
  }

  _space_betweenChangedCallback(oldValue, newValue) {
    if (newValue != undefined){
      this._element.classList.add(this._classPrefix + 'space-between');
    }else{
      this._element.classList.remove(this._classPrefix + 'space-between');
    }
  }

  _borderedChangedCallback(oldValue, newValue) {
    if (newValue != undefined){
      this._element.classList.add(this._classPrefix + 'bordered');
    }else{
      this._element.classList.remove(this._classPrefix + 'bordered');
    }
  }

  _applyAttributes() {

  }


}

customElements.define('vl-action-group', VlActionGroup,{extends: 'div'});