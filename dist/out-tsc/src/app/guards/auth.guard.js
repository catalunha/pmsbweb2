import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth-service";
import { UsuarioService } from '../services/usuario.service';
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        //let usuario_atual_PMSB = JSON.parse(localStorage.getItem("usuario_atual_PMSB"));
        //console.log(usuario_atual_PMSB)
        if (localStorage.getItem('token')) {
            return true;
        }
        console.log('access denied!');
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router, AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
var AuthGuardAdmin = /** @class */ (function () {
    function AuthGuardAdmin(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    AuthGuardAdmin.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            if (this.usuarioService.verificarSeUsuarioPertenceGrupo('14')) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardAdmin = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router, UsuarioService])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());
export { AuthGuardAdmin };
//# sourceMappingURL=auth.guard.js.map