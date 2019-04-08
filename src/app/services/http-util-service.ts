import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpUtilService {

    constructor(public http: Http) { 
        this.carregarheaders()
    }

    private api_url: string = 'http://174.138.119.228/pmsb/';
    private headers: Headers;

    post(requestbody, end): Observable<any> {
        this.carregarheaders()
        return this.http.post(this.api_url.concat(end), requestbody, { headers: this.headers })
            .map(this.extrairDados)
            .catch(this.processarErros);
    }

    get(params, end) {
        this.carregarheaders()
        return this.http.get(this.api_url.concat(end), {
            headers: this.headers,
            search: params
        })
        .map(this.extrairDados)
        .catch(this.processarErros);
    }

    carregarheaders() {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        let authToken = localStorage['token'];
        if (authToken) {
            this.headers.append('Authorization', `Token ${authToken}`);
        }

        let options = new RequestOptions({ headers: this.headers });
        return options;
    }

    extrairDados(response: Response) {
        let data = response.json();
        return data || {};
    }

    processarErros(erro: any) {

        if (erro.status === 401) {
            delete localStorage['user'];
            delete localStorage['token'];
            localStorage.clear()
            //location.reload();
            //this.router.navigate(['/login']);
        }

        return Observable.throw('Erro acessando servidor remoto.');
    }
}