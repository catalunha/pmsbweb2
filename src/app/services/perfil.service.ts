import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends HttpUtilService {

  private perfil_url = "/api/contas/"

  constructor(public http: Http) { 
    super(http)
  }

  public async carregarListaAtributos(){
    await super.get({},this.perfil_url.concat('atributos')).subscribe((response)=>{
      localStorage.setItem('atributos',JSON.stringify(response))
    },(error)=>{
      console.log(error)
    })
  }
}
