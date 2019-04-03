import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncoesAuxiliaresService {

  constructor() { }

  static async ordenarListaPorValor(list, valor_ordenacao) {
    var aux = await list.sort(function (a, b) {
      return a[valor_ordenacao] - b[valor_ordenacao];
    })
    return aux
  }

  static async ordenarListaPorString(list, valor_ordenacao) {

    var aux = await list.sort(function (a, b) {
      a = a[valor_ordenacao].toLowerCase();
      b = b[valor_ordenacao].toLowerCase();

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else if (a === b) {
        return 0;
      }
    })
    return aux
  }

}
