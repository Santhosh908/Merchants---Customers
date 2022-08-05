import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialogproduct',
  templateUrl: './dialogproduct.component.html',
  styleUrls: ['./dialogproduct.component.css']
})
export class DialogproductComponent implements OnInit {

  constructor(private dialog:Dialog,private http:HttpClient) { }
  submit(data1:any,data2:any){
    this.dialog.closeAll()
    console.log(data1.value,data2.value)
    var a=data1.value
    var b=data2.value
    this.http.post("http://localhost:3000/addproducts",{a,b}).subscribe((res)=>{
        console.log(res)
   }
  )
  }
  ngOnInit(): void {
  }

}
