(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http-util-service */ "./src/app/services/http-util-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_em_construcao_em_construcao_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/em-construcao/em-construcao.component */ "./src/app/pages/em-construcao/em-construcao.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth-service */ "./src/app/services/auth-service.ts");
/* harmony import */ var _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/perfil/perfil.component */ "./src/app/pages/perfil/perfil.component.ts");
/* harmony import */ var _barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./barra-superior/barra-superior.component */ "./src/app/barra-superior/barra-superior.component.ts");
/* harmony import */ var _pages_admin_admin_perfis_admin_perfil_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin/admin-perfis/admin-perfil.component */ "./src/app/pages/admin/admin-perfis/admin-perfil.component.ts");
/* harmony import */ var _pages_admin_admin_usuarios_admin_usuarios_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin-usuarios/admin-usuarios.component */ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.ts");
/* harmony import */ var _pages_admin_admin_departamentos_admin_departamentos_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/admin/admin-departamentos/admin-departamentos.component */ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.ts");
/* harmony import */ var _pages_admin_admin_cargos_admin_cargos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/admin/admin-cargos/admin-cargos.component */ "./src/app/pages/admin/admin-cargos/admin-cargos.component.ts");
/* harmony import */ var _pages_conta_conta_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/conta/conta.component */ "./src/app/pages/conta/conta.component.ts");
/* harmony import */ var _pages_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/questionario/questionario.component */ "./src/app/pages/questionario/questionario.component.ts");













//component temporario












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_16__["PerfilComponent"],
                _barra_superior_barra_superior_component__WEBPACK_IMPORTED_MODULE_17__["BarraSuperiorComponent"],
                _pages_em_construcao_em_construcao_component__WEBPACK_IMPORTED_MODULE_12__["EmConstrucaoComponent"],
                _pages_admin_admin_perfis_admin_perfil_component__WEBPACK_IMPORTED_MODULE_18__["AdminPerfilComponent"],
                _pages_admin_admin_usuarios_admin_usuarios_component__WEBPACK_IMPORTED_MODULE_19__["AdminUsuariosComponent"],
                _pages_admin_admin_departamentos_admin_departamentos_component__WEBPACK_IMPORTED_MODULE_20__["AdminDepartamentosComponent"],
                _pages_admin_admin_cargos_admin_cargos_component__WEBPACK_IMPORTED_MODULE_21__["AdminCargosComponent"],
                _pages_conta_conta_component__WEBPACK_IMPORTED_MODULE_22__["ContaComponent"],
                _pages_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_23__["QuestionarioComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["appRoutes"])
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"],
                _services_http_util_service__WEBPACK_IMPORTED_MODULE_8__["HttpUtilService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/perfil/perfil.component */ "./src/app/pages/perfil/perfil.component.ts");
/* harmony import */ var _pages_em_construcao_em_construcao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/em-construcao/em-construcao.component */ "./src/app/pages/em-construcao/em-construcao.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_admin_admin_usuarios_admin_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/admin/admin-usuarios/admin-usuarios.component */ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.ts");
/* harmony import */ var _pages_admin_admin_departamentos_admin_departamentos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/admin/admin-departamentos/admin-departamentos.component */ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.ts");
/* harmony import */ var _pages_admin_admin_cargos_admin_cargos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/admin/admin-cargos/admin-cargos.component */ "./src/app/pages/admin/admin-cargos/admin-cargos.component.ts");
/* harmony import */ var _pages_admin_admin_perfis_admin_perfil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/admin/admin-perfis/admin-perfil.component */ "./src/app/pages/admin/admin-perfis/admin-perfil.component.ts");
/* harmony import */ var _pages_conta_conta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/conta/conta.component */ "./src/app/pages/conta/conta.component.ts");
/* harmony import */ var _pages_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/questionario/questionario.component */ "./src/app/pages/questionario/questionario.component.ts");












var appRoutes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'admin/usuarios', component: _pages_admin_admin_usuarios_admin_usuarios_component__WEBPACK_IMPORTED_MODULE_6__["AdminUsuariosComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"]] //canActivate:[AuthGuardAdmin]
    },
    {
        path: 'admin/cargos', component: _pages_admin_admin_cargos_admin_cargos_component__WEBPACK_IMPORTED_MODULE_8__["AdminCargosComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"]] //canActivate:[AuthGuardAdmin]
    },
    {
        path: 'admin/perfis', component: _pages_admin_admin_perfis_admin_perfil_component__WEBPACK_IMPORTED_MODULE_9__["AdminPerfilComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"]]
    },
    {
        path: 'admin/perfil/:id', component: _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"]]
    },
    {
        path: 'admin/departamentos', component: _pages_admin_admin_departamentos_admin_departamentos_component__WEBPACK_IMPORTED_MODULE_7__["AdminDepartamentosComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuardAdmin"]] //canActivate:[AuthGuardAdmin]
    },
    {
        path: 'em-construcao', component: _pages_em_construcao_em_construcao_component__WEBPACK_IMPORTED_MODULE_4__["EmConstrucaoComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'conta', component: _pages_conta_conta_component__WEBPACK_IMPORTED_MODULE_10__["ContaComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    }, {
        path: 'perfil', component: _pages_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__["PerfilComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'questionario', component: _pages_questionario_questionario_component__WEBPACK_IMPORTED_MODULE_11__["QuestionarioComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/barra-superior/barra-superior.component.css":
/*!*************************************************************!*\
  !*** ./src/app/barra-superior/barra-superior.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user_dropdown{\r\n    margin-right: 3%;\r\n}\r\n\r\ni{\r\n    font-size: 24px;\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n\r\n.dropdown-submenu {\r\n    position:relative;\r\n}\r\n\r\n.dropdown-submenu>.dropdown-menu {\r\n    top:0;\r\n    left:100%;\r\n    margin-top:-6px;\r\n    margin-left:-1px;\r\n    border-radius:0 6px 6px 6px;\r\n}\r\n\r\n.dropdown-submenu:hover>.dropdown-menu {\r\n    display:block;\r\n}\r\n\r\n.dropdown-submenu>a:after {\r\n    display:block;\r\n    content:\" \";\r\n    float:right;\r\n    width:0;\r\n    height:0;\r\n    border-color:transparent;\r\n    border-style:solid;\r\n    border-width:5px 0 5px 5px;\r\n    border-left-color:#cccccc;\r\n    margin-top:5px;\r\n    margin-right:-10px;\r\n}\r\n\r\n.dropdown-submenu:hover>a:after {\r\n    border-left-color:#ffffff;\r\n}\r\n\r\n.dropdown-submenu.pull-left {\r\n    float:none;\r\n}\r\n\r\n.dropdown-submenu.pull-left>.dropdown-menu {\r\n    left:-100%;\r\n    margin-left:10px;\r\n    border-radius:6px 0 6px 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFycmEtc3VwZXJpb3IvYmFycmEtc3VwZXJpb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLEtBQUs7SUFDTCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGdCQUFnQjtJQUdoQiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFHaEIsMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYmFycmEtc3VwZXJpb3IvYmFycmEtc3VwZXJpb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN1c2VyX2Ryb3Bkb3due1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxufVxyXG5cclxuaXtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLXN1Ym1lbnUge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmRyb3Bkb3duLXN1Ym1lbnU+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOi02cHg7XHJcbiAgICBtYXJnaW4tbGVmdDotMXB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjAgNnB4IDZweCA2cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6MCA2cHggNnB4IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6MCA2cHggNnB4IDZweDtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudTpob3Zlcj4uZHJvcGRvd24tbWVudSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51PmE6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGNvbnRlbnQ6XCIgXCI7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIHdpZHRoOjA7XHJcbiAgICBoZWlnaHQ6MDtcclxuICAgIGJvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDo1cHggMCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6I2NjY2NjYztcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMHB4O1xyXG59XHJcbi5kcm9wZG93bi1zdWJtZW51OmhvdmVyPmE6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQge1xyXG4gICAgZmxvYXQ6bm9uZTtcclxufVxyXG4uZHJvcGRvd24tc3VibWVudS5wdWxsLWxlZnQ+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbGVmdDotMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6NnB4IDAgNnB4IDZweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHggMCA2cHggNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/barra-superior/barra-superior.component.html":
/*!**************************************************************!*\
  !*** ./src/app/barra-superior/barra-superior.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light \">\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">PMSB - TO</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Tarefas\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"  dropdown-item\" [routerLink]=\"['/em-construcao']\"> Enviadas</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Recebidas</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Concluidas / Enviadas</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Concluidas / Recebidas</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Questionario\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/questionario']\">Área</a>\n          <!--\n          <a class=\"  dropdown-item\" [routerLink]=\"['/em-construcao']\">Água</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Esgoto</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Resíduos solidos</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Drenagem urbana</a>\n            -->\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Produto\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"  dropdown-item\" [routerLink]=\"['/em-construcao']\"> Água</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Esgoto</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Resíduos solidos</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"> Drenagem urbana</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          Sintese\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"  dropdown-item\" [routerLink]=\"['/em-construcao']\">Água</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Esgoto</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Resíduos solidos</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Drenagem urbana</a>\n        </div>\n      </li>\n\n      <ng-template [ngIf]=\"verificaUsuarioAdmin()\">\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            Administração\n          </a>\n          <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\n            <li class=\"dropdown-submenu\">\n              <a class=\"dropdown-item\" tabindex=\"-1\">Dados</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"dropdown-item\" [routerLink]=\"['/admin/usuarios']\"><a>Usuarios</a></li>\n                <div class=\"dropdown-divider\"></div>\n                <li class=\"dropdown-item\" [routerLink]=\"['/admin/perfis']\"><a>Perfis</a></li>\n                <div class=\"dropdown-divider\"></div>\n                <li class=\"dropdown-item\" [routerLink]=\"['/admin/departamentos']\"><a>Eixos</a></li>\n                <div class=\"dropdown-divider\"></div>\n                <li class=\"dropdown-item\" [routerLink]=\"['/admin/cargos']\"><a>Cargos</a></li>\n              </ul>\n            </li>\n            <li class=\"dropdown-submenu\">\n              <a class=\"dropdown-item\" tabindex=\"-1\">Fluxograma</a>\n              <ul class=\"dropdown-menu\">\n                <li class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\"><a>Departamento / Cargo / Usuario</a></li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n      </ng-template>\n\n    </ul>\n\n    <div class=\"dropdown\" id='user_dropdown'>\n      <img src=\"{{ usuario.foto }}\" width=\"40\" style=\"padding-left:3%;border-radius: 50%;\" class=\"img-responsive\">\n      <a class=\" dropdown-toggle\" type=\"\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        {{ usuario['last_name'] }}\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/conta']\">Conta</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" [routerLink]=\"['/perfil']\">Perfil</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" [routerLink]=\"['/em-construcao']\">Tarefas</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" (click)='logOut()'>Sair</a>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/barra-superior/barra-superior.component.ts":
/*!************************************************************!*\
  !*** ./src/app/barra-superior/barra-superior.component.ts ***!
  \************************************************************/
/*! exports provided: BarraSuperiorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarraSuperiorComponent", function() { return BarraSuperiorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth-service */ "./src/app/services/auth-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");





var BarraSuperiorComponent = /** @class */ (function () {
    function BarraSuperiorComponent(usuarioService, authService, router) {
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.router = router;
    }
    BarraSuperiorComponent.prototype.ngOnInit = function () {
        this.usuario = JSON.parse(localStorage['usuario']);
    };
    BarraSuperiorComponent.prototype.logOut = function () {
        this.authService.logof();
        this.router.navigate(['/login']);
    };
    BarraSuperiorComponent.prototype.verificaUsuarioAdmin = function () {
        //console.log("pede verificacao")
        return this.usuarioService.verificarSeUsuarioPertenceGrupo('14');
    };
    BarraSuperiorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barra-superior',
            template: __webpack_require__(/*! ./barra-superior.component.html */ "./src/app/barra-superior/barra-superior.component.html"),
            styles: [__webpack_require__(/*! ./barra-superior.component.css */ "./src/app/barra-superior/barra-superior.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BarraSuperiorComponent);
    return BarraSuperiorComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard, AuthGuardAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardAdmin", function() { return AuthGuardAdmin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-service */ "./src/app/services/auth-service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/usuario.service */ "./src/app/services/usuario.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        //let usuario_atual_PMSB = JSON.parse(localStorage.getItem("usuario_atual_PMSB"));
        //console.log(usuario_atual_PMSB)
        if (localStorage.getItem('token')) {
            return true;
        }
        console.log('access denied!');
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());

var AuthGuardAdmin = /** @class */ (function () {
    function AuthGuardAdmin(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    AuthGuardAdmin.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            if (this.usuarioService.verificarSeUsuarioPertenceGrupo('14')) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardAdmin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-cargos/admin-cargos.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-cargos/admin-cargos.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWNhcmdvcy9hZG1pbi1jYXJnb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-cargos/admin-cargos.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/admin-cargos/admin-cargos.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n<div class=\"container\" style=\"padding-top:2%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h6><strong>Administração -> Dados -> Cargos.</strong></h6>\n        </div>\n    </div>\n    <div class=\"row\"></div>\n</div>\n\n<div class=\"container\" style=\"padding-top:1%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <p>Faça download desta listagem para uso em planilha,<a (click)=\"gerarCSV()\" onmouseover=\"style.color='#0B0080'\" onmouseout=\"style.color='#3366bb'\"  style=\"color: #3366bb\" > clicando aqui.</a></p>\n        </div>\n    </div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\" ><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\" (click)=\"ordenarPorString('nome')\"><i style=\"font-style: normal;\" class=\"ion-md-arrow-dropdown\">Nome</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\" (click)=\"ordenarPorString('descricao')\"><i style=\"font-style: normal;\" class=\"ion-md-arrow-dropdown\">Descrição</i></a></th>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let depart of departamento_list\">\n            <tr>\n                <td>\n                    {{ depart.nome}}\n                </td>\n                <td>\n                    {{ depart.descricao }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<!--\n  {\n    \"id\": \"c1ab33ff-adf8-4986-b906-ac328f87877c\",\n    \"criado_em\": \"2018-09-04T16:36:48.973750-03:00\",\n    \"editado_em\": \"2018-09-04T16:36:48.973772-03:00\",\n    \"nome\": \"Bolsista\",\n    \"descricao\": \"...\"\n  },\n-->\n\n<!--\n    Administração -> Dados -> Departamentos.\n    Arquivo csv.\n    \n    nome\n    descricao\n-->"

/***/ }),

/***/ "./src/app/pages/admin/admin-cargos/admin-cargos.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-cargos/admin-cargos.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminCargosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCargosComponent", function() { return AdminCargosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");
/* harmony import */ var _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/gerador-csv.service */ "./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts");
/* harmony import */ var src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service */ "./src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service.ts");





var AdminCargosComponent = /** @class */ (function () {
    function AdminCargosComponent(storageService) {
        this.storageService = storageService;
        this.departamento_list = [];
    }
    AdminCargosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.carregarListaCargosNoStorage().then(function (result) {
            result.forEach(function (dep) {
                _this.departamento_list.push({
                    nome: dep.nome,
                    descricao: dep.descricao,
                });
            });
        });
    };
    AdminCargosComponent.prototype.gerarCSV = function () {
        _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__["GeradorCsvService"].downloadCSV(this.departamento_list, 'admministracao-cargos.csv');
    };
    AdminCargosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorValor(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminCargosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorString(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminCargosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-cargos',
            template: __webpack_require__(/*! ./admin-cargos.component.html */ "./src/app/pages/admin/admin-cargos/admin-cargos.component.html"),
            styles: [__webpack_require__(/*! ./admin-cargos.component.css */ "./src/app/pages/admin/admin-cargos/admin-cargos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__["StorageDadosService"]])
    ], AdminCargosComponent);
    return AdminCargosComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-departamentos/admin-departamentos.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLWRlcGFydGFtZW50b3MvYWRtaW4tZGVwYXJ0YW1lbnRvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-departamentos/admin-departamentos.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n<div class=\"container\" style=\"padding-top:2%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h6><strong>Administração -> Dados -> Eixos.</strong></h6>\n        </div>\n    </div>\n    <div class=\"row\"></div>\n</div>\n\n<div class=\"container\" style=\"padding-top:1%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <p>Faça download desta listagem para uso em planilha,<a (click)=\"gerarCSV()\" onmouseover=\"style.color='#0B0080'\" onmouseout=\"style.color='#3366bb'\"  style=\"color: #3366bb\" > clicando aqui.</a></p>\n        </div>\n    </div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\" ><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\" (click)=\"ordenarPorString('nome')\"><i style=\"font-style: normal;\" class=\"ion-md-arrow-dropdown\">Nome</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\" (click)=\"ordenarPorString('descricao')\"><i style=\"font-style: normal;\" class=\"ion-md-arrow-dropdown\">Descrição</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\" (click)=\"ordenarPorString('superior')\"><i style=\"font-style: normal;\" class=\"ion-md-arrow-dropdown\">Superior</i></a></th>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let depart of departamento_list\">\n            <tr>\n                <td>\n                    {{ depart.nome}}\n                </td>\n                <td>\n                    {{ depart.descricao }}\n                </td>\n                <td>\n                    {{ depart.superior }}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<!--\n {\n    \"id\": \"f455d637-5409-41c4-bd99-ead350044a5f\",\n    \"criado_em\": \"2018-08-01T16:09:52.618301-03:00\",\n    \"editado_em\": \"2018-10-16T09:37:01.386940-03:00\",\n    \"nome\": \"Abastecimento de Água\",\n    \"descricao\": \"...\",\n    \"superior\": \"4bacb914-da6a-422e-b807-17c823d8a08a\"\n  },\n-->\n\n<!--\n    Administração -> Dados -> Departamentos.\n    Arquivo csv.\n    \n    nome\n    descricao\n    superior\n-->"

/***/ }),

/***/ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-departamentos/admin-departamentos.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminDepartamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDepartamentosComponent", function() { return AdminDepartamentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");
/* harmony import */ var _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/gerador-csv.service */ "./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts");
/* harmony import */ var src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service */ "./src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service.ts");





var AdminDepartamentosComponent = /** @class */ (function () {
    function AdminDepartamentosComponent(storageService) {
        this.storageService = storageService;
        this.departamento_list = [];
    }
    AdminDepartamentosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storageService.carregarListaDepartamentoNoStorage().then(function (result) {
            result.forEach(function (dep) {
                _this.departamento_list.push({
                    nome: dep.nome,
                    descricao: dep.descricao,
                    superior: _this.getDepartamentoSuperior(dep.superior),
                });
            });
        });
    };
    AdminDepartamentosComponent.prototype.getDepartamentoSuperior = function ($id) {
        if ($id == null) {
            return "- ";
        }
        return this.storageService.getDepartamentoPeloIdNoStorage($id).nome;
    };
    AdminDepartamentosComponent.prototype.gerarCSV = function () {
        _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__["GeradorCsvService"].downloadCSV(this.departamento_list, 'admministracao-departamentos.csv');
    };
    AdminDepartamentosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorValor(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminDepartamentosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorString(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminDepartamentosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-departamentos',
            template: __webpack_require__(/*! ./admin-departamentos.component.html */ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.html"),
            styles: [__webpack_require__(/*! ./admin-departamentos.component.css */ "./src/app/pages/admin/admin-departamentos/admin-departamentos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__["StorageDadosService"]])
    ], AdminDepartamentosComponent);
    return AdminDepartamentosComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-perfis/admin-perfil.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin/admin-perfis/admin-perfil.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n    font-size: 14px;\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n\r\n.botao-link{\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcGVyZmlzL2FkbWluLXBlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tcGVyZmlzL2FkbWluLXBlcmZpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJvdGFvLWxpbmt7XHJcbiBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/admin/admin-perfis/admin-perfil.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin/admin-perfis/admin-perfil.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\r\n<div class=\"container\" style=\"padding-top:2%\">\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h6><strong>Administração -> Dados -> Perfis.</strong></h6>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\"></div>\r\n</div>\r\n\r\n<ng-template [ngIf]=\"loading\" [ngIfElse]=\"perfilElse\">\r\n    <button *ngIf=\"loading\" class=\"btn btn-link\" style=\"padding-left: 50%;padding-right: 45%\" disabled>\r\n        <span class=\"spinner-border text-muted\"></span>\r\n        Carregando...\r\n    </button>\r\n</ng-template>\r\n\r\n<ng-template #perfilElse>\r\n    <div class=\"container\" style=\"padding-top:1%\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <p>Faça download desta listagem para uso em planilha,<a (click)=\"processarDadosCSV()\"\r\n                        onmouseover=\"style.color='#0B0080'\" onmouseout=\"style.color='#3366bb'\" style=\"color: #3366bb\">\r\n                        clicando aqui.</a></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n\r\n<!--\r\ncargo: null\r\ncriado_em: \"2019-04-01T18:01:07.447435-03:00\"\r\ndate_joined: \"2019-04-01T18:01:06.398031-03:00\"\r\ndepartamento: null\r\neditado_em: \"2019-04-01T18:01:07.447451-03:00\"\r\nemail: \"proclinicagv.adm@gmail.com\"\r\nfirst_name: \"a\"\r\nfoto: \"https://pmsb.sfo2.digitaloceanspaces.com/files/media/usuario_foto/4feb54a9-2c32-4b3e-8153-e62ceb7632ba/WhatsApp_Image_2019-04-01_at_08.26.01.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=KIOYALKRG4O3VDNTBPRD%2F20190402%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20190402T093323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4ce8b26d816291ceea208bec43168c5d504bffe897ce9e4fc2ce21da9f5f5dab\"\r\ngroups: []\r\nid: \"4feb54a9-2c32-4b3e-8153-e62ceb7632ba\"\r\nis_active: false\r\nis_staff: false\r\nis_superuser: false\r\nlast_login: null\r\nlast_name: \"a\"\r\nsuperior: null\r\ntelefone_celular: \"3332211136\"\r\nuser_permissions: []\r\nusername: \"83691537601\"\r\n\r\n\r\n<ng-template [ngIf]=\"perfil.acao == 'preencher'\" [ngIfElse]=\"perfilElse\">\r\n    <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-md-add\"></i> {{ perfil.acao }} </a>\r\n</ng-template>\r\n<ng-template #perfilElse>\r\n    <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-ios-create\"></i> {{ perfil.acao }} </a>\r\n</ng-template>\r\n\r\n\r\n-->\r\n\r\n<!--\r\n    Administração -> Dados -> Usuarios.\r\n    Arquivo csv.\r\n    \r\n    foto\r\n    username(cpf)\r\n    nome\r\n    telefone\r\n    email\r\n    superior\r\n    departamento\r\n    cargo\r\n-->"

/***/ }),

/***/ "./src/app/pages/admin/admin-perfis/admin-perfil.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/admin/admin-perfis/admin-perfil.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminPerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPerfilComponent", function() { return AdminPerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");
/* harmony import */ var _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/gerador-csv.service */ "./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts");




var AdminPerfilComponent = /** @class */ (function () {
    function AdminPerfilComponent(storageService) {
        this.storageService = storageService;
        this.loading = true;
    }
    AdminPerfilComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.storageService.carregarDadosPerfisNoStorage()];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, this.storageService.carregarDadosNoStorage()];
                    case 2:
                        _d.sent();
                        _a = this;
                        return [4 /*yield*/, this.storageService.getListaUsuario()];
                    case 3:
                        _a.user_list = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.storageService.recuperarListaPerfisAtributos()];
                    case 4:
                        _b.perfil_list = _d.sent();
                        _c = this;
                        return [4 /*yield*/, false
                            //await this.processarDadosCSV()
                        ];
                    case 5:
                        _c.loading = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPerfilComponent.prototype.gerarCSV = function () {
    };
    AdminPerfilComponent.prototype.processarDadosCSV = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var csv_data;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csv_data = [];
                        return [4 /*yield*/, this.user_list.forEach(function (user) {
                                csv_data = csv_data.concat(_this.getUserListaDataPerfil(user));
                                //csv_data.push()
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__["GeradorCsvService"].downloadCSV(csv_data, 'administracao_lista_perfis.csv')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPerfilComponent.prototype.getUserListaDataPerfil = function (user) {
        var _this = this;
        var result = [];
        this.perfil_list.forEach(function (perfil) {
            var user_group = user['groups'].find(function (element) { return element == '15'; });
            if (!user_group) {
                result.push({
                    cpf: user.username,
                    nome: user.first_name,
                    telefone: user.telefone_celular,
                    email: user.email,
                    superior: _this.getUsuario(user.superior),
                    departamento: _this.getDepartamento(user.departamento),
                    cargo: _this.getCargo(user.cargo),
                    atributo: perfil.nome,
                    valor: _this.carregarValor(perfil, user),
                    documento: _this.carregarDocumento(perfil, user),
                    foto: user.foto,
                });
            }
        });
        return result;
    };
    AdminPerfilComponent.prototype.verificaTipoAtributo = function (perfil) {
        if (perfil['documento']) {
            return 'documento';
        }
        else {
            return 'valor';
        }
    };
    AdminPerfilComponent.prototype.carregarDocumento = function (perfil, user) {
        if (perfil['valor']) {
            return "É valor";
        }
        var result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(user.id, perfil.id);
        if (result) {
            return result.arquivo;
        }
        else {
            return 'não informou';
        }
    };
    AdminPerfilComponent.prototype.carregarValor = function (perfil, user) {
        if (perfil['documento']) {
            return "É documento";
        }
        var result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(user.id, perfil.id);
        if (result) {
            return result.valor;
        }
        else {
            return 'não informou';
        }
    };
    AdminPerfilComponent.prototype.getDepartamento = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getDepartamentoPeloIdNoStorage($id).nome;
    };
    AdminPerfilComponent.prototype.getCargo = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getCargoPeloIdNoStorage($id).nome;
    };
    AdminPerfilComponent.prototype.getUsuario = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getUsuarioPeloIdNoStorage($id).first_name;
    };
    AdminPerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-perfil',
            template: __webpack_require__(/*! ./admin-perfil.component.html */ "./src/app/pages/admin/admin-perfis/admin-perfil.component.html"),
            styles: [__webpack_require__(/*! ./admin-perfil.component.css */ "./src/app/pages/admin/admin-perfis/admin-perfil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__["StorageDadosService"]])
    ], AdminPerfilComponent);
    return AdminPerfilComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/admin-usuarios/admin-usuarios.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n    font-size: 14px;\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tdXN1YXJpb3MvYWRtaW4tdXN1YXJpb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXVzdWFyaW9zL2FkbWluLXVzdWFyaW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/admin/admin-usuarios/admin-usuarios.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n<div class=\"container\" style=\"padding-top:2%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h6><strong>Administração -> Dados -> Usuarios.</strong></h6>\n        </div>\n    </div>\n    <div class=\"row\"></div>\n</div>\n\n<div class=\"container\" style=\"padding-top:1%\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <p>Faça download desta listagem para uso em planilha,<a (click)=\"gerarCSV()\"\n                    onmouseover=\"style.color='#0B0080'\" onmouseout=\"style.color='#3366bb'\" style=\"color: #3366bb\">\n                    clicando aqui.</a>\n            </p>\n        </div>\n    </div>\n    <button *ngIf=\"loading\" class=\"btn btn-link\" style=\"padding-left: 50%;padding-right: 45%\" disabled>\n        <span class=\"spinner-border text-muted\"></span>\n        Carregando...\n    </button>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Foto</th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorValor('username')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">CPF</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorString('first_name')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Nome</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorValor('telefone_celular')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Telefone</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorString('email')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Email</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorString('superior')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Superior</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorString('departamento')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Departamento</i></a></th>\n                <th scope=\"col\"><a onmouseover=\"style.color='#0645AD'\" onmouseout=\"style.color='black'\"\n                        (click)=\"ordenarPorString('cargo')\"><i style=\"font-style: normal;\"\n                            class=\"ion-md-arrow-dropdown\">Cargo</i></a></th>\n            </tr>\n        </thead>\n\n        <tbody *ngFor=\"let user of userlist\">\n\n            <tr>\n                <td>\n                    <img src=\"{{ user.foto }}\" alt=\"Girl in a jacket\" width=\"50\">\n                </td>\n                <td>\n                    <button type=\"button\" (click)=\"navegarParaPerfilUsuario(user)\" class=\"btn btn-link\">{{ user.username }}</button>\n                </td>\n                <td>\n                    {{ user.first_name }}\n                </td>\n                <td>\n                    {{ user.telefone_celular }}\n                </td>\n                <td>\n                    {{ user.email }}\n                </td>\n                <td>\n                    {{ user.superior }}\n                </td>\n                <td>\n                    {{ user.departamento }}\n                </td>\n                <td>\n                    {{ user.cargo }}\n                </td>\n\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<!--\ncargo: null\ncriado_em: \"2019-04-01T18:01:07.447435-03:00\"\ndate_joined: \"2019-04-01T18:01:06.398031-03:00\"\ndepartamento: null\neditado_em: \"2019-04-01T18:01:07.447451-03:00\"\nemail: \"proclinicagv.adm@gmail.com\"\nfirst_name: \"a\"\nfoto: \"https://pmsb.sfo2.digitaloceanspaces.com/files/media/usuario_foto/4feb54a9-2c32-4b3e-8153-e62ceb7632ba/WhatsApp_Image_2019-04-01_at_08.26.01.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=KIOYALKRG4O3VDNTBPRD%2F20190402%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20190402T093323Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4ce8b26d816291ceea208bec43168c5d504bffe897ce9e4fc2ce21da9f5f5dab\"\ngroups: []\nid: \"4feb54a9-2c32-4b3e-8153-e62ceb7632ba\"\nis_active: false\nis_staff: false\nis_superuser: false\nlast_login: null\nlast_name: \"a\"\nsuperior: null\ntelefone_celular: \"3332211136\"\nuser_permissions: []\nusername: \"83691537601\"\n\n\n<ng-template [ngIf]=\"perfil.acao == 'preencher'\" [ngIfElse]=\"perfilElse\">\n    <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-md-add\"></i> {{ perfil.acao }} </a>\n</ng-template>\n<ng-template #perfilElse>\n    <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-ios-create\"></i> {{ perfil.acao }} </a>\n</ng-template>\n\n\n-->\n\n<!--\n    Administração -> Dados -> Usuarios.\n    Arquivo csv.\n    \n    foto\n    username(cpf)\n    nome\n    telefone\n    email\n    superior\n    departamento\n    cargo\n-->"

/***/ }),

/***/ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-usuarios/admin-usuarios.component.ts ***!
  \************************************************************************/
/*! exports provided: AdminUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsuariosComponent", function() { return AdminUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");
/* harmony import */ var _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/ferramentas-auxiliares/gerador-csv.service */ "./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts");
/* harmony import */ var src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service */ "./src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/usuario.service */ "./src/app/services/usuario.service.ts");







var AdminUsuariosComponent = /** @class */ (function () {
    function AdminUsuariosComponent(usuarioService, router, storageService) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.router = router;
        this.storageService = storageService;
        this.userlist = [];
        this.loading = true;
        this.storageService.carregarDadosNoStorage().then(function (resultado) {
            _this.carregarDadosNoUserList();
        }).then(function () {
            _this.loading = false;
        });
    }
    AdminUsuariosComponent.prototype.ngOnInit = function () { };
    AdminUsuariosComponent.prototype.carregarDadosNoUserList = function () {
        var _this = this;
        this.storageService.carregarDadosNoStorage().then(function () {
            var userlist = _this.storageService.recuperarListaUsuarioNoStorage();
            userlist.forEach(function (user) {
                var user_group = user['groups'].find(function (element) { return element == '15'; });
                if (!user_group) {
                    _this.userlist.push({
                        id: user.id,
                        username: user.username,
                        first_name: user.first_name,
                        telefone_celular: user.telefone_celular,
                        email: user.email,
                        superior: _this.getUsuario(user.superior),
                        departamento: _this.getDepartamento(user.departamento),
                        cargo: _this.getCargo(user.cargo),
                        foto: user.foto,
                    });
                }
            });
        });
    };
    AdminUsuariosComponent.prototype.getDepartamento = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getDepartamentoPeloIdNoStorage($id).nome;
    };
    AdminUsuariosComponent.prototype.getCargo = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getCargoPeloIdNoStorage($id).nome;
    };
    AdminUsuariosComponent.prototype.getUsuario = function ($id) {
        if ($id == null) {
            return "  ";
        }
        return this.storageService.getUsuarioPeloIdNoStorage($id).first_name;
    };
    AdminUsuariosComponent.prototype.gerarCSV = function () {
        _services_ferramentas_auxiliares_gerador_csv_service__WEBPACK_IMPORTED_MODULE_3__["GeradorCsvService"].downloadCSV(this.userlist, 'admministracao-usuarios.csv');
    };
    AdminUsuariosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorValor(this.userlist, $var).then(function (result) { return _this.userlist = result; });
    };
    AdminUsuariosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        src_app_services_ferramentas_auxiliares_funcoes_auxiliares_service__WEBPACK_IMPORTED_MODULE_4__["FuncoesAuxiliaresService"].ordenarListaPorString(this.userlist, $var).then(function (result) { return _this.userlist = result; });
    };
    AdminUsuariosComponent.prototype.navegarParaPerfilUsuario = function (usuario) {
        localStorage.setItem('usuario-aux', JSON.stringify(usuario));
        this.router.navigate(['/admin/perfil/' + usuario.id]);
    };
    AdminUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-usuarios',
            template: __webpack_require__(/*! ./admin-usuarios.component.html */ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.html"),
            styles: [__webpack_require__(/*! ./admin-usuarios.component.css */ "./src/app/pages/admin/admin-usuarios/admin-usuarios.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__["StorageDadosService"]])
    ], AdminUsuariosComponent);
    return AdminUsuariosComponent;
}());



/***/ }),

/***/ "./src/app/pages/conta/conta.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/conta/conta.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhL2NvbnRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/conta/conta.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/conta/conta.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n\n\n<div *ngIf='usuario' class=\"container\" style=\"padding-top:3%\">\n  <h3>Dados da conta</h3>\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <div *ngIf='usuario' class=\"container\" style=\"padding-top:3%\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\"><strong> Cpf: </strong> {{ usuario.username }} </li>\n          <li class=\"list-group-item\"><strong> Nome: </strong> {{ usuario.first_name }} </li>\n          <li class=\"list-group-item\"><strong> Telefone: </strong> {{ usuario.telefone_celular }} </li>\n          <li class=\"list-group-item\"><strong> Email: </strong> {{ usuario.email }} </li>\n          <li class=\"list-group-item\"><strong> Superior: </strong> {{ usuario.superior }} </li>\n          <li class=\"list-group-item\"><strong> Departamento: </strong> {{ usuario.departamento }} </li>\n          <li class=\"list-group-item\"><strong> Cargo: </strong> {{ usuario.cargo }} </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-2\"><img src=\"{{ usuario.foto}}\" alt=\"Girl in a jacket\" width=\"200\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/conta/conta.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/conta/conta.component.ts ***!
  \************************************************/
/*! exports provided: ContaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContaComponent", function() { return ContaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");





var ContaComponent = /** @class */ (function () {
    function ContaComponent(storageService, route, router, usuarioService) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.usuarioService = usuarioService;
        this.loading = true;
    }
    ContaComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.usuario_id = (this.route.snapshot.paramMap.get('id'));
                if (!this.usuario_id) {
                    this.iniciaPagina('usuario');
                    this.carregarDadosCargoDepartamentoUsuario();
                }
                else {
                    this.iniciaPagina('usuario-aux');
                }
                this.loading = false;
                return [2 /*return*/];
            });
        });
    };
    ContaComponent.prototype.iniciaPagina = function (id) {
        this.usuario = JSON.parse(localStorage[id]);
    };
    ContaComponent.prototype.carregarDadosCargoDepartamentoUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.carregarUsuarioPeloId(this.usuario.superior).then(function (superior) {
                            _this.usuario['superior'] = superior.first_name;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storageService.carregarDepartamentoPeloId(this.usuario.departamento).then(function (departamento) {
                                _this.usuario['departamento'] = departamento.nome;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storageService.carregarCargoPeloId(this.usuario.cargo).then(function (cargo) {
                                _this.usuario['cargo'] = cargo.nome;
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conta',
            template: __webpack_require__(/*! ./conta.component.html */ "./src/app/pages/conta/conta.component.html"),
            styles: [__webpack_require__(/*! ./conta.component.css */ "./src/app/pages/conta/conta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_4__["StorageDadosService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ContaComponent);
    return ContaComponent;
}());



/***/ }),

/***/ "./src/app/pages/em-construcao/em-construcao.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/em-construcao/em-construcao.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtLWNvbnN0cnVjYW8vZW0tY29uc3RydWNhby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/em-construcao/em-construcao.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/em-construcao/em-construcao.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-barra-superior></app-barra-superior>\n\n<div class=\"container\" style=\"padding-top: 3%;\">\n  <div class=\"alert alert-info\" role=\"alert\">\n    Acesso não permitido.\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/em-construcao/em-construcao.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/em-construcao/em-construcao.component.ts ***!
  \****************************************************************/
/*! exports provided: EmConstrucaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmConstrucaoComponent", function() { return EmConstrucaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmConstrucaoComponent = /** @class */ (function () {
    function EmConstrucaoComponent() {
    }
    EmConstrucaoComponent.prototype.ngOnInit = function () {
    };
    EmConstrucaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-em-construcao',
            template: __webpack_require__(/*! ./em-construcao.component.html */ "./src/app/pages/em-construcao/em-construcao.component.html"),
            styles: [__webpack_require__(/*! ./em-construcao.component.css */ "./src/app/pages/em-construcao/em-construcao.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmConstrucaoComponent);
    return EmConstrucaoComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#user_dropdown{\r\n    margin-right: 3%;\r\n}\r\n\r\n.icon-text{\r\n}\r\n\r\ni{\r\n    font-size: 24px;\r\n    align-self: center;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3VzZXJfZHJvcGRvd257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG59XHJcblxyXG4uaWNvbi10ZXh0e1xyXG59XHJcblxyXG5pe1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");





//import * as OaiPmh from 'oai-pmh'



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http, router) {
        this._http = _http;
        this.router = router;
        this._Url = 'https://sistemas.uft.edu.br/periodicos/index.php/observatorio/oai?verb=Identify';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#botao-login{\r\n}\r\n\r\n.row{\r\n  padding-top: 1%;\r\n  margin: 0%;\r\n}\r\n\r\n.nav-login-item{\r\n  padding-left: 1%;\r\n  padding-top: 1%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jYm90YW8tbG9naW57XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgcGFkZGluZy10b3A6IDElO1xyXG4gIG1hcmdpbjogMCU7XHJcbn1cclxuXHJcbi5uYXYtbG9naW4taXRlbXtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">PMSB - TO</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\"\n    aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <div class=\"navbar-nav mr-auto\"></div>\n    <form [formGroup]=\"validations_form\" (ngSubmit)=\"logar(user.value,password.value)\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"nav-item nav-login-item\"><input type=\"text\" id=\"inputEmail\" formControlName=\"username\" class=\"form-control\" placeholder=\"CPF\"\n            #user required autofocus></li>\n        <li class=\"nav-item nav-login-item\"><input type=\"password\" formControlName=\"password\" placeholder=\"Senha\" class=\"form-control\" #password\n            required></li>\n        <li class=\"nav-item nav-login-item\"><button id=\"botao-login\" class=\"btn btn-primary btn-block estrutura-login\" type=\"submit\">Entrar</button></li>\n        <li class=\"nav-item nav-login-item\"> <button id=\"botao-cadastro\" class=\"btn btn-primary btn-block estrutura-login\"\n            type=\"submit\">Cadastrar</button></li>\n      </ul>\n    </form>\n  </div>\n</nav>\n\n<div *ngIf='alerta_erro.valid' class=\"container\" style=\"padding-top:1%;\">\n  <div class=\"alert alert-danger\" role=\"alert\">\n      <a class=\"close\" (click)=\"alertCleanner()\" aria-label=\"close\">&times;</a>\n      <strong>{{ alerta_erro.messagePrimary }}</strong> {{ alerta_erro.messageSecondary }}\n  </div>\n</div>\n\n<div class=\"row align-items-center\">\n  <div class=\"col-1\"> </div>\n  <div class=\"col-10 \">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n      <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n      </ol>\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"../../assets/img/banner-1.jpeg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../assets/img/banner-2.jpeg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../../assets/img/banner-3.jpeg\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-1\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth-service */ "./src/app/services/auth-service.ts");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, usuarioService, authService, fb) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]();
        this.validations_form = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('.{10,11}[0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(11)
            ]))
        });
        this.alerta_erro = {
            valid: false,
            messagePrimary: "",
            messageSecondary: "",
        };
        localStorage.clear();
    }
    LoginComponent.prototype.ngOnInit = function () {
        /**
        window.addEventListener("beforeunload", function (e) {
          var confirmationMessage = "\o/";
        console.log("cond");
          e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
          return confirmationMessage;              // Gecko, WebKit, Chrome <34
        });
        */
    };
    LoginComponent.prototype.verifyFormValidationIsValid = function () {
        if (this.validations_form.get('username').invalid) {
            this.showErrorMessage("Preencha o campo de CPF corretamente !", " o campo deve conter 11 digitos.");
            return false;
        }
        if (this.validations_form.get('password').invalid) {
            this.showErrorMessage("Preencha o campo de senha corretamente !", "");
            return false;
        }
        return true;
    };
    LoginComponent.prototype.logar = function (username, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertCleanner();
                        if (!this.verifyFormValidationIsValid()) {
                            return [2 /*return*/];
                        }
                        this.username = username;
                        this.password = password;
                        return [4 /*yield*/, this.logarUsuario()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregarDadosUsuario()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.usuarioService.carregarDadosUsuario()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.router.navigate(['/home'])];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.logarUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.login(this.username, this.password).then(function () {
                            //this.carregarDadosUsuario()
                        }).catch(function (erro) {
                            _this.showErrorMessage(erro.mes, erro.submes);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.carregarDadosUsuario = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.carregarInformacoesUsuario(this.username, this.password).then(function (info) {
                        }).catch(function (erro) {
                            _this.showErrorMessage(erro.mes, erro.submes);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.alertCleanner = function () {
        this.alerta_erro.message = "";
        this.alerta_erro.valid = false;
    };
    LoginComponent.prototype.showErrorMessage = function (messagePrimary, messageSecondary) {
        this.alerta_erro.messageSecondary = messageSecondary;
        this.alerta_erro.messagePrimary = messagePrimary;
        this.alerta_erro.valid = true;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon{\r\n    font-size: 24px;  \r\n}\r\n\r\n.acao{\r\n    width:60%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29ue1xyXG4gICAgZm9udC1zaXplOiAyNHB4OyAgXHJcbn1cclxuXHJcbi5hY2Fve1xyXG4gICAgd2lkdGg6NjAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior *ngIf='perfil_individual'></app-barra-superior>\r\n\r\n<app-conta *ngIf='!perfil_individual'></app-conta>\r\n\r\n<div class=\"container\" style=\"padding-top:3%\">\r\n        <h3>Dados do Pefil</h3>\r\n    <table class=\"table\">\r\n        <thead>\r\n            <tr>    \r\n                <th *ngIf='perfil_individual' scope=\"col\">Ação</th>\r\n                <th scope=\"col\">Atributo</th>\r\n                <th scope=\"col\">Valor</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let perfil of perfilLista\">\r\n            <tr>\r\n\r\n                <td *ngIf='perfil_individual'>\r\n                    <ng-template [ngIf]=\"perfil.valor\" [ngIfElse]=\"perfilAcao\">\r\n                        <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-md-add\"></i>\r\n                            Editar </a>\r\n                    </ng-template>\r\n                    <ng-template #perfilAcao>\r\n                        <a class=\"acao nav-link icon-text btn btn-outline-secondary\"><i class=\"icon ion-ios-create\"></i>\r\n                            Preencher</a>\r\n                    </ng-template>\r\n                </td>\r\n\r\n                <th scope=\"row\">{{ perfil.nome }}</th>\r\n\r\n                <td>\r\n                    <ng-template [ngIf]=\"perfil.valor_tipo == 'valor'\" [ngIfElse]=\"perfiValorlElse\">\r\n                        <a class=\"\"> {{ perfil.valor}}</a>\r\n                    </ng-template>\r\n                    <ng-template #perfiValorlElse>\r\n\r\n                        <ng-template [ngIf]=\"perfil.valor\">\r\n                            <a href=\"{{ perfil.valor }}\">Link documento </a>\r\n                        </ng-template>\r\n\r\n                    </ng-template>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\nion-md-close-circle\r\nion-ios-checkmark-circle\r\nion-md-checkmark-circle\r\n-->"

/***/ }),

/***/ "./src/app/pages/perfil/perfil.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/perfil/perfil.component.ts ***!
  \**************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ferramentas-auxiliares/storage-dados.service */ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(route, router, storageService) {
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.perfilLista = [];
        this.usuario_id = null;
        this.perfil_individual = false;
        this.usuario_id = (this.route.snapshot.paramMap.get('id'));
    }
    PerfilComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.usuario_id) {
                    this.perfil_individual = true;
                    this.usuario_id = JSON.parse(localStorage['usuario']).id;
                }
                this.iniciarPagina();
                return [2 /*return*/];
            });
        });
    };
    PerfilComponent.prototype.iniciarPagina = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.carregarDadosPerfisNoStorage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregarListaPerfisNaPagina()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilComponent.prototype.carregarListaPerfisNaPagina = function () {
        var _this = this;
        var perfis_lista = this.storageService.recuperarListaPerfisAtributos();
        perfis_lista.forEach(function (perf) {
            _this.perfilLista.push({
                valor: _this.carregarValor(perf),
                nome: perf.nome,
                valor_tipo: _this.verificaTipoAtributo(perf),
            });
        });
    };
    PerfilComponent.prototype.verificaTipoAtributo = function (perfil) {
        if (perfil['documento']) {
            return 'documento';
        }
        else {
            return 'valor';
        }
    };
    PerfilComponent.prototype.carregarValor = function (perfil) {
        var result = null;
        if (perfil['documento']) {
            result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(this.usuario_id, perfil.id);
            if (result) {
                return result.arquivo;
            }
        }
        else {
            result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(this.usuario_id, perfil.id);
            if (result) {
                return result.valor;
            }
        }
        return result;
    };
    PerfilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/pages/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/pages/perfil/perfil.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_ferramentas_auxiliares_storage_dados_service__WEBPACK_IMPORTED_MODULE_2__["StorageDadosService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/pages/questionario/questionario.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/questionario/questionario.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1ZXN0aW9uYXJpby9xdWVzdGlvbmFyaW8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/questionario/questionario.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/questionario/questionario.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-barra-superior></app-barra-superior>\n"

/***/ }),

/***/ "./src/app/pages/questionario/questionario.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/questionario/questionario.component.ts ***!
  \**************************************************************/
/*! exports provided: QuestionarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioComponent", function() { return QuestionarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_questionario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/questionario.service */ "./src/app/services/questionario.service.ts");



var QuestionarioComponent = /** @class */ (function () {
    function QuestionarioComponent(questionarioService) {
        this.questionarioService = questionarioService;
    }
    QuestionarioComponent.prototype.ngOnInit = function () {
    };
    QuestionarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questionario',
            template: __webpack_require__(/*! ./questionario.component.html */ "./src/app/pages/questionario/questionario.component.html"),
            styles: [__webpack_require__(/*! ./questionario.component.css */ "./src/app/pages/questionario/questionario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_questionario_service__WEBPACK_IMPORTED_MODULE_2__["QuestionarioService"]])
    ], QuestionarioComponent);
    return QuestionarioComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth-service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _http_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-util-service */ "./src/app/services/http-util-service.ts");




var AuthService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuthService, _super);
    function AuthService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.login_token_url = "api/auth/";
        return _this;
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var loginData = { 'username': username, 'password': password };
        return new Promise(function (resolve, reject) {
            _super.prototype.post.call(_this, loginData, _this.login_token_url.concat('get-auth-token')).subscribe(function (resposta) {
                //console.log("logar Usuario")
                localStorage.setItem("token", resposta['token']);
                resolve(resposta);
            }, function (error) {
                reject({ mes: "Falha no login !", submes: " Verifique Usuário e Senha" });
                alert(error);
            });
        });
    };
    AuthService.prototype.carregarInformacoesUsuario = function (username, password) {
        var _this = this;
        var loginData = { 'username': username, 'password': password };
        return new Promise(function (resolve, reject) {
            _super.prototype.post.call(_this, loginData, _this.login_token_url.concat('jwt/auth-token/')).subscribe(function (resposta) {
                var userdata = _this.parseJwt(resposta['token']);
                localStorage.setItem("usuario-informacoes", JSON.stringify(userdata));
                resolve(resposta);
            }, function (error) {
                reject({ mes: "Falha no login !", submes: " Verifique Usuário e Senha" });
                console.error(error);
            });
        });
    };
    AuthService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    };
    ;
    AuthService.prototype.logof = function () {
        delete localStorage['token'];
        delete localStorage['usuario'];
        delete localStorage['usuario-informacoes'];
        localStorage.clear();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}(_http_util_service__WEBPACK_IMPORTED_MODULE_3__["HttpUtilService"]));



/***/ }),

/***/ "./src/app/services/cargos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/cargos.service.ts ***!
  \********************************************/
/*! exports provided: CargosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargosService", function() { return CargosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-util-service */ "./src/app/services/http-util-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var CargosService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CargosService, _super);
    function CargosService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.cargos_url = "api/contas/cargos/";
        _super.prototype.carregarheaders.call(_this);
        return _this;
    }
    CargosService.prototype.carregarListaCargos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.cargos_url).subscribe(function (response) {
                localStorage.setItem('cargos', JSON.stringify(response));
                resolve(response);
            }, function (error) {
                console.log("Error: " + error);
                reject(error);
            });
        });
    };
    CargosService.prototype.carregarCargoPeloId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.cargos_url.concat(id)).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CargosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], CargosService);
    return CargosService;
}(_http_util_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilService"]));



/***/ }),

/***/ "./src/app/services/departamentos.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/departamentos.service.ts ***!
  \***************************************************/
/*! exports provided: DepartamentosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartamentosService", function() { return DepartamentosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-util-service */ "./src/app/services/http-util-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var DepartamentosService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DepartamentosService, _super);
    function DepartamentosService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.departamento_url = "api/contas/departamentos/";
        _super.prototype.carregarheaders.call(_this);
        return _this;
    }
    DepartamentosService.prototype.carregarListaDepartamentos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _super.prototype.get.call(_this, {}, _this.departamento_url).subscribe(function (response) {
                            localStorage.setItem('departamentos', JSON.stringify(response));
                            resolve(response);
                        }, function (error) {
                            console.log("Error: " + error);
                            reject(error);
                        });
                    })];
            });
        });
    };
    DepartamentosService.prototype.carregarDepartamentoPeloId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.departamento_url.concat(id)).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    DepartamentosService.prototype.getDepartamentoPeloId = function (id) {
        var departamentos = JSON.parse(localStorage['departamentos']);
        return departamentos.find(function (depatamento) { return depatamento.id == id; });
    };
    DepartamentosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], DepartamentosService);
    return DepartamentosService;
}(_http_util_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilService"]));



/***/ }),

/***/ "./src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FuncoesAuxiliaresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuncoesAuxiliaresService", function() { return FuncoesAuxiliaresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FuncoesAuxiliaresService = /** @class */ (function () {
    function FuncoesAuxiliaresService() {
    }
    FuncoesAuxiliaresService.ordenarListaPorValor = function (list, valor_ordenacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var aux;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, list.sort(function (a, b) {
                            return a[valor_ordenacao] - b[valor_ordenacao];
                        })];
                    case 1:
                        aux = _a.sent();
                        return [2 /*return*/, aux];
                }
            });
        });
    };
    FuncoesAuxiliaresService.ordenarListaPorString = function (list, valor_ordenacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var aux;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, list.sort(function (a, b) {
                            a = a[valor_ordenacao].toLowerCase();
                            b = b[valor_ordenacao].toLowerCase();
                            if (a > b) {
                                return 1;
                            }
                            else if (a < b) {
                                return -1;
                            }
                            else if (a === b) {
                                return 0;
                            }
                        })];
                    case 1:
                        aux = _a.sent();
                        return [2 /*return*/, aux];
                }
            });
        });
    };
    FuncoesAuxiliaresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FuncoesAuxiliaresService);
    return FuncoesAuxiliaresService;
}());



/***/ }),

/***/ "./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/services/ferramentas-auxiliares/gerador-csv.service.ts ***!
  \************************************************************************/
/*! exports provided: GeradorCsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeradorCsvService", function() { return GeradorCsvService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeradorCsvService = /** @class */ (function () {
    function GeradorCsvService() {
    }
    GeradorCsvService.converterArrayParaCSV = function (args) {
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;
        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }
        columnDelimiter = args.columnDelimiter || ';';
        lineDelimiter = args.lineDelimiter || '\n';
        keys = Object.keys(data[0]);
        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;
        data.forEach(function (item) {
            ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0)
                    result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    };
    GeradorCsvService.downloadCSV = function (list, filename) {
        var filename, link;
        var csv = this.converterArrayParaCSV({
            data: list
        });
        if (csv == null)
            return;
        filename = filename || 'export.csv';
        var encodedUri = encodeURI(csv);
        link = document.createElement("a");
        link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri);
        link.setAttribute("download", filename);
        link.click();
    };
    GeradorCsvService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeradorCsvService);
    return GeradorCsvService;
}());



/***/ }),

/***/ "./src/app/services/ferramentas-auxiliares/storage-dados.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/ferramentas-auxiliares/storage-dados.service.ts ***!
  \**************************************************************************/
/*! exports provided: StorageDadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageDadosService", function() { return StorageDadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var _cargos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cargos.service */ "./src/app/services/cargos.service.ts");
/* harmony import */ var _departamentos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../departamentos.service */ "./src/app/services/departamentos.service.ts");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../perfil.service */ "./src/app/services/perfil.service.ts");






var StorageDadosService = /** @class */ (function () {
    function StorageDadosService(perfilService, usuarioService, cargoService, departamentoService) {
        this.perfilService = perfilService;
        this.usuarioService = usuarioService;
        this.cargoService = cargoService;
        this.departamentoService = departamentoService;
    }
    StorageDadosService.prototype.salvarDados = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageDadosService.prototype.carregarDadosNoStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioService.carregarListaCompletaUsuarios()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cargoService.carregarListaCargos()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.departamentoService.carregarListaDepartamentos()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Usuario
    StorageDadosService.prototype.getListaUsuario = function () {
        return this.usuarioService.carregarListaCompletaUsuarios();
    };
    StorageDadosService.prototype.carregarListaUsuariosNoStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioService.carregarListaCompletaUsuarios().then(function () {
                            return _this.recuperarListaUsuarioNoStorage();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaUsuarioNoStorage = function () {
        return JSON.parse(localStorage.getItem('usuarios'));
    };
    StorageDadosService.prototype.getUsuarioPeloIdNoStorage = function (id) {
        return this.recuperarListaUsuarioNoStorage().find(function (usuario) { return usuario.id == id; });
    };
    StorageDadosService.prototype.carregarUsuarioPeloId = function (id) {
        return this.usuarioService.carregarUsuarioPeloId(id);
    };
    //Cargo
    StorageDadosService.prototype.carregarListaCargosNoStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargoService.carregarListaCargos()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.recuperarListaCargosNoStorage()];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaCargosNoStorage = function () {
        return JSON.parse(localStorage['cargos']);
    };
    StorageDadosService.prototype.getCargoPeloIdNoStorage = function (id) {
        return this.recuperarListaCargosNoStorage().find(function (cargo) { return cargo.id == id; });
    };
    StorageDadosService.prototype.carregarCargoPeloId = function (id) {
        return this.cargoService.carregarCargoPeloId(id);
    };
    //Departamento
    StorageDadosService.prototype.carregarListaDepartamentoNoStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departamentoService.carregarListaDepartamentos()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.recuperarListaDepartamentosNoStorage()];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaDepartamentosNoStorage = function () {
        return JSON.parse(localStorage['departamentos']);
    };
    StorageDadosService.prototype.getDepartamentoPeloIdNoStorage = function (id) {
        return this.recuperarListaDepartamentosNoStorage().find(function (departamentos) { return departamentos.id == id; });
    };
    StorageDadosService.prototype.carregarDepartamentoPeloId = function (id) {
        return this.departamentoService.carregarDepartamentoPeloId(id);
    };
    //Perfil
    StorageDadosService.prototype.carregarDadosPerfisNoStorage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.perfilService.carregarListaAtributos()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.perfilService.carregarListaAtributoValores()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.perfilService.carregarListaAtributoDocumentos()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributos = function () {
        return JSON.parse(localStorage['perfil-atributos']);
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributosDocumento = function () {
        return JSON.parse(localStorage['perfil-atributos_documentos']);
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributoValores = function () {
        return JSON.parse(localStorage['perfil-atributos_valores']);
    };
    StorageDadosService.prototype.getPerfilAtributoDocumentosPeloIdNoStorage = function (id, documento_tipo) {
        return this.recuperarListaPerfisAtributosDocumento().find(function (perfil) { return perfil.usuario == id && perfil.tipo == documento_tipo; });
    };
    StorageDadosService.prototype.getPerfilAtributoValoresPeloIdNoStorage = function (id, valor_tipo) {
        return this.recuperarListaPerfisAtributoValores().find(function (perfil) { return perfil.usuario == id && perfil.tipo == valor_tipo; });
    };
    StorageDadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_perfil_service__WEBPACK_IMPORTED_MODULE_5__["PerfilService"], _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _cargos_service__WEBPACK_IMPORTED_MODULE_3__["CargosService"], _departamentos_service__WEBPACK_IMPORTED_MODULE_4__["DepartamentosService"]])
    ], StorageDadosService);
    return StorageDadosService;
}());



/***/ }),

/***/ "./src/app/services/http-util-service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/http-util-service.ts ***!
  \***********************************************/
/*! exports provided: HttpUtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUtilService", function() { return HttpUtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");




var HttpUtilService = /** @class */ (function () {
    function HttpUtilService(http) {
        this.http = http;
        this.api_url = 'http://174.138.119.228/';
        this.carregarheaders();
    }
    HttpUtilService.prototype.post = function (requestbody, end) {
        this.carregarheaders();
        return this.http.post(this.api_url.concat(end), requestbody, { headers: this.headers })
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    HttpUtilService.prototype.get = function (params, end) {
        this.carregarheaders();
        return this.http.get(this.api_url.concat(end), {
            headers: this.headers,
            search: params
        })
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    HttpUtilService.prototype.carregarheaders = function () {
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var authToken = localStorage['token'];
        if (authToken) {
            this.headers.append('Authorization', "Token " + authToken);
        }
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
        return options;
    };
    HttpUtilService.prototype.extrairDados = function (response) {
        var data = response.json();
        return data || {};
    };
    HttpUtilService.prototype.processarErros = function (erro) {
        if (erro.status === 401) {
            delete localStorage['user'];
            delete localStorage['token'];
            localStorage.clear();
            //location.reload();
            //this.router.navigate(['/login']);
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw('Erro acessando servidor remoto.');
    };
    HttpUtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HttpUtilService);
    return HttpUtilService;
}());



/***/ }),

/***/ "./src/app/services/perfil.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/perfil.service.ts ***!
  \********************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-util-service */ "./src/app/services/http-util-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var PerfilService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PerfilService, _super);
    function PerfilService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.perfil_url = "api/contas/";
        return _this;
    }
    PerfilService.prototype.carregarLista = function (data_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.perfil_url.concat(data_id)).subscribe(function (response) {
                localStorage.setItem('perfil-' + data_id, JSON.stringify(response));
                resolve(response);
            }, function (error) {
                reject(error);
                console.log(error);
            });
        });
    };
    PerfilService.prototype.carregarListaAtributos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carregarLista('atributos')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilService.prototype.carregarListaAtributoDocumentos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carregarLista('atributos_documentos')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilService.prototype.carregarListaAtributoValores = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carregarLista('atributos_valores')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], PerfilService);
    return PerfilService;
}(_http_util_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilService"]));



/***/ }),

/***/ "./src/app/services/questionario.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/questionario.service.ts ***!
  \**************************************************/
/*! exports provided: QuestionarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionarioService", function() { return QuestionarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http-util-service */ "./src/app/services/http-util-service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");




var QuestionarioService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuestionarioService, _super);
    function QuestionarioService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.questionario_url = "api/questionarios/";
        return _this;
    }
    QuestionarioService.prototype.carregarSetoresCensitarios = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.questionario_url.concat('setores_censitarios/')).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
                console.log(error);
            });
        });
    };
    QuestionarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], QuestionarioService);
    return QuestionarioService;
}(_services_http_util_service__WEBPACK_IMPORTED_MODULE_2__["HttpUtilService"]));



/***/ }),

/***/ "./src/app/services/usuario.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _http_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-util-service */ "./src/app/services/http-util-service.ts");




var UsuarioService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsuarioService, _super);
    function UsuarioService(http, httpUtil) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.httpUtil = httpUtil;
        _this.user_url = 'api/contas/users/';
        return _this;
    }
    UsuarioService.prototype.carregarListaCompletaUsuarios = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.user_url).subscribe(function (response) {
                localStorage.setItem('usuarios', JSON.stringify(response));
                resolve(response);
            }, function (error) {
                console.log("Error: " + error);
                reject(error);
            });
        });
    };
    UsuarioService.prototype.carregarUsuarioPeloId = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _super.prototype.get.call(_this, {}, _this.user_url.concat(id)).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UsuarioService.prototype.carregarDadosUsuario = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var usuario = JSON.parse(localStorage['usuario-informacoes']);
            _super.prototype.get.call(_this, {}, _this.user_url.concat(usuario.user_id)).subscribe(function (response) {
                localStorage.setItem('usuario', JSON.stringify(response));
                resolve(response);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    UsuarioService.prototype.getDadosUsuario = function () {
        return JSON.parse(localStorage.getItem('usuario'));
    };
    UsuarioService.prototype.verificarSeUsuarioPertenceGrupo = function (group_id) {
        var user = this.getDadosUsuario();
        if (user['groups'].length <= 0) {
            return false;
        }
        var resultado = false;
        user['groups'].forEach(function (element) {
            if (element == group_id) {
                resultado = true;
            }
        });
        return resultado;
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _http_util_service__WEBPACK_IMPORTED_MODULE_3__["HttpUtilService"]])
    ], UsuarioService);
    return UsuarioService;
}(_http_util_service__WEBPACK_IMPORTED_MODULE_3__["HttpUtilService"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\natab\Desktop\Estagio\pmsbfrontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map