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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/forkJoin");
var FriendService = (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.getFriends = function () {
        return this.http
            .get('./friends1.json')
            .map(function (res) { return res.json(); });
    };
    FriendService.prototype.getFriendsSequentially = function () {
        var _this = this;
        return this.http
            .get('./friends1.json')
            .map(function (res) { return res.json().friends; })
            .flatMap(function (friends) { return _this.http.get('./friends1.json')
            .map(function (res) { return friends.concat(res.json().friends); }); });
    };
    FriendService.prototype.getFriendsInParallel = function () {
        return Observable_1.Observable.forkJoin(this.http.get('./friends1.json').map(function (res) { return res.json(); }), this.http.get('./friends2.json').map(function (res) { return res.json(); }));
    };
    return FriendService;
}());
FriendService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FriendService);
exports.FriendService = FriendService;
//# sourceMappingURL=friend-service.js.map