var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable, Input } from '@angular/core';
var Treeview = (function () {
    function Treeview() {
    }
    return Treeview;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], Treeview.prototype, "directories", void 0);
Treeview = __decorate([
    Component({
        selector: 'treeview',
        templateUrl: './treeview.html',
        styleUrls: ['treeview.css']
    }),
    Injectable()
], Treeview);
export { Treeview };
//# sourceMappingURL=treeview.js.map