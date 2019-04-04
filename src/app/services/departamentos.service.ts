import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService extends HttpUtilService {

  private departamento_url = "api/contas/departamentos/"

  constructor(public http:Http) {
    super(http)
    super.carregarheaders() 
  }

  async carregarListaDepartamentos(){
    return new Promise((resolve,reject)=>{
      super.get({},this.departamento_url).subscribe((response)=>{
        localStorage.setItem('departamentos',JSON.stringify(response))
        resolve(response)
      },(error)=>{
        console.log("Error: " + error)
        reject(error)
      })
    })
  }

  getDepartamentoPeloId(id){
    let departamentos = JSON.parse(localStorage['departamentos'])
    return departamentos.find((depatamento)=>{return depatamento.id == id})
  }

}
