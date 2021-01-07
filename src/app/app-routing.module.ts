import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component"
import { RegisterComponent } from "../app/register/register.component"
import { AccountComponent } from './account/account.component';
import { UserListComponent } from './userlist/userlist.component';
import { StarterComponent } from './starter/starter.component';
import { FormulaireCComponent } from './formulaire-c/formulaire-c.component';
import { FormulaireMComponent } from './formulaire-m/formulaire-m.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';

const routes: Routes = [
  {path:'', redirectTo:'Login', pathMatch:'full'},
  {path:'Login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
  {path:'Account', component: AccountComponent},
  {path:'Userlist',component : UserListComponent},
  {path:'Starter',component : StarterComponent},
  {path:'Formulaire.c',component : FormulaireCComponent},
  {path:'Formulaire.m',component : FormulaireMComponent},
  {path:'Book',component : BookComponent},
  {path:'Booklist',component : BooklistComponent}
  //,{path:'**',component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
