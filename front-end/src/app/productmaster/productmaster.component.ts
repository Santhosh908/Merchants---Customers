import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogClose,MatDialogContent } from '@angular/material/dialog';
import { range } from 'rxjs';
import { DialogproductComponent } from '../dialogproduct/dialogproduct.component';
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {

  constructor(private dialog:MatDialog,private http:HttpClient) { }
  popup(){
    this.dialog.open(DialogproductComponent)
  }
  a:any=[]
  b:string[]=[]
  showtable(){
    console.log("HI")
    this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      var key=Object.values(data)
      var l=key.length;        
      for(let i=0;i<l;i++){
        this.b=[]
        this.b.push(key[i].productid)
        this.b.push(key[i].productname)
        this.a.push(this.b)
      }
      console.log(this.a)
      // for(key in data){
        // console.log(JSON.stringify(data)[1]);
      // }
    })
  }
  ngOnInit(): void {
  }

}
