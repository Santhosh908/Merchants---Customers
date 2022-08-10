import { HttpClient } from '@angular/common/http';
import { Component, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-selldialogue',
  templateUrl: './selldialogue.component.html',
  styleUrls: ['./selldialogue.component.css']
})
export class SelldialogueComponent {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  elementdata:any=[]
  a:any={productname:"productname"}
  sell(pid:any,kg:any){
    var pid=pid.value
    var kg=kg.value
    var pname=this.a
    this.http.post("http://localhost:3000/sellproduct",{pid,pname,kg}).subscribe((res)=>{
      window.alert("Added")
    })
  }
check(pid:any){
  console.log(pid)
  this.http.post("http://localhost:3000/check",{pid}).subscribe((res)=>{
    console.log(res)
    this.a=res
  })
}
  dropdownload(){
    this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      this.elementdata=data
      console.log(data)
    })
  }
}
