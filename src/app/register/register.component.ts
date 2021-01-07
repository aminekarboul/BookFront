import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user-service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm:FormGroup
  users :User[];
  userSubscription: Subscription;


  constructor(private formBuilder: FormBuilder, private router:Router, private userService: UserService) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm=this.formBuilder.group(
      {
        pseudo:['',Validators.required],
        password:['',Validators.required],
        password2:['',Validators.required]
      }
    );
  }
  get pseudo() {return this.userForm.get('pseudo');}
  get password() {return this.userForm.get('password');}
  get password2() {return this.userForm.get('password2');}



  onSubmitForm(){

    console.log(this.userForm.value);
    const formUser = this.userForm.value;

//////////////////////////////////////////////
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
    console.log(this.users);
///////////////////////////////////////////////

      let i =0;
      let login = true;


    if (formUser['password'] != formUser['password2']){
      alert("passwords do not match")
    }else {

      const newUser = new User(formUser['pseudo'],formUser['password']);

      while(login==true && i<this.users.length){
        if (this.users[i].pseudo==newUser.pseudo){
          login=false;
        }else i++;
       }

      if (login==false){
        alert("user already exist");
      }else {
        console.log(newUser.pseudo);
        console.log(newUser.password);
        this.userService.addUser(newUser);
        this.router.navigate([`Account`]);

      }
    }
  }

}
