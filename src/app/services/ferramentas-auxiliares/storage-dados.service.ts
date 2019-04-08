import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario.service'
import { CargosService } from '../cargos.service'
import { DepartamentosService } from '../departamentos.service'
import { PerfilService } from '../perfil.service'

@Injectable({
  providedIn: 'root'
})
export class StorageDadosService {

  constructor(private perfilService:PerfilService,private usuarioService: UsuarioService, private cargoService:CargosService, private departamentoService:DepartamentosService) { }

  public salvarDados(key, value){
    localStorage.setItem(key,JSON.stringify(value))
  }

  public async carregarDadosNoStorage(){
    await this.usuarioService.carregarListaCompletaUsuarios()
    await this.cargoService.carregarListaCargos()
    await this.departamentoService.carregarListaDepartamentos()
  }

  //Usuario
  public getListaUsuario(){
    return this.usuarioService.carregarListaCompletaUsuarios()
  }

  public async carregarListaUsuariosNoStorage(){
    await this.usuarioService.carregarListaCompletaUsuarios().then(()=>{
      return this.recuperarListaUsuarioNoStorage()
    })
  }

  public recuperarListaUsuarioNoStorage(){
    return JSON.parse(localStorage.getItem('usuarios'))
  }
  
  public getUsuarioPeloIdNoStorage(id){
    return this.recuperarListaUsuarioNoStorage().find((usuario)=>{return usuario.id == id})
  }

  public carregarUsuarioPeloId(id){
    return this.usuarioService.carregarUsuarioPeloId(id)
  }

  //Cargo
  public async carregarListaCargosNoStorage(){
    await this.cargoService.carregarListaCargos()
    return this.recuperarListaCargosNoStorage()
  }

  public recuperarListaCargosNoStorage(){
    return JSON.parse(localStorage['cargos'])
  }
  
  public getCargoPeloIdNoStorage(id){
    return this.recuperarListaCargosNoStorage().find((cargo)=>{return cargo.id == id})
  }

  public carregarCargoPeloId(id){
    return this.cargoService.carregarCargoPeloId(id)
  }


  //Departamento

  public async carregarListaDepartamentoNoStorage(){
    await this.departamentoService.carregarListaDepartamentos()
    return this.recuperarListaDepartamentosNoStorage()
  }

  public recuperarListaDepartamentosNoStorage(){
    return JSON.parse(localStorage['departamentos'])
  }
  
  public getDepartamentoPeloIdNoStorage(id){
    return this.recuperarListaDepartamentosNoStorage().find((departamentos)=>{return departamentos.id == id})
  }

  public carregarDepartamentoPeloId(id){
    return this.departamentoService.carregarDepartamentoPeloId(id)
  }

  //Perfil

  public async carregarDadosPerfisNoStorage(){
    await this.perfilService.carregarListaAtributos()
    await this.perfilService.carregarListaAtributoValores()
    await this.perfilService.carregarListaAtributoDocumentos()
  }

  public recuperarListaPerfisAtributos(){
    return JSON.parse(localStorage['perfil-atributos'])
  }

  public recuperarListaPerfisAtributosDocumento(){
    return JSON.parse(localStorage['perfil-atributos_documentos'])
  }

  public recuperarListaPerfisAtributoValores(){
    return JSON.parse(localStorage['perfil-atributos_valores'])
  }

  public getPerfilAtributoDocumentosPeloIdNoStorage(id, documento_tipo){
    return this.recuperarListaPerfisAtributosDocumento().find((perfil)=>{return perfil.usuario == id && perfil.tipo == documento_tipo})
  }

  public getPerfilAtributoValoresPeloIdNoStorage(id, valor_tipo){
    return this.recuperarListaPerfisAtributoValores().find((perfil)=>{return perfil.usuario == id && perfil.tipo == valor_tipo})
  }

}
