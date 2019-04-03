import { Component, OnInit } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service'
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service'
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';

@Component({
  selector: 'app-admin-departamentos',
  templateUrl: './admin-departamentos.component.html',
  styleUrls: ['./admin-departamentos.component.css']
})
export class AdminDepartamentosComponent implements OnInit {

  private departamento_list = []

  constructor(private storageService: StorageDadosService) { }

  ngOnInit() {
    this.storageService.carregarListaDepartamentoNoStorage().then((result)=>{
      result.forEach(dep => {
        this.departamento_list.push({
          nome:dep.nome,
          descricao:dep.descricao,
          superior:this.getDepartamentoSuperior(dep.superior),
        })
      });
    })
  }

  getDepartamentoSuperior($id){
    if($id == null){return "- "}
    return this.storageService.getDepartamentoPeloIdNoStorage($id).nome
  }

  gerarCSV() {
    GeradorCsvService.downloadCSV(this.departamento_list, 'admministracao-departamentos.csv')
  }

  ordenarPorValor($var) {
    
    FuncoesAuxiliaresService.ordenarListaPorValor(this.departamento_list, $var).then(result => this.departamento_list = result)
  }

  ordenarPorString($var) {
    FuncoesAuxiliaresService.ordenarListaPorString(this.departamento_list, $var).then(result => this.departamento_list = result)
  }

}
