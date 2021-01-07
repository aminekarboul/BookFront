import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup
  users :User[];
  userSubscription: Subscription;


  constructor(private formBuilder: FormBuilder,private router:Router,private userService: UserService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.userForm=this.formBuilder.group(
      {
        pseudo:['',Validators.required],
        password:['',Validators.required]
      }
    );
  }
  get pseudo() {return this.userForm.get('pseudo');}
  get password() {return this.userForm.get('password');}

  onSubmitForm(){

    console.log(this.userForm.value);
    const Userlog=this.userForm.value;
    const newUser = new User(Userlog['pseudo'],Userlog['password']);
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.userService.emitUsers();
    console.log(this.users);

      let i =0;
      let login = true;

     while(login==true && i<this.users.length){
      if (this.users[i].pseudo==newUser.pseudo && this.users[i].password==newUser.password){
        this.router.navigate([`Account`]);
        login=false;
      }else i++;
     }
     if (login==true) alert("this user doesnt exist");
  }
}
