var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
var AppComponent = (function () {
    function AppComponent() {
        this.firstName = 'Joe';
        this.formSubmitted = false;
        this.extendedFormSubmitted = false;
        this.extendedPersonForm = new FormGroup({
            name: new FormControl('Joe', Validators.required),
            age: new FormControl(20)
        });
    }
    AppComponent.prototype.onSubmitPersonForm = function () {
        this.formSubmitted = true;
    };
    AppComponent.prototype.onSubmitExtendedPersonForm = function () {
        this.extendedFormSubmitted = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app3',
        template: "<div class=\"demo\">\n                <h2>FormsModule</h2> \n                <form (ngSubmit)=\"onSubmitPersonForm()\" #personForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input #name=\"ngModel\" required [(ngModel)]=\"firstName\" name=\"firstName\">\n                    <button [disabled]=\"!personForm.form.valid\" type=\"submit\">Submit</button>\n                  </div>\n                  <div [hidden]=\"name.valid || name.pristine\">\n                    Name is required\n                  </div>   \n                </form>\n                <div *ngIf=\"formSubmitted\">Form was submitted</div>\n                \n                <h2>ReactiveFormsModule</h2>   \n                <form (ngSubmit)=\"onSubmitExtendedPersonForm()\" [formGroup]=\"extendedPersonForm\">\n                  <label>Name:</label>\n                  <input type=\"text\" formControlName=\"name\">\n                  <label>Age:</label>\n                  <input type=\"number\" formControlName=\"age\">\n                  <button [disabled]=\"!extendedPersonForm.valid\" type=\"submit\">Submit</button>\n                </form>\n                <div *ngIf=\"extendedFormSubmitted\">Form was submitted</div>\n             </div>"
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map