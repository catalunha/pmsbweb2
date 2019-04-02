import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent implements OnInit {

  public userlist

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.carregarDadosUsuario()
    this.usuarioService.carregarListaCompletaUsuarios().subscribe((response)=>{
      this.userlist = response
      console.log(response)
    },(error)=>{
      console.log(error)
    })
  }

}
