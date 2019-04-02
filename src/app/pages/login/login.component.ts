import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth-service"
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public formBuilder: FormBuilder = new FormBuilder()

  public validations_form = this.formBuilder.group({
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('.{10,11}[0-9]+$'),
      Validators.maxLength(11)
    ]))
  });

  public alerta_erro: any = {
    valid: false,
    messagePrimary: "",
    messageSecondary: "",
  };

  constructor(private router: Router, private authService: AuthService, fb: FormBuilder) {
    localStorage.clear()
  }

  ngOnInit() {

  }

  verifyFormValidationIsValid() {
    if (this.validations_form.get('username').invalid) {
      this.showErrorMessage("Preencha o campo de CPF corretamente !", " o campo deve conter 11 digitos.");
      return false
    }
    if (this.validations_form.get('password').invalid) {
      this.showErrorMessage("Preencha o campo de senha corretamente !", "");
      return false
    }

    return true
  }

  public logar(username, password) {
    this.alertCleanner()
    if (!this.verifyFormValidationIsValid()) { return }

    this.authService.login(username, password).subscribe(
        resposta => {
          this.carregarDadosUsuario(username, password)
          localStorage.setItem("token", resposta['token'])
        },
        error => {
          this.showErrorMessage("Falha no login !", " Verifique Usuário e Senha");
          console.error(error);
        }
      )
  }

  private carregarDadosUsuario(username, password){
    this.authService.pegarInformacoesUsuario(username, password).subscribe(
      resposta => {
      var userdata = this.authService.parseJwt(resposta['token'])
      localStorage.setItem("usuario-informacoes", JSON.stringify(userdata))
      this.router.navigate(['/home'])
      
    },
    error => {
      this.showErrorMessage("Falha no login !", " Verifique Usuário e Senha");
      console.error(error);
    }
  )
  }



  public alertCleanner() {
    this.alerta_erro.message = ""
    this.alerta_erro.valid = false
  }

  public showErrorMessage(messagePrimary, messageSecondary) {
    this.alerta_erro.messageSecondary = messageSecondary
    this.alerta_erro.messagePrimary = messagePrimary
    this.alerta_erro.valid = true
  }


}
