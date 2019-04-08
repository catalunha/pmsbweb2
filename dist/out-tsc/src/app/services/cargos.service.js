import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service';
import { Http } from "@angular/http";
var CargosService = /** @class */ (function (_super) {
    tslib_1.__extends(CargosService, _super);
    function CargosService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.cargos_url = "api/contas/cargos";
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
    CargosService.prototype.getCargoPeloId = function (id) {
        var departamentos = JSON.parse(localStorage['cargos']);
        return departamentos.find(function (depatamento) { return depatamento.id == id; });
    };
    CargosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], CargosService);
    return CargosService;
}(HttpUtilService));
export { CargosService };
//# sourceMappingURL=cargos.service.js.map