import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth-service"
import { UsuarioService } from '../../services/usuario.service'
import { Router } from "@angular/router";
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string = '' 
  public password:string = ''

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

  constructor(private router: Router, private usuarioService: UsuarioService, private authService: AuthService, fb: FormBuilder) {
    localStorage.clear()
  }

  ngOnInit() {
    /** 
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
    console.log("cond");
      e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
      return confirmationMessage;              // Gecko, WebKit, Chrome <34
    });
    */
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

  public async logar(username, password) {
    this.alertCleanner()
    if (!this.verifyFormValidationIsValid()) { return }
    this.username = username
    this.password = password
    await this.logarUsuario()
    await this.carregarDadosUsuario()
    await this.usuarioService.carregarDadosUsuario()
    await this.router.navigate(['/home'])
  }

  private async logarUsuario() {
    await this.authService.login(this.username, this.password).then(()=>{
      //this.carregarDadosUsuario()
    }).catch(erro=>{
      this.showErrorMessage(erro.mes, erro.submes)
    })
  }

  private async carregarDadosUsuario() {
    await this.authService.carregarInformacoesUsuario(this.username, this.password).then((info)=>{
    }).catch(erro=>{
      this.showErrorMessage(erro.mes, erro.submes)
    })
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
