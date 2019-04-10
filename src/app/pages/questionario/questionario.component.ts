import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from '../../services/questionario.service'

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})

export class QuestionarioComponent implements OnInit {

  public setores: any = []
  public questionarios: any = []
  public questionarios_listado
  public respostas: any = []
  public setor
  loading = true

  public quest_page = { areas: true, perguntas: false }


  constructor(private questionarioService: QuestionarioService) { }

  async ngOnInit() {
    await this.questionarioService.carregarSetoresCensitarios().then((setores) => {
      this.setores = setores
      console.log({ setores: this.setores })
    })
    await this.carregarOsDadosQuestionario()
  }

  public carregarOsDadosQuestionario() {
    this.questionarioService.carregarQuestionario().then(questionarios => { this.questionarios = questionarios }).then(() => {
      this.loading = false
    })
    this.questionarioService.carregarRespostas().then(respostas => { this.respostas = respostas })
  }


  carregarPerguntasArea(setor) {
    this.quest_page.areas = false
    this.setor = setor
    this.listarRespostasEmPerguntas()
    console.log({setor:setor})
  }

  public listarRespostasEmPerguntas() {
    this.questionarios_listado = this.questionarios
    this.respostas.forEach(resposta => {
      if (resposta.setor_censitario == this.setor.id) {
        this.referenciarRespostaAQuestionario(resposta)
      }
    });
  }

  public referenciarRespostaAQuestionario(pergunta) {
    this.questionarios.forEach(quest => {
      if (quest.id == pergunta.questionario) {
        if (!quest['respostas']) { quest['respostas'] = [] }
        quest['respostas'].push(pergunta)
        //console.log(quest)
        return
      }
    });
  }

  voltarAListagem(){
    this.questionarios = this.questionarios_listado
    this.quest_page.areas = true
  }

  getTamanhoListaResposTas(respostas){
    if(!respostas){return null}
    return respostas.length
  } 

  questtest(questionario) {
    console.log(questionario)
  }

}
