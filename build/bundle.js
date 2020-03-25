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
/* harmony import */ var _classes_mechant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _classes_combat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



var readline = __webpack_require__(7);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// const r2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
rl.question('quel est le nom de votre héro ? ', function (nom) {
    rl.question('choisissez votre arme entre 1 et 2', function (arme) {
        var hero = new _classes_gentil__WEBPACK_IMPORTED_MODULE_0__["Gentil"](nom, arme);
        console.log(hero);
        var mechant = new _classes_mechant__WEBPACK_IMPORTED_MODULE_1__["Mechant"]();
        console.log(mechant);
        var combat = new _classes_combat__WEBPACK_IMPORTED_MODULE_2__["Combat"](hero, mechant);
        while (hero.Pv != 0 && mechant.Pv != 0) {
            combat.Engagement();
            combat.Frapper();
        }
        rl.close();
    });
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
    function Gentil(nom, arme) {
        var _this = _super.call(this, nom, arme) || this;
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
/* harmony import */ var _calcArme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var Personnage = /** @class */ (function () {
    function Personnage(nom, arme) {
        this._pv = 0;
        this._pvMax = 0;
        this._defense = 0;
        this._nom = nom;
        this._arme = new _calcArme__WEBPACK_IMPORTED_MODULE_0__["CalcArme"](arme);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcArme", function() { return CalcArme; });
/* harmony import */ var _arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
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

var CalcArme = /** @class */ (function (_super) {
    __extends(CalcArme, _super);
    function CalcArme(numero) {
        var _this = _super.call(this) || this;
        _this.choixArme(numero);
        _this.creation;
        return _this;
    }
    CalcArme.prototype.Arme1 = function () {
        this.ChanceDeCrit += 0.2;
    };
    CalcArme.prototype.Arme2 = function () {
        this.DegatMax += 50;
    };
    CalcArme.prototype.Arme3 = function () {
        this.ChanceDeCrit -= 0.2;
    };
    CalcArme.prototype.choixArme = function (numero) {
        console.log("valeur de numero : " + numero);
        if (numero == 1) {
            this.Arme1();
        }
        else if (numero == 2) {
            this.Arme2();
        }
        else {
            this.Arme3();
        }
    };
    return CalcArme;
}(_arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]));



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
    function Mechant(_nom, arme) {
        if (_nom === void 0) { _nom = ""; }
        if (arme === void 0) { arme = 3; }
        var _this = _super.call(this, _nom, arme) || this;
        _this.creation();
        return _this;
    }
    Mechant.prototype.creation = function () {
        this.Nom = this.nomAlea();
        this.PvMax = 500;
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
        var crit = Math.random();
        if (crit < this._gentil.Arme.ChanceDeCrit) {
            randFrappe *= 2;
            console.log("le gentil à crit");
        }
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
        var crit = Math.random();
        if (crit < this._mechant.Arme.ChanceDeCrit) {
            randFrappe *= 2;
            console.log("le mechant a crit");
        }
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



/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dlbnRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9wZXJzb25uYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2NhbGNBcm1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2FybWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvbWVjaGFudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9jb21iYXQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNFO0FBQ0Y7QUFFMUMsSUFB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QUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBRXRELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsVUFBVSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLHNCQUFzQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0lBRTNGLENBQUM7SUFJTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNuR0QscUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vY2xhc3Nlcy9nZW50aWxcIjtcclxuaW1wb3J0IHsgTWVjaGFudCB9IGZyb20gXCIuL2NsYXNzZXMvbWVjaGFudFwiO1xyXG5pbXBvcnQgeyBDb21iYXQgfSBmcm9tIFwiLi9jbGFzc2VzL2NvbWJhdFwiO1xyXG5cclxuY29uc3QgcmVhZGxpbmUgPSByZXF1aXJlKCdyZWFkbGluZScpO1xyXG5jb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxufSk7XHJcblxyXG4vLyBjb25zdCByMiA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbi8vICAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuLy8gICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxuLy8gfSk7XHJcblxyXG5ybC5xdWVzdGlvbigncXVlbCBlc3QgbGUgbm9tIGRlIHZvdHJlIGjDqXJvID8gJywgKG5vbTogc3RyaW5nKSA9PiB7XHJcbiAgICBybC5xdWVzdGlvbignY2hvaXNpc3NleiB2b3RyZSBhcm1lIGVudHJlIDEgZXQgMicsIChhcm1lOiBudW1iZXIpID0+IHtcclxuXHJcbiAgICAgICAgbGV0IGhlcm8gPSBuZXcgR2VudGlsKG5vbSwgYXJtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhoZXJvKTtcclxuXHJcbiAgICAgICAgbGV0IG1lY2hhbnQgPSBuZXcgTWVjaGFudCgpXHJcbiAgICAgICAgY29uc29sZS5sb2cobWVjaGFudCk7XHJcblxyXG4gICAgICAgIGxldCBjb21iYXQgPSBuZXcgQ29tYmF0KGhlcm8sIG1lY2hhbnQpXHJcblxyXG4gICAgICAgIHdoaWxlIChoZXJvLlB2ICE9IDAgJiYgbWVjaGFudC5QdiAhPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbWJhdC5FbmdhZ2VtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbWJhdC5GcmFwcGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJsLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4vcGVyc29ubmFnZVwiXHJcblxyXG5lbnVtIHJvbGUge1xyXG4gICAgZHBzLFxyXG4gICAgdGFuayxcclxuICAgIGNsYXNzaWMsXHJcbiAgICBhc3Nhc3NpblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcblxyXG4gICAgLy9wcml2YXRlIGVudW06IHJvbGVcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgYXJtZTogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobm9tLCBhcm1lKVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5Qdk1heCA9IDIwMFxyXG4gICAgICAgIHRoaXMuUHYgPSB0aGlzLlB2TWF4XHJcbiAgICAgICAgdGhpcy5EZWZlbnNlID0gMTBcclxuICAgIH1cclxuXHJcbiAgICBzb2lnbmVyKCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IENhbGNBcm1lIH0gZnJvbSBcIi4vY2FsY0FybWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcnNvbm5hZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgX25vbTogc3RyaW5nXHJcbiAgICBwcml2YXRlIF9wdjogbnVtYmVyID0gMFxyXG4gICAgcHJpdmF0ZSBfcHZNYXg6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2RlZmVuc2U6IG51bWJlciA9IDBcclxuICAgIHByaXZhdGUgX2FybWU6IENhbGNBcm1lXHJcblxyXG4gICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsIGFybWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX25vbSA9IG5vbVxyXG4gICAgICAgIHRoaXMuX2FybWUgPSBuZXcgQ2FsY0FybWUoYXJtZSlcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTm9tKHBhcmFtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBOb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbVxyXG4gICAgfVxyXG5cclxuICAgIHNldCBQdihwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHYgPSBwYXJhbVxyXG4gICAgfVxyXG4gICAgZ2V0IFB2KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wdlxyXG4gICAgfVxyXG5cclxuICAgIHNldCBQdk1heChwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHZNYXggPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBQdk1heCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHZNYXhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGVmZW5zZShwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IHBhcmFtXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IERlZmVuc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQXJtZShwYXJhbTogQ2FsY0FybWUpIHtcclxuICAgICAgICB0aGlzLl9hcm1lID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgQXJtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJtZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGF0dGFxdWVyKGNpYmxlKSB7XHJcblxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNpYmxlcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQXJtZSB9IGZyb20gXCIuL2FybWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxjQXJtZSBleHRlbmRzIEFybWUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG51bWVybzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuY2hvaXhBcm1lKG51bWVybylcclxuICAgICAgICB0aGlzLmNyZWF0aW9uXHJcblxyXG4gICAgfVxyXG5cclxuICAgIEFybWUxKCkge1xyXG4gICAgICAgIHRoaXMuQ2hhbmNlRGVDcml0ICs9IDAuMjtcclxuICAgIH1cclxuXHJcbiAgICBBcm1lMigpIHtcclxuICAgICAgICB0aGlzLkRlZ2F0TWF4ICs9IDUwO1xyXG4gICAgfVxyXG5cclxuICAgIEFybWUzKCkge1xyXG4gICAgICAgIHRoaXMuQ2hhbmNlRGVDcml0IC09IDAuMjtcclxuICAgIH1cclxuXHJcbiAgICBjaG9peEFybWUobnVtZXJvOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWxldXIgZGUgbnVtZXJvIDogXCIgKyBudW1lcm8pXHJcbiAgICAgICAgaWYgKG51bWVybyA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQXJtZTEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtZXJvID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5Bcm1lMigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkFybWUzKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXJtZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVnYXRNaW5pOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDQwIC0gMSkgKyAxKVxyXG4gICAgcHJpdmF0ZSBfZGVnYXRNYXg6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoMTAwIC0gNDApICsgNDApXHJcbiAgICBwcml2YXRlIF9jaGFuY2VEZUNyaXQ6IG51bWJlciA9IDAuNVxyXG4gICAgcHJpdmF0ZSBfbm9tOiBzdHJpbmcgPSBcIm1hcnRlYXVcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuX25vbVxyXG4gICAgICAgIHRoaXMuX2RlZ2F0TWluaVxyXG4gICAgICAgIHRoaXMuX2RlZ2F0TWF4XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IERlZ2F0TWluaShwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVnYXRNaW5pID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGVnYXRNaW5pKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWdhdE1pbmlcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRGVnYXRNYXgocGFyYW06IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RlZ2F0TWF4ID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgRGVnYXRNYXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZ2F0TWF4XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENoYW5jZURlQ3JpdChwYXJhbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fY2hhbmNlRGVDcml0ID0gcGFyYW1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ2hhbmNlRGVDcml0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFuY2VEZUNyaXRcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTm9tKHBhcmFtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ub20gPSBwYXJhbVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBOb20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vbVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFBlcnNvbm5hZ2UgfSBmcm9tIFwiLi9wZXJzb25uYWdlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWNoYW50IGV4dGVuZHMgUGVyc29ubmFnZSB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKF9ub206IHN0cmluZyA9IFwiXCIsIGFybWU6IG51bWJlciA9IDMpIHtcclxuICAgICAgICBzdXBlcihfbm9tLCBhcm1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5Ob20gPSB0aGlzLm5vbUFsZWEoKVxyXG4gICAgICAgIHRoaXMuUHZNYXggPSA1MDBcclxuICAgICAgICB0aGlzLlB2ID0gdGhpcy5Qdk1heFxyXG4gICAgICAgIHRoaXMuRGVmZW5zZSA9IDVcclxuICAgIH1cclxuXHJcbiAgICBub21BbGVhKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKVxyXG4gICAgICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgR2VudGlsIH0gZnJvbSBcIi4vZ2VudGlsXCI7XHJcbmltcG9ydCB7IE1lY2hhbnQgfSBmcm9tIFwiLi9tZWNoYW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbWJhdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2VudGlsOiBHZW50aWxcclxuICAgIHByaXZhdGUgX21lY2hhbnQ6IE1lY2hhbnRcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnZW50aWw6IEdlbnRpbCwgbWVjaGFudDogTWVjaGFudCkge1xyXG4gICAgICAgIHRoaXMuX2dlbnRpbCA9IGdlbnRpbFxyXG4gICAgICAgIHRoaXMuX21lY2hhbnQgPSBtZWNoYW50XHJcbiAgICB9XHJcblxyXG4gICAgRW5nYWdlbWVudCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgICAgICBpZiAocmFuZCA+PSAwLjUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEZyYXBwZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkVuZ2FnZW1lbnQoKSA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2VudGlsLlB2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5HZW50aWxBdHRhcXVlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tZWNoYW50LlB2ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5NZWNoYW50QXR0YXF1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fbWVjaGFudC5QdiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuTWVjaGFudEF0dGFxdWUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dlbnRpbC5QdiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuR2VudGlsQXR0YXF1ZSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBHZW50aWxBdHRhcXVlKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9nZW50aWwuTm9tICsgXCIgYXR0YXF1ZVwiKTtcclxuICAgICAgICBsZXQgcmFuZEZyYXBwZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IodGhpcy5fZ2VudGlsLkFybWUuRGVnYXRNYXggLSB0aGlzLl9nZW50aWwuQXJtZS5EZWdhdE1pbmkpICsgdGhpcy5fZ2VudGlsLkFybWUuRGVnYXRNaW5pKVxyXG5cclxuICAgICAgICBsZXQgY3JpdCA9IE1hdGgucmFuZG9tKClcclxuICAgICAgICBpZiAoY3JpdCA8IHRoaXMuX2dlbnRpbC5Bcm1lLkNoYW5jZURlQ3JpdCkge1xyXG4gICAgICAgICAgICByYW5kRnJhcHBlICo9IDJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZSBnZW50aWwgw6AgY3JpdFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fbWVjaGFudC5QdiAtPSAocmFuZEZyYXBwZSAtIHRoaXMuX21lY2hhbnQuRGVmZW5zZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX21lY2hhbnQuUHYgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tZWNoYW50LlB2ID0gMFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9nZW50aWwuTm9tICsgJyBhIGdhZ27DqScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9nZW50aWwuTm9tICsgXCIgYXR0YXF1ZSBkZSBcIiArIHJhbmRGcmFwcGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXMgcHYgZHUgbWVjaGFudCBzb250IG1haW50ZW5hbnQgZGUgXCIgKyB0aGlzLl9tZWNoYW50LlB2KVxyXG4gICAgfVxyXG5cclxuICAgIE1lY2hhbnRBdHRhcXVlKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlIG3DqWNoYW50IGF0dGFxdWVcIik7XHJcbiAgICAgICAgbGV0IHJhbmRGcmFwcGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKHRoaXMuX21lY2hhbnQuQXJtZS5EZWdhdE1heCAtIHRoaXMuX21lY2hhbnQuQXJtZS5EZWdhdE1pbmkpICsgdGhpcy5fbWVjaGFudC5Bcm1lLkRlZ2F0TWluaSlcclxuXHJcbiAgICAgICAgbGV0IGNyaXQgPSBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgaWYgKGNyaXQgPCB0aGlzLl9tZWNoYW50LkFybWUuQ2hhbmNlRGVDcml0KSB7XHJcbiAgICAgICAgICAgIHJhbmRGcmFwcGUgKj0gMlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlIG1lY2hhbnQgYSBjcml0XCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9nZW50aWwuUHYgLT0gKHJhbmRGcmFwcGUgLSB0aGlzLl9nZW50aWwuRGVmZW5zZSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2dlbnRpbC5QdiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dlbnRpbC5QdiA9IDBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZSBtZWNoYW50IGEgZ2FnbsOpXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlIG1lY2hhbnQgYXR0YXF1ZSBkZSBcIiArIHJhbmRGcmFwcGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXMgcHYgZGUgXCIgKyB0aGlzLl9nZW50aWwuTm9tICsgXCIgc29udCBtYWludGVuYW50IGRlIFwiICsgdGhpcy5fZ2VudGlsLlB2KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=