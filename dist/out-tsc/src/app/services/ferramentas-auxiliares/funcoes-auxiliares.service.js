import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var FuncoesAuxiliaresService = /** @class */ (function () {
    function FuncoesAuxiliaresService() {
    }
    FuncoesAuxiliaresService.ordenarListaPorValor = function (list, valor_ordenacao) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var aux;
            return tslib_1.__generator(this, function (_a) {
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var aux;
            return tslib_1.__generator(this, function (_a) {
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
    FuncoesAuxiliaresService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FuncoesAuxiliaresService);
    return FuncoesAuxiliaresService;
}());
export { FuncoesAuxiliaresService };
//# sourceMappingURL=funcoes-auxiliares.service.js.map