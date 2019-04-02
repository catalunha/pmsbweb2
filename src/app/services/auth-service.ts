import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { HttpUtilService } from './http-util-service'


@Injectable()
export class AuthService extends HttpUtilService {


  private login_token_url: string = "api/auth/";
  private
  constructor( public http: Http) {
    super(http)
  }

  public login(username, password): Observable<any> {
    var loginData = {'username':username,'password':password}
    return super.post(loginData,this.login_token_url.concat('get-auth-token'))
  }

  public pegarInformacoesUsuario(username, password){
  
    var loginData = {'username':username,'password':password}
    return super.post(loginData,this.login_token_url.concat('jwt/auth-token/'))
  
  }

  public parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  };

  public logof(){
    localStorage.clear()
    location.reload();
  }

}