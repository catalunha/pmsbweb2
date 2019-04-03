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
  }

  async carregarListaDepartamentos(){
    super.carregarheaders()
    await super.get({},this.departamento_url).subscribe(
      (response)=>{
        localStorage.setItem('departamentos',JSON.stringify(response))
      },(erro)=>{
        console.log(erro)
      }
    )
  }

  getDepartamentoPeloId(id){
    let departamentos = JSON.parse(localStorage['departamentos'])
    return departamentos.find((depatamento)=>{return depatamento.id == id})
  }

}
