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

  constructor(private router:Router,private dialog:MatDialog) { }
  nav(){
    this.router.navigate(['addproduct'])
  }
  ngOnInit(): void {
  }
  opendia(){
    this.dialog.open(SelldialogueComponent);
  }
}
