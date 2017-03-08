/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './numbers';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/common/src/directives/ng_class';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_for';
export class Wrapper_Numbers {
  /*private*/ _eventHandler:Function;
  context:import0.Numbers;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.Numbers();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_list(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.list = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_Numbers_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_Numbers_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.Numbers>;
  _Numbers_0_3:Wrapper_Numbers;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Numbers_Host0,renderType_Numbers_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'insertion-sort',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_Numbers0(this.viewUtils,this,0,this._el_0);
    this._Numbers_0_3 = new Wrapper_Numbers();
    this.compView_0.create(this._Numbers_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._Numbers_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Numbers) && (0 === requestNodeIndex))) { return this._Numbers_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Numbers_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NumbersNgFactory:import8.ComponentFactory<import0.Numbers> = new import8.ComponentFactory<import0.Numbers>('insertion-sort',View_Numbers_Host0,import0.Numbers);
const styles_Numbers:any[] = ([] as any[]);
class View_Numbers1 extends import2.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import9.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_Numbers1,renderType_Numbers,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'td',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._NgClass_0_3 = new import9.Wrapper_NgClass(this.parentView.parentView.injectorGet(import11.IterableDiffers,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import12.KeyValueDiffers,this.parentView.parentIndex),new import13.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit.getClass();
    this._NgClass_0_3.check_ngClass(currVal_0_0_0,throwOnChange,false);
    this._NgClass_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_6:any = import3.inlineInterpolate(1,'',this.context.$implicit.val,'');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_3,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_Numbers:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_Numbers,{});
export class View_Numbers0 extends import2.AppView<import0.Numbers> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import10.ViewContainer;
  _TemplateRef_8_5:any;
  _NgFor_8_6:import15.Wrapper_NgFor;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_Numbers0,renderType_Numbers,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Insertion Sort',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'table',new import3.InlineArray2(2,'class','sort'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'tbody',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_5,'tr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_8 = new import10.ViewContainer(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import16.TemplateRef_(this,8,this._anchor_8);
    this._NgFor_8_6 = new import15.Wrapper_NgFor(this._vc_8.vcRef,this._TemplateRef_8_5,this.parentView.injectorGet(import11.IterableDiffers,this.parentIndex),this.ref);
    this._text_9 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','margin-top: 10px;'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'Sort list',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_14,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_14));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import17.NgFor) && (8 === requestNodeIndex))) { return this._NgFor_8_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8_0_0:any = this.context.list.items;
    this._NgFor_8_6.check_ngForOf(currVal_8_0_0,throwOnChange,false);
    this._NgFor_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_Numbers1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
  handleEvent_14(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.sortList()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}