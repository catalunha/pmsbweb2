import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service'
import { Router } from "@angular/router";
import { UsuarioService } from '../services/usuario.service'
@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private  usuarioService:UsuarioService ,private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logof()
    this.router.navigate(['/login'])
  }

  verificaUsuarioAdmin(){
    console.log("pede verificacao")
    return this.usuarioService.verificarSeUsuarioPertenceGrupo('14')
  }

}
