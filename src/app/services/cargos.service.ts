import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class CargosService extends HttpUtilService{

  private cargos_url = "api/contas/cargos/"

  constructor(public http:Http) {
    super(http)
    super.carregarheaders()
  }

  carregarListaCargos(){
    return new Promise((resolve,reject)=>{
      super.get({},this.cargos_url).subscribe((response)=>{
        localStorage.setItem('cargos',JSON.stringify(response))
        resolve(response)
      },(error)=>{
        console.log("Error: " + error)
        reject(error)
      })
    })
  }

  carregarCargoPeloId(id){
    return new Promise((resolve,reject)=>{
      super.get({},this.cargos_url.concat(id)).subscribe((response)=>{
        resolve(response)
      },(error)=>{
        reject(error)
      })
    })
  }


}

