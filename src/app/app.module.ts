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

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'
import { AuthService } from './services/auth-service';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component';
import { AdminPerfilComponent } from './pages/admin/admin-perfil/admin-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    BarraSuperiorComponent,
    EmConstrucaoComponent,
    AdminPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
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
