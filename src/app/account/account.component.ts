import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  opened = false;
  num ;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  goTopage(pageNum:String):void{
    console.log(pageNum)
    this.num=pageNum;
  }

  constructor(private router:Router) {
  //this.router.navigate([`Userlist`]);
   }

  ngOnInit(): void {
  }

}
