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
/* harmony import */ var _classes_combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var readline = __webpack_require__(5);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('quel est le nom de votre héro ? ', function (nom) {
    var hero = new _classes_gentil__WEBPACK_IMPORTED_MODULE_0__["Gentil"](nom);
    console.log(hero);
    var mechant = new _classes_mechant__WEBPACK_IMPORTED_MODULE_1__["Mechant"]();
    console.log(mechant);
    var combat = new _classes_combat__WEBPACK_IMPORTED_MODULE_2__["Combat"](hero, mechant);
    while (hero.Pv != 0 && mechant.Pv != 0) {
        combat.Engagement();
        combat.Frapper();
    }
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
        _this.creation();
        return _this;
    }
    Gentil.prototype.creation = function () {
        this.PvMax = 200;
        this.Pv = this.PvMax;
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
/* harmony import */ var _arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var Personnage = /** @class */ (function () {
    function Personnage(nom) {
        this._pv = 0;
        this._pvMax = 0;
        this._defense = 0;
        this._nom = nom;
        this._arme = new _arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]();
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
    Object.defineProperty(Personnage.prototype, "Arme", {
        get: function () {
            return this._arme;
        },
        set: function (param) {
            this._arme = param;
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
        this.PvMax = 300;
        this.Pv = this.PvMax;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
var Arme = /** @class */ (function () {
    function Arme() {
        this._degatMini = Math.floor(Math.random() * Math.floor(40 - 1) + 1);
        this._degatMax = Math.floor(Math.random() * Math.floor(100 - 40) + 40);
        this._chanceDeCrit = 0.5;
        this._nom = "marteau";
        this.creation;
    }
    Arme.prototype.creation = function () {
        this._nom;
        this._degatMini;
        this._degatMax;
    };
    Object.defineProperty(Arme.prototype, "DegatMini", {
        get: function () {
            return this._degatMini;
        },
        set: function (param) {
            this._degatMini = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arme.prototype, "DegatMax", {
        get: function () {
            return this._degatMax;
        },
        set: function (param) {
            this._degatMax = param;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Arme.prototype, "ChanceDeCrit", {
        get: function () {
            return this._chanceDeCrit;
        },
        set: function (param) {
            this._chanceDeCrit = param;
        },
        enumerable: true,
        configurable: true
    });
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



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Combat", function() { return Combat; });
var Combat = /** @class */ (function () {
    function Combat(gentil, mechant) {
        this._gentil = gentil;
        this._mechant = mechant;
    }
    Combat.prototype.Engagement = function () {
        var rand = Math.random();
        if (rand >= 0.5) {
            return 0;
        }
        else {
            return 1;
        }
    };
    Combat.prototype.Frapper = function () {
        if (this.Engagement() == 0) {
            if (this._gentil.Pv > 0) {
                this.GentilAttaque();
            }
            if (this._mechant.Pv > 0) {
                this.MechantAttaque();
            }
        }
        else {
            if (this._mechant.Pv > 0) {
                this.MechantAttaque();
            }
            if (this._gentil.Pv > 0) {
                this.GentilAttaque();
            }
        }
    };
    Combat.prototype.GentilAttaque = function () {
        console.log(this._gentil.Nom + " attaque");
        var randFrappe = Math.floor(Math.random() * Math.floor(this._gentil.Arme.DegatMax - this._gentil.Arme.DegatMini) + this._gentil.Arme.DegatMini);
        this._mechant.Pv -= (randFrappe - this._mechant.Defense);
        if (this._mechant.Pv <= 0) {
            this._mechant.Pv = 0;
            console.log(this._gentil.Nom + ' a gagné');
        }
        console.log(this._gentil.Nom + " attaque de " + randFrappe);
        console.log("les pv du mechant sont maintenant de " + this._mechant.Pv);
    };
    Combat.prototype.MechantAttaque = function () {
        console.log("le méchant attaque");
        var randFrappe = Math.floor(Math.random() * Math.floor(this._mechant.Arme.DegatMax - this._mechant.Arme.DegatMini) + this._mechant.Arme.DegatMini);
        this._gentil.Pv -= (randFrappe - this._gentil.Defense);
        if (this._gentil.Pv <= 0) {
            this._gentil.Pv = 0;
            console.log("le mechant a gagné");
        }
        console.log("le mechant attaque de " + randFrappe);
        console.log("les pv de " + this._gentil.Nom + " sont maintenant de " + this._gentil.Pv);
    };
    return Combat;
}());



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dlbnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9wZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL21lY2hhbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXJtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NvbWJhdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNFO0FBQ0Y7QUFFMUMsSUFBTSxRQUFRLEdBQUcsbUJBQU8sQ0FBQyxDQUFVLENBQUMsQ0FBQztB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LHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBRTNGLENBQUM7SUFJTCxhQUFDO0FBQUQsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBHZW50aWwgfSBmcm9tIFwiLi9jbGFzc2VzL2dlbnRpbFwiO1xyXG5pbXBvcnQgeyBNZWNoYW50IH0gZnJvbSBcIi4vY2xhc3Nlcy9tZWNoYW50XCI7XHJcbmltcG9ydCB7IENvbWJhdCB9IGZyb20gXCIuL2NsYXNzZXMvY29tYmF0XCI7XHJcblxyXG5jb25zdCByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XHJcbmNvbnN0IHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG59KTtcclxuXHJcbnJsLnF1ZXN0aW9uKCdxdWVsIGVzdCBsZSBub20gZGUgdm90cmUgaMOpcm8gPyAnLCAobm9tOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBoZXJvID0gbmV3IEdlbnRpbChub20pXHJcbiAgICBjb25zb2xlLmxvZyhoZXJvKTtcclxuXHJcbiAgICBsZXQgbWVjaGFudCA9IG5ldyBNZWNoYW50KClcclxuICAgIGNvbnNvbGUubG9nKG1lY2hhbnQpO1xyXG5cclxuICAgIGxldCBjb21iYXQgPSBuZXcgQ29tYmF0KGhlcm8sIG1lY2hhbnQpXHJcblxyXG4gICAgd2hpbGUgKGhlcm8uUHYgIT0gMCAmJiBtZWNoYW50LlB2ICE9IDApIHtcclxuICAgICAgICBjb21iYXQuRW5nYWdlbWVudCgpO1xyXG4gICAgICAgIGNvbWJhdC5GcmFwcGVyKCk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9wZXJzb25uYWdlXCJcclxuXHJcbmVudW0gcm9sZSB7XHJcbiAgICBkcHMsXHJcbiAgICB0YW5rLFxyXG4gICAgY2xhc3NpYyxcclxuICAgIGFzc2Fzc2luXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZW50aWwgZXh0ZW5kcyBQZXJzb25uYWdlIHtcclxuXHJcbiAgICAvL3ByaXZhdGUgZW51bTogcm9sZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5vbTogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobm9tKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5Qdk1heCA9IDIwMFxyXG4gICAgICAgIHRoaXMuUHYgPSB0aGlzLlB2TWF4XHJcbiAgICAgICAgdGhpcy5EZWZlbnNlID0gMTBcclxuICAgIH1cclxuXHJcbiAgICBzb2lnbmVyKCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEFybWUgfSBmcm9tIFwiLi9hcm1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25uYWdlIHtcclxuXHJcbiAgICBwcml2YXRlIF9ub206IHN0cmluZ1xyXG4gICAgcHJpdmF0ZSBfcHY6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX3B2TWF4OiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXIgPSAwXHJcbiAgICBwcml2YXRlIF9hcm1lOiBBcm1lXHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBub21cclxuICAgICAgICB0aGlzLl9hcm1lID0gbmV3IEFybWUoKVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBOb20ocGFyYW06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25vbSA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE5vbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9tXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFB2KHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wdiA9IHBhcmFtXHJcbiAgICB9XHJcbiAgICBnZXQgUHYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B2XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFB2TWF4KHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wdk1heCA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFB2TWF4KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdk1heFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBEZWZlbnNlKHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGVmZW5zZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBBcm1lKHBhcmFtOiBBcm1lKSB7XHJcbiAgICAgICAgdGhpcy5fYXJtZSA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEFybWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FybWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBhdHRhcXVlcihjaWJsZSkge1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBjaWJsZXIoKSB7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9wZXJzb25uYWdlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWNoYW50IGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9ub206IHN0cmluZyA9IFwiXCIpIHtcclxuICAgICAgICBzdXBlcihfbm9tKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5Ob20gPSB0aGlzLm5vbUFsZWEoKVxyXG4gICAgICAgIHRoaXMuUHZNYXggPSAzMDBcclxuICAgICAgICB0aGlzLlB2ID0gdGhpcy5Qdk1heFxyXG4gICAgICAgIHRoaXMuRGVmZW5zZSA9IDVcclxuICAgIH1cclxuXHJcbiAgICBub21BbGVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxyXG4gICAgICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFybWUge1xyXG5cclxuICAgIHByaXZhdGUgX2RlZ2F0TWluaTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig0MCAtIDEpICsgMSlcclxuICAgIHByaXZhdGUgX2RlZ2F0TWF4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDEwMCAtIDQwKSArIDQwKVxyXG4gICAgcHJpdmF0ZSBfY2hhbmNlRGVDcml0OiBudW1iZXIgPSAwLjVcclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nID0gXCJtYXJ0ZWF1XCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5fbm9tXHJcbiAgICAgICAgdGhpcy5fZGVnYXRNaW5pXHJcbiAgICAgICAgdGhpcy5fZGVnYXRNYXhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGVnYXRNaW5pKHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9kZWdhdE1pbmkgPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBEZWdhdE1pbmkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0TWluaVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBEZWdhdE1heChwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRNYXggPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBEZWdhdE1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVnYXRNYXhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ2hhbmNlRGVDcml0KHBhcmFtOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9jaGFuY2VEZUNyaXQgPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBDaGFuY2VEZUNyaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYW5jZURlQ3JpdFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBOb20ocGFyYW06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25vbSA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IE5vbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbm9tXHJcbiAgICB9XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vZ2VudGlsXCI7XHJcbmltcG9ydCB7IE1lY2hhbnQgfSBmcm9tIFwiLi9tZWNoYW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJhdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VudGlsOiBHZW50aWxcclxuICAgIHByaXZhdGUgX21lY2hhbnQ6IE1lY2hhbnRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnZW50aWw6IEdlbnRpbCwgbWVjaGFudDogTWVjaGFudCkge1xyXG4gICAgICAgIHRoaXMuX2dlbnRpbCA9IGdlbnRpbFxyXG4gICAgICAgIHRoaXMuX21lY2hhbnQgPSBtZWNoYW50XHJcbiAgICB9XHJcblxyXG4gICAgRW5nYWdlbWVudCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICBpZiAocmFuZCA+PSAwLjUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEZyYXBwZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVuZ2FnZW1lbnQoKSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2VudGlsLlB2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZW50aWxBdHRhcXVlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZWNoYW50LlB2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5NZWNoYW50QXR0YXF1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWVjaGFudC5QdiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFudEF0dGFxdWUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dlbnRpbC5QdiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2VudGlsQXR0YXF1ZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW50aWxBdHRhcXVlKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9nZW50aWwuTm9tICsgXCIgYXR0YXF1ZVwiKTtcclxuICAgICAgICBsZXQgcmFuZEZyYXBwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5fZ2VudGlsLkFybWUuRGVnYXRNYXggLSB0aGlzLl9nZW50aWwuQXJtZS5EZWdhdE1pbmkpICsgdGhpcy5fZ2VudGlsLkFybWUuRGVnYXRNaW5pKVxyXG5cclxuICAgICAgICB0aGlzLl9tZWNoYW50LlB2IC09IChyYW5kRnJhcHBlIC0gdGhpcy5fbWVjaGFudC5EZWZlbnNlKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWVjaGFudC5QdiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21lY2hhbnQuUHYgPSAwXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dlbnRpbC5Ob20gKyAnIGEgZ2FnbsOpJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dlbnRpbC5Ob20gKyBcIiBhdHRhcXVlIGRlIFwiICsgcmFuZEZyYXBwZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlcyBwdiBkdSBtZWNoYW50IHNvbnQgbWFpbnRlbmFudCBkZSBcIiArIHRoaXMuX21lY2hhbnQuUHYpXHJcbiAgICB9XHJcblxyXG4gICAgTWVjaGFudEF0dGFxdWUoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGUgbcOpY2hhbnQgYXR0YXF1ZVwiKTtcclxuICAgICAgICBsZXQgcmFuZEZyYXBwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5fbWVjaGFudC5Bcm1lLkRlZ2F0TWF4IC0gdGhpcy5fbWVjaGFudC5Bcm1lLkRlZ2F0TWluaSkgKyB0aGlzLl9tZWNoYW50LkFybWUuRGVnYXRNaW5pKVxyXG5cclxuICAgICAgICB0aGlzLl9nZW50aWwuUHYgLT0gKHJhbmRGcmFwcGUgLSB0aGlzLl9nZW50aWwuRGVmZW5zZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2dlbnRpbC5QdiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dlbnRpbC5QdiA9IDBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZSBtZWNoYW50IGEgZ2FnbsOpXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlIG1lY2hhbnQgYXR0YXF1ZSBkZSBcIiArIHJhbmRGcmFwcGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXMgcHYgZGUgXCIgKyB0aGlzLl9nZW50aWwuTm9tICsgXCIgc29udCBtYWludGVuYW50IGRlIFwiICsgdGhpcy5fZ2VudGlsLlB2KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=