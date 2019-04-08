import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service';
import { Http } from "@angular/http";
var PerfilService = /** @class */ (function (_super) {
    tslib_1.__extends(PerfilService, _super);
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carregarLista('atributos_valores')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], PerfilService);
    return PerfilService;
}(HttpUtilService));
export { PerfilService };
//# sourceMappingURL=perfil.service.js.map