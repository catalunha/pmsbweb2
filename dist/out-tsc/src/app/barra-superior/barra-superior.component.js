import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from "@angular/router";
import { UsuarioService } from '../services/usuario.service';
var BarraSuperiorComponent = /** @class */ (function () {
    function BarraSuperiorComponent(usuarioService, authService, router) {
        this.usuarioService = usuarioService;
        this.authService = authService;
        this.router = router;
    }
    BarraSuperiorComponent.prototype.ngOnInit = function () {
    };
    BarraSuperiorComponent.prototype.logOut = function () {
        this.authService.logof();
        this.router.navigate(['/login']);
    };
    BarraSuperiorComponent.prototype.verificaUsuarioAdmin = function () {
        //console.log("pede verificacao")
        return this.usuarioService.verificarSeUsuarioPertenceGrupo('14');
    };
    BarraSuperiorComponent = tslib_1.__decorate([
        Component({
            selector: 'app-barra-superior',
            templateUrl: './barra-superior.component.html',
            styleUrls: ['./barra-superior.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsuarioService, AuthService, Router])
    ], BarraSuperiorComponent);
    return BarraSuperiorComponent;
}());
export { BarraSuperiorComponent };
//# sourceMappingURL=barra-superior.component.js.map