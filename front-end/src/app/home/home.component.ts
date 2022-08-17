import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertproductComponent } from '../insertproduct/insertproduct.component';
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
    this.route.navigate(['sellproduct'])
  }
  ngOnInit(): void {
  }
}
