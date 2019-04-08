import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { CargosService } from '../cargos.service';
import { DepartamentosService } from '../departamentos.service';
import { PerfilService } from '../perfil.service';
var StorageDadosService = /** @class */ (function () {
    function StorageDadosService(perfilService, usuarioService, cargoService, departamentoService) {
        this.perfilService = perfilService;
        this.usuarioService = usuarioService;
        this.cargoService = cargoService;
        this.departamentoService = departamentoService;
    }
    StorageDadosService.prototype.salvarDados = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageDadosService.prototype.carregarDadosNoStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioService.carregarListaCompletaUsuarios()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cargoService.carregarListaCargos()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.departamentoService.carregarListaDepartamentos()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //Usuario
    StorageDadosService.prototype.getListaUsuario = function () {
        return this.usuarioService.carregarListaCompletaUsuarios();
    };
    StorageDadosService.prototype.carregarListaUsuariosNoStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usuarioService.carregarListaCompletaUsuarios().then(function () {
                            return _this.recuperarListaUsuarioNoStorage();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaUsuarioNoStorage = function () {
        return JSON.parse(localStorage.getItem('usuarios'));
    };
    StorageDadosService.prototype.getUsuarioPeloIdNoStorage = function (id) {
        return this.recuperarListaUsuarioNoStorage().find(function (usuario) { return usuario.id == id; });
    };
    //Cargo
    StorageDadosService.prototype.carregarListaCargosNoStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargoService.carregarListaCargos()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.recuperarListaCargosNoStorage()];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaCargosNoStorage = function () {
        return JSON.parse(localStorage['cargos']);
    };
    StorageDadosService.prototype.getCargoPeloIdNoStorage = function (id) {
        return this.recuperarListaCargosNoStorage().find(function (cargo) { return cargo.id == id; });
    };
    //Departamento
    StorageDadosService.prototype.carregarListaDepartamentoNoStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.departamentoService.carregarListaDepartamentos()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.recuperarListaDepartamentosNoStorage()];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaDepartamentosNoStorage = function () {
        return JSON.parse(localStorage['departamentos']);
    };
    StorageDadosService.prototype.getDepartamentoPeloIdNoStorage = function (id) {
        return this.recuperarListaDepartamentosNoStorage().find(function (departamentos) { return departamentos.id == id; });
    };
    //Perfil
    StorageDadosService.prototype.carregarDadosPerfisNoStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.perfilService.carregarListaAtributos()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.perfilService.carregarListaAtributoValores()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.perfilService.carregarListaAtributoDocumentos()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributos = function () {
        return JSON.parse(localStorage['perfil-atributos']);
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributosDocumento = function () {
        return JSON.parse(localStorage['perfil-atributos_documentos']);
    };
    StorageDadosService.prototype.recuperarListaPerfisAtributoValores = function () {
        return JSON.parse(localStorage['perfil-atributos_valores']);
    };
    StorageDadosService.prototype.getPerfilAtributoDocumentosPeloIdNoStorage = function (id, documento_tipo) {
        return this.recuperarListaPerfisAtributosDocumento().find(function (perfil) { return perfil.usuario == id && perfil.tipo == documento_tipo; });
    };
    StorageDadosService.prototype.getPerfilAtributoValoresPeloIdNoStorage = function (id, valor_tipo) {
        return this.recuperarListaPerfisAtributoValores().find(function (perfil) { return perfil.usuario == id && perfil.tipo == valor_tipo; });
    };
    StorageDadosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [PerfilService, UsuarioService, CargosService, DepartamentosService])
    ], StorageDadosService);
    return StorageDadosService;
}());
export { StorageDadosService };
//# sourceMappingURL=storage-dados.service.js.map