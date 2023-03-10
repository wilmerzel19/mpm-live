import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { RouterModule } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventosComponent,
    IdiomasComponent,
    HistorialComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot ([
      {path: 'eventos', component:EventosComponent},
      {path: 'home', component:HomeComponent},
      {path: 'Historial', component:HistorialComponent},
      {path: 'menu', component:MenuComponent},





    ]),
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
