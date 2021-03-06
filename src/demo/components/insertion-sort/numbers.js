"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var insertion_sort_1 = require("./insertion-sort");
var Numbers = (function () {
    function Numbers() {
    }
    Numbers.prototype.ngOnInit = function () {
        this.list = new ValList();
        this.list.items = [
            new ListItem(5),
            new ListItem(33),
            new ListItem(5),
            new ListItem(5),
            new ListItem(2),
            new ListItem(-2),
            new ListItem(4),
            new ListItem(88),
            new ListItem(6),
            new ListItem(400),
            new ListItem(1),
            new ListItem(58),
            new ListItem(30)
        ];
    };
    Numbers.prototype.sortList = function () {
        insertion_sort_1.Insertion.sort(this.list);
    };
    return Numbers;
}());
Numbers = __decorate([
    core_1.Component({
        selector: 'insertion-sort',
        inputs: ['list: list'],
        templateUrl: './insertion-sort.html'
    })
], Numbers);
exports.Numbers = Numbers;
var ValList = (function () {
    function ValList() {
    }
    ValList.prototype.setCurrent = function (item) {
        this.clearAll();
        item.current = true;
    };
    ValList.prototype.clearAll = function () {
        this.items.forEach(function (i) { return i.current = false; });
    };
    return ValList;
}());
exports.ValList = ValList;
var ListItem = (function () {
    function ListItem(val) {
        this.val = val;
        this.current = false;
    }
    ListItem.prototype.getClass = function () {
        if (this.current) {
            return 'current-item';
        }
        return null;
    };
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=numbers.js.map