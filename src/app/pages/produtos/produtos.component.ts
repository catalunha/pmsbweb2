import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../../services/produto.service';
import {__await} from 'tslib';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public produtos: any = []

  constructor(private produtoService: ProdutoService) { }

  async ngOnInit() {
    await this.produtoService.carregarRelatorios().then((produtos) => {
      this.produtos = produtos
      console.log({ produtos: this.produtos });
    });
  }

}
