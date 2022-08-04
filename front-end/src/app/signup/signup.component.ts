import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }
  url="http://localhost:3000/enroll"
  value:any
  ngOnInit(): void {
  }
  submit(value1:any){
    this.value=value1.value
    if(this.value.username==""){
      window.alert("Username is empty")
    }
    else if(this.value.password=="" ){
      window.alert("Password is empty")
    }
    else if(this.value.password2==""){
      window.alert("Confirm your password")
    }
    else if(this.value.password!=this.value.password2){
      window.alert("Confired password didn't match with typed password \n retype your password")
      value1.reset()
    }
    else{
    this.http.post<any>(this.url,{"name":this.value.username,"pass":this.value.password}).subscribe((res)=>{
      value1.reset()
    })
    this.router.navigate(['login'])
  }
  }
}
