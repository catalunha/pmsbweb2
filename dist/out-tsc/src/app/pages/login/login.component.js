import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from "../../services/auth-service";
import { UsuarioService } from '../../services/usuario.service';
import { Router } from "@angular/router";
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, usuarioService, authService, fb) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.username = '';
        this.password = '';
        this.formBuilder = new FormBuilder();
        this.validations_form = this.formBuilder.group({
            password: new FormControl('', Validators.required),
            username: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('.{10,11}[0-9]+$'),
                Validators.maxLength(11)
            ]))
        });
        this.alerta_erro = {
            valid: false,
            messagePrimary: "",
            messageSecondary: "",
        };
        localStorage.clear();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.verifyFormValidationIsValid = function () {
        /**
        if (this.validations_form.get('username').invalid) {
          this.showErrorMessage("Preencha o campo de CPF corretamente !", " o campo deve conter 11 digitos.");
          return false
        }
        if (this.validations_form.get('password').invalid) {
          this.showErrorMessage("Preencha o campo de senha corretamente !", "");
          return false
        }*/
        return true;
    };
    LoginComponent.prototype.logar = function (username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alertCleanner();
                        if (!this.verifyFormValidationIsValid()) {
                            return [2 /*return*/];
                        }
                        this.username = username;
                        this.password = password;
                        return [4 /*yield*/, this.logarUsuario()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.carregarDadosUsuario()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.usuarioService.carregarDadosUsuario()
                            //await this.router.navigate(['/home'])
                        ];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.logarUsuario = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.login(this.username, this.password).then(function () {
                            _this.carregarDadosUsuario();
                        }).catch(function (erro) {
                            _this.showErrorMessage(erro.mes, erro.submes);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.carregarDadosUsuario = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.carregarInformacoesUsuario(this.username, this.password).then(function () {
                        }).catch(function (erro) {
                            _this.showErrorMessage(erro.mes, erro.submes);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.alertCleanner = function () {
        this.alerta_erro.message = "";
        this.alerta_erro.valid = false;
    };
    LoginComponent.prototype.showErrorMessage = function (messagePrimary, messageSecondary) {
        this.alerta_erro.messageSecondary = messageSecondary;
        this.alerta_erro.messagePrimary = messagePrimary;
        this.alerta_erro.valid = true;
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, UsuarioService, AuthService, FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map