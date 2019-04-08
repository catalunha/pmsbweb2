import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service';
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service';
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';
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
        GeradorCsvService.downloadCSV(this.departamento_list, 'admministracao-cargos.csv');
    };
    AdminCargosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorValor(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminCargosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorString(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminCargosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-cargos',
            templateUrl: './admin-cargos.component.html',
            styleUrls: ['./admin-cargos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageDadosService])
    ], AdminCargosComponent);
    return AdminCargosComponent;
}());
export { AdminCargosComponent };
//# sourceMappingURL=admin-cargos.component.js.map