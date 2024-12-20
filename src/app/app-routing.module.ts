import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AddtacheComponent } from './addtache/addtache.component';
import { ProjetComponent } from './projet/projet.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { TacheComponent } from './tache/tache.component';
import { ListTacheComponent } from './list-tache/list-tache.component';
import { AddtachetouserComponent } from './addtachetouser/addtachetouser.component';
import { AddusertoprojetComponent } from './addusertoprojet/addusertoprojet.component';
import { UpdateprojetComponent } from './updateprojet/updateprojet.component';

const routes: Routes = [{path:"addprojet",component:AddprojetComponent},
  {path:"addusers",component:AddusersComponent},
  {path:"addtache",component:AddtacheComponent},
  {path:"taches",component:ListTacheComponent},
  {path:"addtachetouser",component:AddtachetouserComponent},
  {path:"updatestatus/:id",component:UpdateprojetComponent},

  {path:"addusertoprojet",component:AddusertoprojetComponent},
  {path:"projet",component:ProjetComponent},
  { path: 'users/:id', component: UsersComponent },
  { path: 'tache/:uid', component: TacheComponent },
  { path: 'listusers', component: ListUsersComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
