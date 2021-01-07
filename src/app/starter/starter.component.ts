import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  constructor(private router:Router) {}

  goTopage(pageName:String):void{
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit(): void {
  }


}
