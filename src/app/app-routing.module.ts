import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModificaComponent } from './modifica/modifica.component';
import { EntratoGuard } from './entrato.guard';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'modifica', component: ModificaComponent, 
    canActivate: [EntratoGuard]},
  { path: 'calendario', component: CalendarioComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
