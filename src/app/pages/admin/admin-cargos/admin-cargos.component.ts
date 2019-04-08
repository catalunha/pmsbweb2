import { Component, OnInit } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service'
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service'
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';

@Component({
  selector: 'app-admin-cargos',
  templateUrl: './admin-cargos.component.html',
  styleUrls: ['./admin-cargos.component.css']
})
export class AdminCargosComponent implements OnInit {

  public departamento_list = []

  constructor(private storageService: StorageDadosService) {}

  ngOnInit() {
    this.storageService.carregarListaCargosNoStorage().then((result)=>{
      result.forEach(dep => {
        this.departamento_list.push({
          nome:dep.nome,
          descricao:dep.descricao,
        })
      });
    })
  }

  gerarCSV() {
    GeradorCsvService.downloadCSV(this.departamento_list, 'admministracao-cargos.csv')
  }

  ordenarPorValor($var) {
    
    FuncoesAuxiliaresService.ordenarListaPorValor(this.departamento_list, $var).then(result => this.departamento_list = result)
  }

  ordenarPorString($var) {
    FuncoesAuxiliaresService.ordenarListaPorString(this.departamento_list, $var).then(result => this.departamento_list = result)
  }

}
