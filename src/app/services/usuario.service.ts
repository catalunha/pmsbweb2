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

  public carregarListaCompletaUsuarios(): Observable<any>{
    return super.get({},this.user_url)
  }

  public carregarDadosUsuario(){
    var usuario = JSON.parse(localStorage['usuario-informacoes'])
    super.get({'id':usuario.user_id},this.user_url.concat(usuario.user_id)).subscribe((response)=>{
      localStorage.setItem('usuario',JSON.stringify(response))
    },(error)=>{
      console.log(error)
    })
  }

}
