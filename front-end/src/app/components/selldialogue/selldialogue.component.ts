import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selldialogue',
  templateUrl: './selldialogue.component.html',
  styleUrls: ['./selldialogue.component.css']
})
export class SelldialogueComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  a:any
check(pid:any){
  console.log(pid)
  this.http.post("http://localhost:3000/check",{pid}).subscribe((res)=>{
    console.log(res)
    this.a=res
  })
}
}
