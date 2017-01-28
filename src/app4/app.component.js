var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FriendService } from './friend-service';
var AppComponent = (function () {
    function AppComponent(friendService) {
        this.friendService = friendService;
        this.firstName = 'Joe';
        this.formSubmitted = false;
        this.extendedFormSubmitted = false;
        this.friends1 = [];
        this.friends2 = [];
        this.friends3 = [];
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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.friendService
            .getFriendsSequentially()
            .subscribe(function (res) {
            _this.friends3 = res.slice();
        });
        this.friendService
            .getFriendsInParallel()
            .subscribe(function (res) {
            _this.friends2 = res[0].friends.concat(res[1].friends);
        });
        this.friendService
            .getFriends()
            .subscribe(function (res) {
            _this.friends1 = res.friends;
        }, function (error) { return console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app4',
        template: "<div class=\"demo\">\n                <h2>FormsModule</h2> \n                <form (ngSubmit)=\"onSubmitPersonForm()\" #personForm=\"ngForm\">\n                  <div class=\"form-group\">\n                    <label for=\"name\">Name</label>\n                    <input #name=\"ngModel\" required [(ngModel)]=\"firstName\" name=\"firstName\">\n                    <button [disabled]=\"!personForm.form.valid\" type=\"submit\">Submit</button>\n                  </div>\n                  <div [hidden]=\"name.valid || name.pristine\">\n                    Name is required\n                  </div>   \n                </form>\n                <div *ngIf=\"formSubmitted\">Form was submitted</div>\n                \n                <h2>ReactiveFormsModule</h2>   \n                <form (ngSubmit)=\"onSubmitExtendedPersonForm()\" [formGroup]=\"extendedPersonForm\">\n                  <label>Name:</label>\n                  <input type=\"text\" formControlName=\"name\">\n                  <label>Age:</label>\n                  <input type=\"number\" formControlName=\"age\">\n                  <button [disabled]=\"!extendedPersonForm.valid\" type=\"submit\">Submit</button>\n                </form>\n                <div *ngIf=\"extendedFormSubmitted\">Form was submitted</div>\n\n                <h2>HttpModule</h2>\n                <h5>First list of friends</h5>\n                <div *ngFor=\"let friend of friends1\">{{friend}}</div>\n\n                <h5>Two list of friends fetched in parallel</h5>\n                <div *ngFor=\"let friend of friends2\">{{friend}}</div>\n\n                <h5>Two list of friends feteched sequentially</h5>\n                <div *ngFor=\"let friend of friends3\">{{friend}}</div>\n             </div>"
    }),
    __metadata("design:paramtypes", [FriendService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map