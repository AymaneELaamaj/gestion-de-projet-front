import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { AddtacheComponent } from './addtache/addtache.component';
import { ProjetComponent } from './projet/projet.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TacheComponent } from './tache/tache.component';
import { ListTacheComponent } from './list-tache/list-tache.component';
import { AddusertoprojetComponent } from './addusertoprojet/addusertoprojet.component';
import { AddtachetouserComponent } from './addtachetouser/addtachetouser.component';
import { UpdateprojetComponent } from './updateprojet/updateprojet.component';
import { NgChartsModule } from 'ng2-charts';
import { AcceuilComponent } from './acceuil/acceuil.component';
import{ CanvasJSAngularChartsModule}from'@canvasjs/angular-charts';
import { FirstpageComponent } from './firstpage/firstpage.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddprojetComponent,
    AddusersComponent,
    AddtacheComponent,
    ProjetComponent,
    UsersComponent,
    ListUsersComponent,
    TacheComponent,
    ListTacheComponent,
    AddusertoprojetComponent,
    AddtachetouserComponent,
    UpdateprojetComponent,
    AcceuilComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgChartsModule,
    CanvasJSAngularChartsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
