import { Injectable } from '@angular/core';
import { HttpUtilService } from '../services/http-util-service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends HttpUtilService {

  // tslint:disable-next-line:variable-name
  private produto_url = 'api/relatorios/'

  constructor(public http: Http) {
    super(http);
  }

  public carregarRelatorios() {
    return new Promise((resolve, reject) => {
      super.get({},this.produto_url.concat('blocos/')).subscribe((response) => {
        // console.log(response);
        resolve(response)
      }, (error) => {
        reject(error)
        console.log(error)
      })
    })
  }

}
