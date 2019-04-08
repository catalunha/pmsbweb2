import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpUtilService } from './http-util-service'
import { resolve, reject } from 'q';


@Injectable()
export class AuthService extends HttpUtilService {


  private login_token_url: string = "api/auth/";

  constructor( public http: Http) {
    super(http)
  }

  public login(username, password) {
    var loginData = {'username':username,'password':password}
    return new Promise((resolve,reject)=>{
      super.post(loginData,this.login_token_url.concat('get-auth-token')).subscribe(
        resposta => {
          //console.log("logar Usuario")
          localStorage.setItem("token", resposta['token'])
          resolve(resposta)
        },
        error => {
          reject({mes:"Falha no login !",submes: " Verifique Usuário e Senha"});
          alert(error);
        }
      )
    })
  }

  public carregarInformacoesUsuario(username, password){
    var loginData = {'username':username,'password':password}
    return new Promise((resolve,reject)=>{
      super.post(loginData,this.login_token_url.concat('jwt/auth-token/')).subscribe(
        resposta => {
          var userdata = this.parseJwt(resposta['token'])
          localStorage.setItem("usuario-informacoes", JSON.stringify(userdata))
          resolve(resposta)
        },
        error => {
          reject({mes:"Falha no login !",submes: " Verifique Usuário e Senha"});
          console.error(error);
        }
      )
    })
  }

  public parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  public logof(){
    delete localStorage['token']
    delete localStorage['usuario']
    delete localStorage['usuario-informacoes']
    localStorage.clear()
  }

}