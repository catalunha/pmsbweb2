import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EmConstrucaoComponent } from './pages/em-construcao/em-construcao.component';
import { AuthGuard, AuthGuardAdmin } from "./guards/auth.guard";
import { AdminUsuariosComponent } from './pages/admin/admin-usuarios/admin-usuarios.component';
import { AdminDepartamentosComponent } from './pages/admin/admin-departamentos/admin-departamentos.component';
import { AdminCargosComponent } from './pages/admin/admin-cargos/admin-cargos.component';
import { AdminPerfilComponent } from './pages/admin/admin-perfis/admin-perfil.component';
export var appRoutes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'admin/usuarios', component: AdminUsuariosComponent,
        canActivate: [AuthGuardAdmin] //canActivate:[AuthGuardAdmin]
    },
    {
        path: 'admin/cargos', component: AdminCargosComponent,
        canActivate: [AuthGuardAdmin] //canActivate:[AuthGuardAdmin]
    }, {
        path: 'admin/perfis', component: AdminPerfilComponent,
        canActivate: [AuthGuardAdmin]
    },
    {
        path: 'admin/perfis/:id', component: PerfilComponent,
        canActivate: [AuthGuardAdmin]
    },
    {
        path: 'admin/departamentos', component: AdminDepartamentosComponent,
        canActivate: [AuthGuardAdmin] //canActivate:[AuthGuardAdmin]
    },
    {
        path: 'em-construcao', component: EmConstrucaoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'perfil', component: PerfilComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login', component: LoginComponent
    }
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map