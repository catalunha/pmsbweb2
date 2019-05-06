import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthGuard, AuthGuardAdmin } from './guards/auth.guard';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';

import { HttpUtilService } from './services/http-util-service';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//component temporario
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'
import { AuthService } from './services/auth-service';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { AdminPerfilComponent } from './pages/admin/admin-perfis/admin-perfil.component';
import { AdminUsuariosComponent } from './pages/admin/admin-usuarios/admin-usuarios.component';
import { AdminDepartamentosComponent } from './pages/admin/admin-departamentos/admin-departamentos.component';
import { AdminCargosComponent } from './pages/admin/admin-cargos/admin-cargos.component';
import { ContaComponent } from './pages/conta/conta.component';
import { QuestionarioComponent } from './pages/questionario/questionario.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import {MatListModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { IndicesComponent } from './pages/indices/indices.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    BarraSuperiorComponent,
    EmConstrucaoComponent,
    AdminPerfilComponent,
    AdminUsuariosComponent,
    AdminDepartamentosComponent,
    AdminCargosComponent,
    ContaComponent,
    QuestionarioComponent,
    ProdutosComponent,
    IndicesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatChipsModule,
    MatSelectModule,
    MatListModule,

  ],
  providers: [
    HttpClient, 
    AuthService, 
    AuthGuard,
    AuthGuardAdmin,
    HttpUtilService, 
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
