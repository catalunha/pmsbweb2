import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "../services/auth-service"
import { UsuarioService } from '../services/usuario.service'
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        //let usuario_atual_PMSB = JSON.parse(localStorage.getItem("usuario_atual_PMSB"));
        //console.log(usuario_atual_PMSB)
        if (localStorage.getItem('token')) { return true; }
        console.log('access denied!')
        this.router.navigate(['/login']);
        return false
    }
}

@Injectable()
export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router, private usuarioService: UsuarioService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (localStorage.getItem('token') ) {
            if( this.usuarioService.verificarSeUsuarioPertenceGrupo('14') ){
                return true
            }
            this.router.navigate(['/home'])
            return false
        }
        this.router.navigate(['/login']);
        return false
    }
}

