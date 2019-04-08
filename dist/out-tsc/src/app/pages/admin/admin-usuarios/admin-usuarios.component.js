import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service';
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service';
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';
var AdminUsuariosComponent = /** @class */ (function () {
    function AdminUsuariosComponent(storageService) {
        var _this = this;
        this.storageService = storageService;
        this.userlist = [];
        this.storageService.carregarDadosNoStorage().then(function (resultado) {
            _this.carregarDadosNoUserList();
        });
    }
    AdminUsuariosComponent.prototype.ngOnInit = function () { };
    AdminUsuariosComponent.prototype.carregarDadosNoUserList = function () {
        var _this = this;
        this.storageService.carregarDadosNoStorage().then(function () {
            var userlist = _this.storageService.recuperarListaUsuarioNoStorage();
            userlist.forEach(function (user) {
                _this.userlist.push({
                    username: user.username,
                    first_name: user.first_name,
                    telefone_celular: user.telefone_celular,
                    email: user.email,
                    superior: _this.getUsuario(user.superior),
                    departamento: _this.getDepartamento(user.departamento),
                    cargo: _this.getCargo(user.cargo),
                    foto: user.foto,
                });
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
        GeradorCsvService.downloadCSV(this.userlist, 'admministracao-usuarios.csv');
    };
    AdminUsuariosComponent.prototype.ordenarPorValor = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorValor(this.userlist, $var).then(function (result) { return _this.userlist = result; });
    };
    AdminUsuariosComponent.prototype.ordenarPorString = function ($var) {
        var _this = this;
        FuncoesAuxiliaresService.ordenarListaPorString(this.userlist, $var).then(function (result) { return _this.userlist = result; });
    };
    AdminUsuariosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-usuarios',
            templateUrl: './admin-usuarios.component.html',
            styleUrls: ['./admin-usuarios.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageDadosService])
    ], AdminUsuariosComponent);
    return AdminUsuariosComponent;
}());
export { AdminUsuariosComponent };
//# sourceMappingURL=admin-usuarios.component.js.map