import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var HttpUtilService = /** @class */ (function () {
    function HttpUtilService(http) {
        this.http = http;
        this.api_url = 'http://174.138.119.228/pmsb/';
        this.carregarheaders();
    }
    HttpUtilService.prototype.post = function (requestbody, end) {
        return this.http.post(this.api_url.concat(end), requestbody, { headers: this.headers })
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    HttpUtilService.prototype.get = function (params, end) {
        return this.http.get(this.api_url.concat(end), {
            headers: this.headers,
            search: params
        })
            .map(this.extrairDados)
            .catch(this.processarErros);
    };
    HttpUtilService.prototype.carregarheaders = function () {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        var authToken = localStorage['token'];
        if (authToken) {
            this.headers.append('Authorization', "Token " + authToken);
        }
        var options = new RequestOptions({ headers: this.headers });
        return options;
    };
    HttpUtilService.prototype.extrairDados = function (response) {
        var data = response.json();
        //console.log(data);
        return data || {};
    };
    HttpUtilService.prototype.processarErros = function (erro) {
        if (erro.status === 401) {
            delete localStorage['user'];
            delete localStorage['token'];
            location.reload();
            //this.router.navigate(['/login']);
        }
        return Observable.throw('Erro acessando servidor remoto.');
    };
    HttpUtilService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], HttpUtilService);
    return HttpUtilService;
}());
export { HttpUtilService };
//# sourceMappingURL=http-util-service.js.map