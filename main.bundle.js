webpackJsonp([1,5],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 145;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(158);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'angular v4 demo!';
    }
    AppComponent.prototype.checkCurrentRoute = function (routeStr) {
        return this.router.url.split('/').indexOf(routeStr) !== -1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(224),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_if_ng_if_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_app_routing__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_if_if_simple_if_simple_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_if_if_else_if_else_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_if_if_then_else_if_then_else_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ng_if_if_let_if_let_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_for_ng_for_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ng_for_for_simple_for_simple_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_for_for_of_for_of_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ng_for_for_track_by_for_track_by_component__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__ng_if_ng_if_component__["a" /* NgIfComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ng_if_if_simple_if_simple_component__["a" /* IfSimpleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ng_if_if_else_if_else_component__["a" /* IfElseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ng_if_if_then_else_if_then_else_component__["a" /* IfThenElseComponent */],
            __WEBPACK_IMPORTED_MODULE_12__ng_if_if_let_if_let_component__["a" /* IfLetComponent */],
            __WEBPACK_IMPORTED_MODULE_13__ng_for_ng_for_component__["a" /* NgForComponent */],
            __WEBPACK_IMPORTED_MODULE_14__ng_for_for_simple_for_simple_component__["a" /* ForSimpleComponent */],
            __WEBPACK_IMPORTED_MODULE_15__ng_for_for_of_for_of_component__["a" /* ForOfComponent */],
            __WEBPACK_IMPORTED_MODULE_16__ng_for_for_track_by_for_track_by_component__["a" /* ForTrackByComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8_app_app_routing__["a" /* AppRouting */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_ng_if_ng_if_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_ng_if_if_simple_if_simple_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_ng_if_if_let_if_let_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_ng_if_if_then_else_if_then_else_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_ng_if_if_else_if_else_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_ng_for_for_simple_for_simple_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_ng_for_for_of_for_of_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_ng_for_for_track_by_for_track_by_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_ng_for_ng_for_component__ = __webpack_require__(89);
/* unused harmony export AppRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });










var AppRoutes = [
    { path: '', redirectTo: '/ngIf', pathMatch: 'full' },
    {
        path: 'ngIf',
        component: __WEBPACK_IMPORTED_MODULE_1_app_ng_if_ng_if_component__["a" /* NgIfComponent */],
        children: [
            { path: '', redirectTo: 'if-simple', pathMatch: 'full' },
            { path: 'if-simple', component: __WEBPACK_IMPORTED_MODULE_2_app_ng_if_if_simple_if_simple_component__["a" /* IfSimpleComponent */] },
            { path: 'if-else', component: __WEBPACK_IMPORTED_MODULE_5_app_ng_if_if_else_if_else_component__["a" /* IfElseComponent */] },
            { path: 'if-then-else', component: __WEBPACK_IMPORTED_MODULE_4_app_ng_if_if_then_else_if_then_else_component__["a" /* IfThenElseComponent */] },
            { path: 'if-let', component: __WEBPACK_IMPORTED_MODULE_3_app_ng_if_if_let_if_let_component__["a" /* IfLetComponent */] },
        ]
    },
    {
        path: 'ngFor',
        component: __WEBPACK_IMPORTED_MODULE_9_app_ng_for_ng_for_component__["a" /* NgForComponent */],
        children: [
            { path: '', redirectTo: 'for-simple', pathMatch: 'full' },
            { path: 'for-simple', component: __WEBPACK_IMPORTED_MODULE_6_app_ng_for_for_simple_for_simple_component__["a" /* ForSimpleComponent */] },
            { path: 'for-of', component: __WEBPACK_IMPORTED_MODULE_7_app_ng_for_for_of_for_of_component__["a" /* ForOfComponent */] },
            { path: 'for-trackBy', component: __WEBPACK_IMPORTED_MODULE_8_app_ng_for_for_track_by_for_track_by_component__["a" /* ForTrackByComponent */] }
        ]
    }
];
var AppRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(AppRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.first {\n    color: green;\n}\n\n.last {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\n.red {\n    color: red;\n}\n\n.green {\n    color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>\n        {{title}}\n    </h1>\n\n    <ul class=\"nav nav-pills\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['./ngIf']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [class.active]=\"checkCurrentRoute('ngIf')\">Ng-If</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['./ngFor']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [class.active]=\"checkCurrentRoute('ngFor')\">Ng-For</a>\n        </li>\n    </ul>\n\n    <router-outlet></router-outlet>\n</div>\n<!--\n<div *ngIf=\"userList | async as users; else loading\">\n  <user-profile *ngFor=\"let user of users; count as count\" [user]=\"user\">\n  </user-profile>\n <div>{{count}} total users</div>\n</div>\n<ng-template #loading>Loading...</ng-template>\n-->"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<p>\n  for-of works!\n</p>\n\n<table class=\"table\">\n  <thead>\n    <th>Index</th>\n    <th>Id</th>\n    <th>Name</th>\n  </thead>\n  <tbody>\n    <!--\n    <tr *ngFor=\"let hero of heroes$ | async;\">\n      <td>{{hero.id}}</td>\n      <td>{{hero.name}}</td>\n    </tr>\n    -->\n    <ng-template ngFor let-hero [ngForOf]=\"heroes$ | async\" let-i=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <tr>\n        <td>{{i}}</td>\n        <td>{{hero.id}}</td>\n        <td>{{hero.name}}</td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<p>\n  for-simple works!\n</p>\n\n<table class=\"table\">\n  <thead>\n    <th>Index</th>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Even / Odd</th>\n    <th>Count</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let hero of heroes$ | async; let i = index; let c = count; let first = first; let last = last; let even = even; let odd = odd\"\n      [ngClass]=\"{ odd: odd, even: even, first: first, last: last }\">\n      <td>{{i}}</td>\n      <td>{{hero.id}}</td>\n      <td>{{hero.name}}</td>\n      <td>{{even ? 'even' : odd ? 'odd' : ''}}\n      <td>{{c}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<p>\n  for-track-by works!\n</p>\n\n<table class=\"table\">\n  <thead>\n    <th>Id</th>\n    <th>Name</th>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let hero of heroes$ | async; trackBy: trackByFn\">\n      <td>{{hero.id}}</td>\n      <td>{{hero.name}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<p>\n  ng-for works!\n</p>\n\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" [routerLink]=\"['./for-simple']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">for-simple</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['./for-of']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">for-of</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['./for-trackBy']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">for-trackBy</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<p>\n  if-else works!\n</p>\n\n<button class=\"btn primary\" (click)=\"show = !show\">\n  {{show ? 'hide' : 'show'}}\n</button> show = {{show}}\n<br>\n<div *ngIf=\"show; else elseBlock\">Text to show</div>\n<ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>\n\n\n<br><br><br>\n\n<ng-template #fetching>\n  <p>Fetching...</p>\n</ng-template>\n<p *ngIf=\"auth$ | async; else fetching; let user\">\n  {{user.username }}\n</p>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<p>\n  if-let works!\n</p>\n\n<button (click)=\"nextUser()\">Next User</button>\n<br>\n<div *ngIf=\"user$ | async as user; else loading\">\n  Hello {{user.last}}, {{user.first}}!\n</div>\n<ng-template #loading let-user>Waiting... (user is {{user|json}})</ng-template>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<p>\n  if-simple works!\n</p>\n\n<button class=\"btn primary\" (click)=\"show = !show\">{{show ? 'hide' : 'show'}}</button> show = {{show}}\n<br>\n<div *ngIf=\"show\">Text to show</div>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<p>\n  if-then works!\n</p>\n\n<button (click)=\"show = !show\">{{show ? 'hide' : 'show'}}</button>\n<button (click)=\"switchPrimary()\">Switch Primary</button> show = {{show}}\n<br>\n<div *ngIf=\"show; then thenBlock; else elseBlock\">this is ignored</div>\n<ng-template #primaryBlock>Primary text to show</ng-template>\n<ng-template #secondaryBlock>Secondary text to show</ng-template>\n<ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>\n\n\n<br><br><br>\n\n<!-- another more simple example -->\n\n<button (click)=\"isRedColor = !isRedColor\">Switch color to {{ !isRedColor ? 'red' : 'green'}}</button>\n<br>\n<div *ngIf=\"isRedColor; then colorThenBlock; else colorElseBlock\">this is ignored</div>\n<ng-template #colorThenBlock>\n  <p [class.red]=\"isRedColor\">Red color text to show</p>\n</ng-template>\n<ng-template #colorElseBlock>\n  <p [class.green]=\"!isRedColor\">Green color text to show</p>\n</ng-template>\n\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<p>\n  ng-if works!\n</p>\n\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link active\" [routerLink]=\"['./if-simple']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">if-simple</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['./if-else']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">if-else</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['./if-then-else']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">if-then-else</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [routerLink]=\"['./if-let']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">if-let</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(146);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForOfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForOfComponent = (function () {
    function ForOfComponent() {
        this.heroes$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of([
            { id: 1, name: 'Superman' },
            { id: 2, name: 'Batman' },
            { id: 5, name: 'BatGirl' },
            { id: 3, name: 'Robin' },
            { id: 4, name: 'Flash' }
        ]);
    }
    ForOfComponent.prototype.ngOnInit = function () {
    };
    ForOfComponent.prototype.trackByFn = function (index, hero) {
        return hero ? hero.id : undefined;
    };
    return ForOfComponent;
}());
ForOfComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-for-of',
        template: __webpack_require__(225),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], ForOfComponent);

//# sourceMappingURL=for-of.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForSimpleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForSimpleComponent = (function () {
    function ForSimpleComponent() {
        this.heroes$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of([
            { id: 1, name: 'Superman' },
            { id: 2, name: 'Batman' },
            { id: 5, name: 'BatGirl' },
            { id: 3, name: 'Robin' },
            { id: 4, name: 'Flash' }
        ]);
    }
    ForSimpleComponent.prototype.ngOnInit = function () {
    };
    return ForSimpleComponent;
}());
ForSimpleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-for-simple',
        template: __webpack_require__(226),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], ForSimpleComponent);

//# sourceMappingURL=for-simple.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForTrackByComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForTrackByComponent = (function () {
    function ForTrackByComponent() {
        this.heroes = [
            { id: 1, name: 'Superman' },
            { id: 2, name: 'Batman' },
            { id: 5, name: 'BatGirl' },
            { id: 3, name: 'Robin' },
            { id: 4, name: 'Flash' }
        ];
        this.heroes$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(this.heroes);
    }
    ForTrackByComponent.prototype.ngOnInit = function () {
        /*this.intervalSub = setInterval(() => {
          const randomIndex1 = Math.floor(Math.random() * this.heroes.length);
          const randomIndex2 = Math.floor(Math.random() * this.heroes.length);
          console.log('random1', randomIndex1);
          console.log('random2', randomIndex2);
          if (randomIndex1 < this.heroes.length && randomIndex2 < this.heroes.length && randomIndex1 !== randomIndex2) {
            const temp = this.heroes[randomIndex1]['name'];
            this.heroes[randomIndex1]['name'] = this.heroes[randomIndex2]['name'];
            this.heroes[randomIndex2]['name'] = temp;
          }
        }, 5000);*/
    };
    ForTrackByComponent.prototype.trackByFn = function (index, hero) {
        console.log(hero);
        return hero ? hero.id : undefined;
    };
    ForTrackByComponent.prototype.ngOnDestroy = function () {
        if (this.intervalSub) {
            clearInterval(this.intervalSub);
        }
    };
    return ForTrackByComponent;
}());
ForTrackByComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-for-track-by',
        template: __webpack_require__(227),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [])
], ForTrackByComponent);

//# sourceMappingURL=for-track-by.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgForComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgForComponent = (function () {
    function NgForComponent() {
    }
    NgForComponent.prototype.ngOnInit = function () {
    };
    return NgForComponent;
}());
NgForComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ng-for',
        template: __webpack_require__(228),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], NgForComponent);

//# sourceMappingURL=ng-for.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfElseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfElseComponent = (function () {
    function IfElseComponent() {
        this.show = true;
        this.auth$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"]
            .of({ username: 'chris', password: 'me@chris.me' })
            .delay(new Date(Date.now() + 4000));
    }
    IfElseComponent.prototype.ngOnInit = function () {
    };
    return IfElseComponent;
}());
IfElseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-if-else',
        template: __webpack_require__(229),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [])
], IfElseComponent);

//# sourceMappingURL=if-else.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfLetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IfLetComponent = (function () {
    function IfLetComponent() {
        this.user$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.first = ['John', 'Mike', 'Mary', 'Bob'];
        this.firstIndex = 0;
        this.last = ['Smith', 'Novotny', 'Angular'];
        this.lastIndex = 0;
    }
    IfLetComponent.prototype.ngOnInit = function () {
    };
    IfLetComponent.prototype.nextUser = function () {
        var first = this.first[this.firstIndex++];
        if (this.firstIndex >= this.first.length) {
            this.firstIndex = 0;
        }
        var last = this.last[this.lastIndex++];
        if (this.lastIndex >= this.last.length) {
            this.lastIndex = 0;
        }
        this.user$.next({ first: first, last: last });
    };
    return IfLetComponent;
}());
IfLetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-if-let',
        template: __webpack_require__(230),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [])
], IfLetComponent);

//# sourceMappingURL=if-let.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfSimpleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IfSimpleComponent = (function () {
    function IfSimpleComponent() {
        this.show = true;
    }
    IfSimpleComponent.prototype.ngOnInit = function () {
    };
    return IfSimpleComponent;
}());
IfSimpleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-if-simple',
        template: __webpack_require__(231),
        styles: [__webpack_require__(219)]
    }),
    __metadata("design:paramtypes", [])
], IfSimpleComponent);

//# sourceMappingURL=if-simple.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfThenElseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IfThenElseComponent = (function () {
    function IfThenElseComponent() {
        this.show = true;
        this.thenBlock = null;
        this.primaryBlock = null;
        this.secondaryBlock = null;
        this.isRedColor = true;
    }
    IfThenElseComponent.prototype.ngOnInit = function () {
        this.thenBlock = this.primaryBlock;
    };
    IfThenElseComponent.prototype.switchPrimary = function () {
        this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
    };
    return IfThenElseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('primaryBlock'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */]) === "function" && _a || Object)
], IfThenElseComponent.prototype, "primaryBlock", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('secondaryBlock'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* TemplateRef */]) === "function" && _b || Object)
], IfThenElseComponent.prototype, "secondaryBlock", void 0);
IfThenElseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-if-then-else',
        template: __webpack_require__(232),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [])
], IfThenElseComponent);

var _a, _b;
//# sourceMappingURL=if-then-else.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgIfComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgIfComponent = (function () {
    function NgIfComponent() {
    }
    NgIfComponent.prototype.ngOnInit = function () {
    };
    return NgIfComponent;
}());
NgIfComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-ng-if',
        template: __webpack_require__(233),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], NgIfComponent);

//# sourceMappingURL=ng-if.component.js.map

/***/ })

},[501]);
//# sourceMappingURL=main.bundle.js.map