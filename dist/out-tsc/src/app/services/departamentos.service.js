import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service';
import { Http } from "@angular/http";
var DepartamentosService = /** @class */ (function (_super) {
    tslib_1.__extends(DepartamentosService, _super);
    function DepartamentosService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.departamento_url = "api/contas/departamentos/";
        _super.prototype.carregarheaders.call(_this);
        return _this;
    }
    DepartamentosService.prototype.carregarListaDepartamentos = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
    DepartamentosService.prototype.getDepartamentoPeloId = function (id) {
        var departamentos = JSON.parse(localStorage['departamentos']);
        return departamentos.find(function (depatamento) { return depatamento.id == id; });
    };
    DepartamentosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], DepartamentosService);
    return DepartamentosService;
}(HttpUtilService));
export { DepartamentosService };
//# sourceMappingURL=departamentos.service.js.map