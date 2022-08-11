import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
// import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-selldialogue',
  templateUrl: './selldialogue.component.html',
  styleUrls: ['./selldialogue.component.css']
})
export class SelldialogueComponent {
  datasource:any=[]
  selectedDay: string = '';
  constructor(private http:HttpClient) { }
  public datafeilds:Object={text:'name',value:'Id'}
  public localData:Object[]=[
    {
      Id:1 , name:"Santhosh"
    }
  ]
  ngOnInit(): void {
    this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      this.elementdata=data
      this.datasource=data
      console.log(this.datasource)
    })
  }
  elementdata:any=[]
  selectedName:String=""
  name:String=""
  a:any={productname:"productname"}
  sell(f:any,pid:any,pname:any,kg:any){
    var pid=pid.value
    var kg=kg.value
    var pname=pname.value
    console.log(pname+":"+kg)
    this.http.post("http://localhost:3000/sellproduct",{pname,kg}).subscribe((res)=>{
      window.alert("Added")
    })
  }
  

selectChangeHandler (event: any) {
  this.selectedDay = event.target.value;
}
  // this.http.post("http://localhost:3000/check",{pname}).subscribe((res)=>{
  //   console.log(res)
  //   this.a=res
  // })
}
