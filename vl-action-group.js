import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlActionGroup extends(NativeVlElement(HTMLDivElement)){connectedCallback(){this.classList.add("vl-action-group")}get _classPrefix(){return"vl-action-group--"}get _stylePath(){return"/node_modules/vl-ui-action-group/style.css"}static get _observedClassAttributes(){return["align","space-between","bordered"]}_alignChangedCallback(e,t){this._changeClass(this,"align-"+e,"align-"+t,this._classPrefix)}}define("vl-action-group",VlActionGroup,{extends:"div"});
