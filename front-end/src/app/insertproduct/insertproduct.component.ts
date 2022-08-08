import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductmasterComponent } from '../productmaster/productmaster.component';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {

  constructor(private router:Router) { }
  nav(){
    this.router.navigate(['addproduct'])
  }
  ngOnInit(): void {
  }

}
