import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AnalisisdedatosComponent } from './paginas/analisisdedatos/analisisdedatos.component'; 
import { DashboardComponent } from './paginas/dashboard/dashboard.component';  
import { LoginComponent } from './paginas/login/login.component';  
import { UsuarioComponent } from './paginas/usuario/usuario.component'; 


//las rutas de mi pag 
const routes: Routes = [
  {path: 'inicio', component:InicioComponent},
  {path: 'data', component:AnalisisdedatosComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
