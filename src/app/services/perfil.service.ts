import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends HttpUtilService {

  private perfil_url = "api/contas/"

  constructor(public http: Http) { 
    super(http)
  }

  private carregarLista(data_id){

    return new Promise((resolve,reject)=>{
      super.get({},this.perfil_url.concat(data_id)).subscribe((response)=>{
        localStorage.setItem('perfil-' + data_id,JSON.stringify(response))
        resolve(response)
      },(error)=>{
        reject(error)
        console.log(error)
      })
    })
  }

  public async carregarListaAtributos(){
   await this.carregarLista('atributos')
  }

  public async carregarListaAtributoDocumentos(){
    await this.carregarLista('atributos_documentos')
  }

  public async carregarListaAtributoValores(){
    await this.carregarLista('atributos_valores')
  }

}
