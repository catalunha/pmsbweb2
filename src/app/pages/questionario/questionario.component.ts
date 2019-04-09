import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit{

  public setores: any = []

  constructor(private questionarioService: QuestionarioService) { }

  ngOnInit() {
    this.questionarioService.carregarSetoresCensitarios().then((setores)=>{
      this.setores = setores
    })
  }

}
