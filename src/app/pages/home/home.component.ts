import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
//import * as OaiPmh from 'oai-pmh'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private _Url = 'https://sistemas.uft.edu.br/periodicos/index.php/observatorio/oai?verb=Identify'

  constructor(private _http : Http,  private router: Router) { }

  ngOnInit() {
  }


  logOut(){
    localStorage.removeItem('usuario')
    this.router.navigate(['/login'])
  }


}
