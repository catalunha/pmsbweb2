import { Injectable } from '@angular/core';
import { HttpUtilService } from '../services/http-util-service'
import { Http } from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService extends HttpUtilService {

  private questionario_url = "api/questionarios/"

  constructor(public http: Http) {
    super(http)
  }

  public carregarSetoresCensitarios(){
    return new Promise((resolve,reject)=>{
      super.get({},this.questionario_url.concat('setores_censitarios/')).subscribe((response)=>{
        resolve(response)
      },(error)=>{
        reject(error)
        console.log(error)
      })
    })
  }

  public carregarQuestionario(){
    return new Promise((resolve,reject)=>{
      super.get({},this.questionario_url.concat('questionarios/')).subscribe((response)=>{
        resolve(response)
      },(error)=>{
        reject(error)
        console.log(error)
      })
    })
  }

  public carregarRespostas(){
    return new Promise((resolve,reject)=>{
      super.get({},this.questionario_url.concat('respostas/')).subscribe((response)=>{
        resolve(response)
      },(error)=>{
        reject(error)
        console.log(error)
      })
    })
  }
}
