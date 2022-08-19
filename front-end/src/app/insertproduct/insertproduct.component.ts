import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProductmasterComponent } from '../productmaster/productmaster.component';
import { SelldialogueComponent } from '../components/selldialogue/selldialogue.component';
@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.css']
})
export class InsertproductComponent implements OnInit {
  a:any
  constructor(private router:Router,private dialog:MatDialog,private http:HttpClient) { }
  nav(){
    this.router.navigate(['addproduct'])
  }
  ngOnInit(): void {
      this.http.get("http://localhost:3000/showsellproducts").subscribe((data)=>{
        this.a=data
        console.log(data)
      })
      console.log("here")
  }
  opendia(){
    this.dialog.open(SelldialogueComponent);
  }
}
