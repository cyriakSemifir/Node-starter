/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_gentil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_mechant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _classes_arme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



var readline = __webpack_require__(4);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var arme = new _classes_arme__WEBPACK_IMPORTED_MODULE_2__["Arme"]();
rl.question('quel est le nom de votre héro ? ', function (nom) {
    var hero = new _classes_gentil__WEBPACK_IMPORTED_MODULE_0__["Gentil"](nom);
    console.log(hero);
    var mechant = new _classes_mechant__WEBPACK_IMPORTED_MODULE_1__["Mechant"]();
    console.log(mechant);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony import */ var _personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var role;
(function (role) {
    role[role["dps"] = 0] = "dps";
    role[role["tank"] = 1] = "tank";
    role[role["classic"] = 2] = "classic";
    role[role["assassin"] = 3] = "assassin";
})(role || (role = {}));
var Gentil = /** @class */ (function (_super) {
    __extends(Gentil, _super);
    //private enum: role
    function Gentil(nom) {
        var _this = _super.call(this, nom) || this;
        _this.creation(nom);
        return _this;
    }
    Gentil.prototype.creation = function (nom) {
        this.Nom = nom;
        this.Pv = 200;
        this.PvMax = 200;
        this.Defense = 10;
    };
    Gentil.prototype.soigner = function () {
    };
    return Gentil;
}(_personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
var Personnage = /** @class */ (function () {
    function Personnage(nom) {
        this._pv = 0;
        this._pvMax = 0;
        this._defense = 0;
        this._nom = nom;
        this._pv;
        this._pvMax;
        this._defense;
        this._arme;
    }
    Object.defineProperty(Personnage.prototype, "Nom", {
        get: function () {
            return this._nom;
        },
        set: function (param) {
            this._nom = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "Pv", {
        get: function () {
            return this._pv;
        },
        set: function (param) {
            this._pv = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "PvMax", {
        get: function () {
            return this._pvMax;
        },
        set: function (param) {
            this._pvMax = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Personnage.prototype, "Defense", {
        get: function () {
            return this._defense;
        },
        set: function (param) {
            this._defense = param;
        },
        enumerable: true,
        configurable: true
    });
    // attaquer(cible) {
    // }
    Personnage.prototype.cibler = function () {
    };
    return Personnage;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _personnage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Mechant = /** @class */ (function (_super) {
    __extends(Mechant, _super);
    function Mechant(_nom) {
        if (_nom === void 0) { _nom = ""; }
        var _this = _super.call(this, _nom) || this;
        _this.creation();
        return _this;
    }
    Mechant.prototype.creation = function () {
        this.Nom = this.nomAlea();
        this.PvMax = 400;
        this.Pv = 400;
        this.Defense = 5;
    };
    Mechant.prototype.nomAlea = function () {
        var name = Math.random().toString(36).replace(/[^a-z]+/g, '');
        return name[0].toUpperCase() + name.substring(1);
    };
    return Mechant;
}(_personnage__WEBPACK_IMPORTED_MODULE_0__["Personnage"]));



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
var Arme = /** @class */ (function () {
    function Arme() {
        this._degatMini = Math.floor(Math.random() * Math.floor(40) + 1);
        this._degatMax = Math.floor(Math.random() * Math.floor(100) + 1);
        this._chanceDeCrit = 0.5;
        this._nom = "marteau";
        this.creation;
    }
    Arme.prototype.creation = function () {
        this._nom;
        this._degatMini;
        this._degatMax;
    };
    Arme.prototype.setDegatMini = function (param) {
        this._degatMini = param;
    };
    Arme.prototype.getDegatMini = function () {
        return this._degatMini;
    };
    Arme.prototype.setDegatMax = function (param) {
        this._degatMax = param;
    };
    Arme.prototype.getDegatMax = function () {
        return this._degatMax;
    };
    Arme.prototype.setChanceDeCrit = function (param) {
        this._chanceDeCrit = param;
    };
    Arme.prototype.getChanceDeCrit = function () {
        return this._chanceDeCrit;
    };
    Object.defineProperty(Arme.prototype, "Nom", {
        get: function () {
            return this._nom;
        },
        set: function (param) {
            this._nom = param;
        },
        enumerable: true,
        configurable: true
    });
    return Arme;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dlbnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9wZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL21lY2hhbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcm1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0U7QUFDTjtBQUV0QyxJQUFNLFFBQVEsR0FBRyxtQkFBTyxDQUFDLENBQVUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENB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RCwyQkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVTtJQUMxQixDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLO0lBQzFCLENBQUM7SUFFRCwwQkFBVyxHQUFYO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUztJQUN6QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSztJQUM5QixDQUFDO0lBRUQsOEJBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWE7SUFDN0IsQ0FBQztJQUVELHNCQUFJLHFCQUFHO2FBSVA7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJO1FBQ3BCLENBQUM7YUFORCxVQUFRLEtBQWE7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLO1FBQ3JCLENBQUM7OztPQUFBO0lBT0wsV0FBQztBQUFELENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vY2xhc3Nlcy9nZW50aWxcIjtcclxuaW1wb3J0IHsgTWVjaGFudCB9IGZyb20gXCIuL2NsYXNzZXMvbWVjaGFudFwiO1xyXG5pbXBvcnQgeyBBcm1lIH0gZnJvbSBcIi4vY2xhc3Nlcy9hcm1lXCI7XHJcblxyXG5jb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XHJcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG59KTtcclxuXHJcbmxldCBhcm1lID0gbmV3IEFybWUoKTtcclxuXHJcbnJsLnF1ZXN0aW9uKCdxdWVsIGVzdCBsZSBub20gZGUgdm90cmUgaMOpcm8gPyAnLCAobm9tOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBoZXJvID0gbmV3IEdlbnRpbChub20pXHJcbiAgICBjb25zb2xlLmxvZyhoZXJvKTtcclxuXHJcbiAgICBsZXQgbWVjaGFudCA9IG5ldyBNZWNoYW50KClcclxuICAgIGNvbnNvbGUubG9nKG1lY2hhbnQpO1xyXG59KTtcclxuXHJcbiIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9wZXJzb25uYWdlXCJcclxuXHJcbmVudW0gcm9sZSB7XHJcbiAgICBkcHMsXHJcbiAgICB0YW5rLFxyXG4gICAgY2xhc3NpYyxcclxuICAgIGFzc2Fzc2luXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW50aWwgZXh0ZW5kcyBQZXJzb25uYWdlIHtcclxuXHJcbiAgICAvL3ByaXZhdGUgZW51bTogcm9sZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobm9tKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0aW9uKG5vbSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24obm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLk5vbSA9IG5vbVxyXG4gICAgICAgIHRoaXMuUHYgPSAyMDBcclxuICAgICAgICB0aGlzLlB2TWF4ID0gMjAwXHJcbiAgICAgICAgdGhpcy5EZWZlbnNlID0gMTBcclxuICAgIH1cclxuXHJcbiAgICBzb2lnbmVyKCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9hcm1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlIHtcclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nXHJcbiAgICBwcml2YXRlIF9wdjogbnVtYmVyID0gMFxyXG4gICAgcHJpdmF0ZSBfcHZNYXg6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2RlZmVuc2U6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2FybWU6IEFybWVcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxyXG4gICAgICAgIHRoaXMuX3B2O1xyXG4gICAgICAgIHRoaXMuX3B2TWF4O1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2U7XHJcbiAgICAgICAgdGhpcy5fYXJtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTm9tKHBhcmFtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBOb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBQdihwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHYgPSBwYXJhbVxyXG4gICAgfVxyXG4gICAgZ2V0IFB2KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdlxyXG4gICAgfVxyXG5cclxuICAgIHNldCBQdk1heChwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHZNYXggPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQdk1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHZNYXhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGVmZW5zZShwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERlZmVuc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdHRhcXVlcihjaWJsZSkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBjaWJsZXIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4vcGVyc29ubmFnZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihfbm9tOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICAgICAgc3VwZXIoX25vbSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuTm9tID0gdGhpcy5ub21BbGVhKClcclxuICAgICAgICB0aGlzLlB2TWF4ID0gNDAwXHJcbiAgICAgICAgdGhpcy5QdiA9IDQwMFxyXG4gICAgICAgIHRoaXMuRGVmZW5zZSA9IDVcclxuICAgIH1cclxuXHJcbiAgICBub21BbGVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxyXG4gICAgICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiZXhwb3J0IGNsYXNzIEFybWUge1xyXG5cclxuICAgIHByaXZhdGUgX2RlZ2F0TWluaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig0MCkgKyAxKVxyXG4gICAgcHJpdmF0ZSBfZGVnYXRNYXg6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwKSArIDEpXHJcbiAgICBwcml2YXRlIF9jaGFuY2VEZUNyaXQ6IG51bWJlciA9IDAuNVxyXG4gICAgcHJpdmF0ZSBfbm9tOiBzdHJpbmcgPSBcIm1hcnRlYXVcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRpb25cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGlvbigpIHtcclxuICAgICAgICB0aGlzLl9ub21cclxuICAgICAgICB0aGlzLl9kZWdhdE1pbmlcclxuICAgICAgICB0aGlzLl9kZWdhdE1heFxyXG4gICAgfVxyXG5cclxuICAgIHNldERlZ2F0TWluaShwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRNaW5pID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXREZWdhdE1pbmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0TWluaVxyXG4gICAgfVxyXG5cclxuICAgIHNldERlZ2F0TWF4KHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kZWdhdE1heCA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVnYXRNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0TWF4XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2hhbmNlRGVDcml0KHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jaGFuY2VEZUNyaXQgPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldENoYW5jZURlQ3JpdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmNlRGVDcml0XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IE5vbShwYXJhbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbm9tID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgTm9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ub21cclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==