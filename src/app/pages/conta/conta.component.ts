import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service'
import { StorageDadosService } from '../../services/ferramentas-auxiliares/storage-dados.service'


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  usuario_id
  usuario
  loading = true
  constructor(private storageService: StorageDadosService, private route: ActivatedRoute,
    private router: Router, private usuarioService: UsuarioService) {
  }

  async ngOnInit() {
    this.usuario_id = (this.route.snapshot.paramMap.get('id'))
    if (!this.usuario_id) {
      this.iniciaPagina('usuario')
      this.carregarDadosCargoDepartamentoUsuario()
    } else {
      this.iniciaPagina('usuario-aux')
    }
    this.loading = false
  }

  iniciaPagina(id) {
    this.usuario = JSON.parse(localStorage[id])
  }

  async carregarDadosCargoDepartamentoUsuario() {
    await this.storageService.carregarUsuarioPeloId(this.usuario.superior).then((superior:any) => {
      this.usuario['superior'] = superior.first_name
    })
    await this.storageService.carregarDepartamentoPeloId(this.usuario.departamento).then((departamento:any) => {
      this.usuario['departamento'] = departamento.nome
    })
    await this.storageService.carregarCargoPeloId(this.usuario.cargo).then((cargo:any) => {
      this.usuario['cargo'] = cargo.nome
    })
  }

}
