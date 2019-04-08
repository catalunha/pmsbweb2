import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service';
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service';
var AdminPerfilComponent = /** @class */ (function () {
    function AdminPerfilComponent(storageService) {
        this.storageService = storageService;
    }
    AdminPerfilComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.storageService.carregarDadosPerfisNoStorage()];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, this.storageService.carregarDadosNoStorage()];
                    case 2:
                        _c.sent();
                        _a = this;
                        return [4 /*yield*/, this.storageService.getListaUsuario()];
                    case 3:
                        _a.user_list = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.storageService.recuperarListaPerfisAtributos()];
                    case 4:
                        _b.perfil_list = _c.sent();
                        return [4 /*yield*/, this.processarDadosCSV()];
                    case 5:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminPerfilComponent.prototype.gerarCSV = function () {
    };
    AdminPerfilComponent.prototype.processarDadosCSV = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var csv_data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        csv_data = [];
                        return [4 /*yield*/, this.user_list.forEach(function (user) {
                                csv_data = csv_data.concat(_this.getUserListaDataPerfil(user));
                                console.log(_this.getUserListaDataPerfil(user));
                                //csv_data.push()
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, GeradorCsvService.downloadCSV(csv_data, 'administracao_lista_perfis.csv')];
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
            result.push({
                username: user.username,
                first_name: user.first_name,
                atributo: perfil.nome,
                valor: _this.carregarValor(perfil, user)
            });
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
    AdminPerfilComponent.prototype.carregarValor = function (perfil, user) {
        var result = null;
        if (perfil['documento']) {
            result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(user.id, perfil.id);
            if (result) {
                return result.arquivo;
            }
        }
        else {
            result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(user.id, perfil.id);
            if (result) {
                return result.valor;
            }
        }
        return result;
    };
    AdminPerfilComponent = tslib_1.__decorate([
        Component({
            selector: 'app-admin-perfil',
            templateUrl: './admin-perfil.component.html',
            styleUrls: ['./admin-perfil.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageDadosService])
    ], AdminPerfilComponent);
    return AdminPerfilComponent;
}());
export { AdminPerfilComponent };
//# sourceMappingURL=admin-perfil.component.js.map