import { Component, OnInit } from '@angular/core';
import { StorageDadosService } from '../../../services/ferramentas-auxiliares/storage-dados.service'
import { GeradorCsvService } from '../../../services/ferramentas-auxiliares/gerador-csv.service'
import { FuncoesAuxiliaresService } from 'src/app/services/ferramentas-auxiliares/funcoes-auxiliares.service';
import { Router} from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.css']
})
export class AdminUsuariosComponent implements OnInit {

  public userlist = []
  loading = true

  constructor(private usuarioService: UsuarioService,private router:Router,private storageService: StorageDadosService) {
    this.storageService.carregarDadosNoStorage().then((resultado)=>{
      this.carregarDadosNoUserList()
    }).then(()=>{
      this.loading = false
    })
  }

  ngOnInit() {}
  carregarDadosNoUserList(){
    this.storageService.carregarDadosNoStorage().then(() => {
      let userlist = this.storageService.recuperarListaUsuarioNoStorage()

    
      userlist.forEach(user => {
        var user_group = user['groups'].find(element => element == '15') 
        
        if(!user_group){
          this.userlist.push({
            id:user.id,
            username: user.username,
            first_name: user.first_name,
            telefone_celular: user.telefone_celular,
            email: user.email,
            superior: this.getUsuario(user.superior),
            departamento: this.getDepartamento(user.departamento),
            cargo: this.getCargo(user.cargo),
            foto: user.foto,
          })
        }
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

  navegarParaPerfilUsuario(usuario){
    localStorage.setItem('usuario-aux',JSON.stringify(usuario))
    this.router.navigate(['/admin/perfil/'+usuario.id])
  
  }

}
