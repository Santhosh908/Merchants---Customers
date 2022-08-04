import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { BformComponent } from '../bform/bform.component';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  constructor(private router:Router) {
  }
  
  menu(){
    this.router.navigate(['menu'])

   }
   profile(){
    this.router.navigate(['profile'])
   }
   logout(){
    localStorage.removeItem('loggedin')
    this.router.navigate(['login'])
   }
   home(){
    this.router.navigate(['home'])
  }
  ngOnInit(): void {
  }

}
