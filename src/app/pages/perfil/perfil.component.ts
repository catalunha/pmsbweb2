import { Component, OnInit } from '@angular/core';
import { Perfil, perfilLista } from '../../models/perfil'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public perfilLista
  
  constructor(){ 
    console.log(perfilLista)
  }

  ngOnInit() {
    this.perfilLista = perfilLista
  }

}
