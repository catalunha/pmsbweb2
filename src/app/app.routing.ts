import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core/src/metadata";

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'
import { AdminPerfilComponent } from './pages/admin/admin-perfil/admin-perfil.component'
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component'
import { AuthGuard, AuthGuardAdmin } from "./guards/auth.guard";
import { from } from 'rxjs';

export const appRoutes: Routes = [
  {
    path: '', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'admin-perfil', component:AdminPerfilComponent,canActivate:[AuthGuardAdmin]
  },
  {
    path: 'em-construcao', component:EmConstrucaoComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },{
    path:'perfil', component: PerfilComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);