import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
//import * as OaiPmh from 'oai-pmh'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http, router) {
        this._http = _http;
        this.router = router;
        this._Url = 'https://sistemas.uft.edu.br/periodicos/index.php/observatorio/oai?verb=Identify';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logOut = function () {
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Http, Router])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map