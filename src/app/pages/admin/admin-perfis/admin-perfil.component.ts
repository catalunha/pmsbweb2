import { Component, OnInit } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service'
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service'
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})

export class AdminPerfilComponent implements OnInit {

  loading = true
  public perfil_list
  public user_list
  constructor(private storageService: StorageDadosService) {

  }

  async ngOnInit() {
    await this.storageService.carregarDadosPerfisNoStorage()
    await this.storageService.carregarDadosNoStorage()
    this.user_list = await this.storageService.getListaUsuario()
    this.perfil_list = await this.storageService.recuperarListaPerfisAtributos()
    this.loading = await false
    //await this.processarDadosCSV()
  }

  gerarCSV() {

  }

  async processarDadosCSV() {
    var csv_data = []
    await this.user_list.forEach(user => {
      csv_data = csv_data.concat(this.getUserListaDataPerfil(user))
      //csv_data.push()
    });

    await GeradorCsvService.downloadCSV(csv_data, 'administracao_lista_perfis.csv')
  }

  getUserListaDataPerfil(user) {
    var result = []
    this.perfil_list.forEach((perfil) => {
      var user_group = user['groups'].find(element => element == '15')
      if (!user_group) {
        result.push({
          cpf: user.username,
          nome: user.first_name,
          telefone: user.telefone_celular,
          email: user.email,
          superior: this.getUsuario(user.superior),
          departamento: this.getDepartamento(user.departamento),
          cargo: this.getCargo(user.cargo),
          atributo: perfil.nome,
          valor: this.carregarValor(perfil, user),
          documento:this.carregarDocumento(perfil, user),
          foto: user.foto,
        })
      }
    })
    return result
  }

  verificaTipoAtributo(perfil) {
    if (perfil['documento']) {
      return 'documento'
    } else {
      return 'valor'
    }
  }

  carregarDocumento(perfil, user){
    if(perfil['valor']){ return "É valor"}
    var result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(user.id, perfil.id)
    if (result) { return result.arquivo }
    else { return 'não informou' }
  }

  carregarValor(perfil, user) {
  
    if(perfil['documento']){ return "É documento"}
    var result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(user.id, perfil.id)
    if (result) { return result.valor }
    else { return 'não informou' }

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

}
