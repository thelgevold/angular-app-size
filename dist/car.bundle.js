webpackJsonp([1,2],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LoggerService {
  logMessage(msg) {
    console.log(msg);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoggerService;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_service__ = __webpack_require__(0);


class CarService {

  constructor() {
    this.logger = new __WEBPACK_IMPORTED_MODULE_0__logger_service__["a" /* LoggerService */]();
  }

  getCar() {
    this.logger.logMessage('getting car');
    return 'BMW';
  }
}
/* harmony export (immutable) */ __webpack_exports__["CarService"] = CarService;


/***/ })
],[1]);