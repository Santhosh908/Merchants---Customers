import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  addp(){
    this.route.navigate(['addproduct'])
  }
  sellp(){

  }
  ngOnInit(): void {
  }

}
