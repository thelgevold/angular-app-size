"use strict";
var router_1 = require("@angular/router");
var treeview_1 = require("./components/treeview");
var grid_demo_1 = require("./components/grid/grid-demo");
var dynamic_form_1 = require("./components/dynamic-form");
var input_controls_1 = require("./components/input-controls/input-controls");
var name_1 = require("./components/two-way-binding/name");
var numbers_1 = require("./components/insertion-sort/numbers");
var routes = [
    { path: 'grid', component: grid_demo_1.GridDemo },
    { path: 'treeview', component: treeview_1.TreeviewDemo },
    { path: 'survey', component: dynamic_form_1.SurveyDemo },
    { path: 'input', component: input_controls_1.InputControls },
    { path: 'sort', component: numbers_1.Numbers },
    { path: '', component: name_1.Name },
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map