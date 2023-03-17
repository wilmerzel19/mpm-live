import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenu } from '@angular/material/menu';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



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
import { SubnabarComponent } from './components/subnabar/subnabar.component';
import {SidenavComponent} from  './components/sidenav/sidenav.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EventosComponent,
    IdiomasComponent,
    HistorialComponent,
    MenuComponent,
    SubnabarComponent,

    SidenavComponent,






  ],
  imports: [
    BrowserModule,


    AppRoutingModule,
    RouterModule.forRoot ([
      {path: 'eventos', component:EventosComponent},
      {path: 'home', component:HomeComponent},
      {path: 'Historial', component:HistorialComponent},
      {path: 'menu', component:MenuComponent},

      {path: 'sidenav', component:SidenavComponent},







    ]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,







  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
