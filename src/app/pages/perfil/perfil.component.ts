import { Component, OnInit } from '@angular/core';
import { Perfil, perfilLista } from '../../models/perfil'
import { StorageDadosService } from '../../services/ferramentas-auxiliares/storage-dados.service'
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfilLista = []
  public usuario_id = null
  public perfil_individual = false


  constructor(private route: ActivatedRoute,
    private router: Router, private storageService: StorageDadosService) {
    this.usuario_id = (this.route.snapshot.paramMap.get('id'))
  }

  async ngOnInit() {
    if(!this.usuario_id){
      this.perfil_individual = true
      this.usuario_id = JSON.parse(localStorage['usuario']).id
    }
    this.iniciarPagina()
  }

  async iniciarPagina() {
    await this.storageService.carregarDadosPerfisNoStorage()
    await this.carregarListaPerfisNaPagina()
  }

  carregarListaPerfisNaPagina() {
    var perfis_lista = this.storageService.recuperarListaPerfisAtributos()
    perfis_lista.forEach(perf => {
      this.perfilLista.push({
        valor: this.carregarValor(perf),
        nome: perf.nome,
        valor_tipo: this.verificaTipoAtributo(perf),
      })
    });
  }

  verificaTipoAtributo(perfil) {
    if (perfil['documento']) {
      return 'documento'
    } else {
      return 'valor'
    }
  }
  carregarValor(perfil) {
    var result = null
    if (perfil['documento']) {
      result = this.storageService.getPerfilAtributoDocumentosPeloIdNoStorage(this.usuario_id, perfil.id)
      if (result) { return result.arquivo }
    } else {
      result = this.storageService.getPerfilAtributoValoresPeloIdNoStorage(this.usuario_id, perfil.id)
      if (result) { return result.valor }
    }
    return result
  }

}
