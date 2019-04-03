import { Injectable } from '@angular/core';
import { HttpUtilService } from './http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class CargosService extends HttpUtilService{

  private cargos_url = "api/contas/cargos"

  constructor(public http:Http) {
    super(http) 
  }

  carregarListaCargos(){
    super.carregarheaders()
    super.get({},this.cargos_url).subscribe(
      (response)=>{
        localStorage.setItem('cargos',JSON.stringify(response))
      },(erro)=>{
        console.log(erro)
      }
    )
  }

  getCargoPeloId(id){
    let departamentos = JSON.parse(localStorage['cargos'])
    return departamentos.find((depatamento)=>{return depatamento.id == id})
  }

}

