import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpUtilService } from './http-util-service'

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

  public carregarUsuarioPeloId(id){
    return new Promise((resolve,reject)=>{
      super.get({},this.user_url.concat(id)).subscribe((response)=>{
        resolve(response)
      },(error)=>{
        reject(error)
      })
    })
  }

  public carregarDadosUsuario(){
    return new Promise((resolve,reject)=>{
      var usuario = JSON.parse(localStorage['usuario-informacoes'])
      super.get({},this.user_url.concat(usuario.user_id)).subscribe((response)=>{
        localStorage.setItem('usuario',JSON.stringify(response))
        resolve(response)
      },(error)=>{
        console.log(error)
        reject(error)
      })
    })

  }

  public getDadosUsuario(){
    return JSON.parse(localStorage.getItem('usuario'))
  }

  public verificarSeUsuarioPertenceGrupo(group_id){
    
    var user = this.getDadosUsuario()

    if(user['groups'].length <= 0){
      return false
    }
    var resultado = false
    user['groups'].forEach(element => {
      if(element == group_id){resultado=true}  
    })
    return resultado  
  }
}
