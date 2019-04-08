import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpUtilService } from './http-util-service';
var UsuarioService = /** @class */ (function (_super) {
    tslib_1.__extends(UsuarioService, _super);
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
    UsuarioService.prototype.carregarDadosUsuario = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var usuario = JSON.parse(localStorage['usuario-informacoes']);
            _super.prototype.get.call(_this, { 'id': usuario.user_id }, _this.user_url.concat(usuario.user_id)).subscribe(function (response) {
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
    UsuarioService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http, HttpUtilService])
    ], UsuarioService);
    return UsuarioService;
}(HttpUtilService));
export { UsuarioService };
//# sourceMappingURL=usuario.service.js.map