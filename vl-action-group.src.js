import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';


/**
 * VLActionGroup
 * @class
 * @classdesc Toon meerdere knoppen of links. De groep zorgt ervoor dat ze correct zijn uitgelijnd. <a href="demo/vl-action-group.html">Demo</a>.
 *
 * @extends NativeVlElement
 *
 * @property {string} align - Attribuut wordt gebruikt om ervoor te zorgen dat de onderliggende elementen worden gealigneerd. Mogelijkheden: align="center" of align="right".
 * @property {boolean} space-between - Attribuut wordt gebruikt om aan te duiden dat de ruimte tussen de elementen volledig moet worden opgevuld.
 * @property {boolean} bordered - Attribuut wordt gebruikt om aan te duiden dat de tussenliggende elementen een rand krijgen.
 */
export class VlActionGroup extends NativeVlElement(HTMLDivElement) {

  connectedCallback() {
    this.classList.add('vl-action-group');
  }

  get _classPrefix() {
    return 'vl-action-group--';
  }

  get _stylePath() {
    return '../style.css';
  }


  static get _observedClassAttributes() {
    return ['align', 'space-between', 'bordered'];
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
    this._attribuutChangedCallback('space-between', oldValue, newValue);
  }

  _borderedChangedCallback(oldValue, newValue) {
    this._attribuutChangedCallback('bordered', oldValue, newValue);
  }

  _attribuutChangedCallback(attribuut, oldValue, newValue) {
    if (newValue != undefined){
      this._element.classList.add(this._classPrefix + attribuut);
    }else{
      this._element.classList.remove(this._classPrefix + attribuut);
    }
  }

}

customElements.define('vl-action-group', VlActionGroup,{extends: 'div'});
