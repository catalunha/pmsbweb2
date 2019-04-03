import { Component, OnInit } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service'
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service'
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  public userlist = []

  constructor(private storageService: StorageDadosService) {
    this.storageService.carregarDadosNoStorage()
  }

  ngOnInit() {
    this.storageService.carregarDadosNoStorage().then(() => {
      let userlist = this.storageService.recuperarListaUsuarioNoStorage()
      userlist.forEach(user => {
        this.userlist.push({
          username: user.username,
          first_name: user.first_name,
          telefone_celular: user.telefone_celular,
          email: user.email,
          superior: this.getUsuario(user.superior),
          departamento: this.getDepartamento(user.departamento),
          cargo: this.getCargo(user.cargo),
          foto: user.foto,
        })
      });
    })
  }

  getDepartamento($id) {
    if ($id == null) { return "  " }
    return this.storageService.getDepartamentoPeloIdNoStorage($id).nome
  }

  getCargo($id) {
    if ($id == null) { return "  " }
    return this.storageService.getCargoPeloIdNoStorage($id).nome
  }

  getUsuario($id) {
    if ($id == null) { return "  " }
    return this.storageService.getUsuarioPeloIdNoStorage($id).first_name
  }

  gerarCSV() {
    GeradorCsvService.downloadCSV(this.userlist, 'admministracao-usuarios.csv')
  }

  ordenarPorValor($var) {
    FuncoesAuxiliaresService.ordenarListaPorValor(this.userlist, $var).then(result => this.userlist = result)
  }

  ordenarPorString($var) {
    FuncoesAuxiliaresService.ordenarListaPorString(this.userlist, $var).then(result => this.userlist = result)
  }

}
