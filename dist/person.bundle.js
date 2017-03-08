webpackJsonp([0,2],[
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
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_service__ = __webpack_require__(0);


class PersonService {

  constructor() {
    this.logger = new __WEBPACK_IMPORTED_MODULE_0__logger_service__["a" /* LoggerService */]();
  }

  getPerson() {
    this.logger.logMessage('getting person');
    return 'Joe Smith';
  }
}
/* harmony export (immutable) */ __webpack_exports__["PersonService"] = PersonService;


let personService = new PersonService();
personService.getPerson();

/***/ })
],[2]);