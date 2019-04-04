import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpUtilService } from './http-util-service'
import { StorageDadosService } from './ferramentas-auxiliares/storage-dados.service';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends HttpUtilService {

  private user_url = 'api/contas/users/'

  constructor(public http: Http, private httpUtil: HttpUtilService) {
    super(http)
  }

  public carregarListaCompletaUsuarios(){
    return new Promise((resolve,reject)=>{
      super.get({},this.user_url).subscribe((response)=>{
        localStorage.setItem('usuarios',JSON.stringify(response))
        resolve(response)
      },(error)=>{
        console.log("Error: " + error)
        reject(error)
      })
    })
  }

  public carregarDadosUsuario(){
    var usuario = JSON.parse(localStorage['usuario-informacoes'])
    super.get({'id':usuario.user_id},this.user_url.concat(usuario.user_id)).subscribe((response)=>{

      localStorage.setItem('usuario',JSON.stringify(response))
      console.log({user_after_:response})
    },(error)=>{
      console.log(error)
    })
  }

  public getDadosUsuario(){
    return JSON.parse(localStorage.getItem('usuario'))
  }

  public verificarSeUsuarioPertenceGrupo(group_id){
    var user = this.getDadosUsuario()
    console.log({user:user})
    if(user['groups'].size <= 0){return false}
    
    var resultado = false
    user['groups'].forEach(element => {
      if(element == group_id){resultado=true}  
    })
    console.log("retorna verificacao")
    return resultado
  
  }
}
