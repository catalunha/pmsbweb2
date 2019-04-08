import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service';
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service';
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';
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
        GeradorCsvService.downloadCSV(this.departamento_list, 'admministracao-departamentos.csv');
    };
    AdminDepartamentosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorValor(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminDepartamentosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorString(this.departamento_list, $var).then(function (result) { return _this.departamento_list = result; });
    };
    AdminDepartamentosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-departamentos',
            templateUrl: './admin-departamentos.component.html',
            styleUrls: ['./admin-departamentos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageDadosService])
    ], AdminDepartamentosComponent);
    return AdminDepartamentosComponent;
}());
export { AdminDepartamentosComponent };
//# sourceMappingURL=admin-departamentos.component.js.map