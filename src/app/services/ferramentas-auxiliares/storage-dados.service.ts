import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario.service'
import { CargosService } from '../cargos.service'
import { DepartamentosService } from '../departamentos.service'

@Injectable({
  providedIn: 'root'
})
export class StorageDadosService {

  constructor(private usuarioService: UsuarioService, private cargoService:CargosService, private departamentoService:DepartamentosService) { }

  //Funcoes auxiliares
  public salvarDados(key, value){
    localStorage.setItem(key,JSON.stringify(value))
  }

  public async carregarDadosNoStorage(){
    this.cargoService.carregarListaCargos()
    this.departamentoService.carregarListaDepartamentos()
    await this.usuarioService.carregarListaCompletaUsuarios()
  }

  //Usuario
  public recuperarListaUsuarioNoStorage(){
    return JSON.parse(localStorage['usuarios'])
  }
  
  public getUsuarioPeloIdNoStorage(id){
    return this.recuperarListaUsuarioNoStorage().find((usuario)=>{return usuario.id == id})
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

}
