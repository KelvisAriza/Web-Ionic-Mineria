import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './compontentes/menu/menu.component';
import { FooterComponent } from './compontentes/footer/footer.component';
import { HeaderComponent } from './compontentes/header/header.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AnalisisdedatosComponent } from './paginas/analisisdedatos/analisisdedatos.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { LoginComponent } from './paginas/login/login.component';
import { UsuarioComponent } from './paginas/usuario/usuario.component';
import { HomeComponent } from './compontentes/home/home.component';
import { AnalisisComponent } from './compontentes/analisis/analisis.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    InicioComponent,
    AnalisisdedatosComponent,
    DashboardComponent,
    LoginComponent,
    UsuarioComponent,
    HomeComponent,
    AnalisisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
