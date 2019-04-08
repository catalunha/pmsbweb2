import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageDadosService } from '../../services/ferramentas-auxiliares/storage-dados.service';
import { Router, ActivatedRoute } from '@angular/router';
var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(route, router, storageService) {
        this.route = route;
        this.router = router;
        this.storageService = storageService;
        this.perfilLista = [];
        this.usuario_id = null;
        this.perfil_individual = false;
        this.usuario_id = (this.route.snapshot.paramMap.get('id'));
        //this.usuario_id = JSON.parse(localStorage['usuario']).id
    }
    PerfilComponent.prototype.ngOnInit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!this.usuario_id) {
                    this.perfil_individual = true;
                    this.usuario_id = JSON.parse(localStorage['usuario']).id;
                }
                else {
                }
                this.iniciarPagina();
                return [2 /*return*/];
            });
        });
    };
    PerfilComponent.prototype.iniciarPagina = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.carregarDadosPerfisNoStorage()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregarListaPerfisNaPagina()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilComponent.prototype.carregarListaPerfisNaPagina = function () {
        var _this = this;
        var perfis_lista = this.storageService.recuperarListaPerfisAtributos();
        perfis_lista.forEach(function (perf) {
            _this.perfilLista.push({
                valor: _this.carregarValor(perf),
                nome: perf.nome,
                valor_tipo: _this.verificaTipoAtributo(perf),
            });
        });
    };
    PerfilComponent.prototype.verificaTipoAtributo = function (perfil) {
        if (perfil['documento']) {
            return 'documento';
        }
        else {
            return 'valor';
        }
    };
    PerfilComponent.prototype.carregarValor = function (perfil) {
        var result = null;
        if (perfil['documento']) {
            result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(this.usuario_id, perfil.id);
            if (result) {
                return result.arquivo;
            }
        }
        else {
            result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(this.usuario_id, perfil.id);
            if (result) {
                return result.valor;
            }
        }
        return result;
    };
    PerfilComponent = tslib_1.__decorate([
        Component({
            selector: 'app-perfil',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router, StorageDadosService])
    ], PerfilComponent);
    return PerfilComponent;
}());
export { PerfilComponent };
//# sourceMappingURL=perfil.component.js.map