import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { UserListComponent } from './userlist/userlist.component';
import { UserService } from './user-service';
import { BookService } from './book-service'
import { StarterComponent } from './starter/starter.component';
import { BookComponent } from './book/book.component';
import { BooklistComponent } from './booklist/booklist.component';
import { FormulaireMComponent } from './formulaire-m/formulaire-m.component';
import { FormulaireCComponent } from './formulaire-c/formulaire-c.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    UserListComponent,
    StarterComponent,
    BookComponent,
    BooklistComponent,
    FormulaireMComponent,
    FormulaireCComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule.forRoot()

  ],
  providers: [UserService,BookService],
  bootstrap: [AppComponent,LoginComponent,RegisterComponent,AccountComponent,UserListComponent,StarterComponent]
})
export class AppModule { }
