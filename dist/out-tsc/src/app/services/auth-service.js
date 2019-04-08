import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpUtilService } from './http-util-service';
var AuthService = /** @class */ (function (_super) {
    tslib_1.__extends(AuthService, _super);
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
                console.error(error);
            });
        });
    };
    AuthService.prototype.carregarInformacoesUsuario = function (username, password) {
        var _this = this;
        var loginData = { 'username': username, 'password': password };
        return new Promise(function (resolve, reject) {
            _super.prototype.post.call(_this, loginData, _this.login_token_url.concat('jwt/auth-token/')).subscribe(function (resposta) {
                //console.log("carregar dados")
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
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], AuthService);
    return AuthService;
}(HttpUtilService));
export { AuthService };
//# sourceMappingURL=auth-service.js.map