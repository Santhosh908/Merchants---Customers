


// import {Component} from '@angular/core';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// /**
//  * @title Basic use of `<table mat-table>`
//  */
// @Component({
//   selector: 'app-productmaster',
//   templateUrl: './productmaster.component.html',
//   styleUrls: ['./productmaster.component.css']
// })
// export class  ProductmasterComponent {
//   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//   dataSource = ELEMENT_DATA;
// }





import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogClose,MatDialogContent } from '@angular/material/dialog';
import { range } from 'rxjs';
import { DialogproductComponent } from '../dialogproduct/dialogproduct.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})

export class ProductmasterComponent implements OnInit {
  a:any=[];
  b:any=[];
  constructor(private dialog:MatDialog,private http:HttpClient) { }
  popup(){
    this.dialog.open(DialogproductComponent)
  }
  displayedColumns: string[] = ['pid', 'pname']
  showtable(){
    console.log(ELEMENT_DATA,"hi")
    this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      var key=Object.values(data)
      var l=key.length;
      console.log(this.a)      
      for(let i=0;i<l;i++){
        this.a.push({position:i+1,pid:key[i].productid,pname:key[i].productname})
      }
      console.log(this.a[0])
      // var key=Object.values(data)
      // var l=key.length;
      // for(let i=0;i<l;i++){
      //   console.log(key[i])
      // }
      // this.a=key
      // console.log(this.a)
    })
  }

 init(){
  console.log(ELEMENT_DATA,"hi")
    this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      var key=Object.values(data)
      var l=key.length;
      console.log(this.a)      
      for(let i=0;i<l;i++){
        this.a.push({position:i+1,pid:key[i].productid,pname:key[i].productname})
      }
      console.log(this.a[0])
})
}
ngOnInit(): void {
}
// and fire it after definition
}
