"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var demo_1 = require("./demo");
var grid_demo_1 = require("./components/grid/grid-demo");
var grid_1 = require("./components/grid/grid");
var treeview_1 = require("./components/treeview");
var dynamic_form_1 = require("./components/dynamic-form");
var input_controls_1 = require("./components/input-controls/input-controls");
var name_1 = require("./components/two-way-binding/name");
var numbers_1 = require("./components/insertion-sort/numbers");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [demo_1.Demo, grid_demo_1.GridDemo, grid_1.Grid,
            treeview_1.Treeview, treeview_1.TreeviewDemo,
            dynamic_form_1.Survey, dynamic_form_1.SurveyDemo,
            input_controls_1.InputControls,
            name_1.Name,
            numbers_1.Numbers
        ],
        bootstrap: [demo_1.Demo],
        imports: [platform_browser_1.BrowserModule,
            app_routes_1.routing,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map