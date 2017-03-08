"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var column_1 = require("./column");
var GridDemo = (function () {
    function GridDemo() {
        this.people = this.getPeople();
        this.columns = this.getColumns();
    }
    GridDemo.prototype.getPeople = function () {
        var people = [
            this.createRow('Joe', 'Jackson', 20),
            this.createRow('Jack', 'Smith', 20),
            this.createRow('Tim', 'Jackson', 20),
            this.createRow('Jane', 'Doe', 40)
        ];
        return people;
    };
    GridDemo.prototype.createRow = function (firstName, lastName, age) {
        return { 'firstName': firstName, 'lastName': lastName, 'age': age };
    };
    GridDemo.prototype.getColumns = function () {
        return [
            new column_1.Column('firstName', 'First Name'),
            new column_1.Column('lastName', 'Last Name'),
            new column_1.Column('age', 'Age')
        ];
    };
    return GridDemo;
}());
GridDemo = __decorate([
    core_1.Component({
        selector: 'grid-demo',
        template: '<grid name="person grid" [rows]="people" [columns]="columns"></grid>'
    }),
    __metadata("design:paramtypes", [])
], GridDemo);
exports.GridDemo = GridDemo;
//# sourceMappingURL=grid-demo.js.map