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
      console.log(data)
      this.datasource=data
      console.log(this.datasource)
    })
  }
  elementdata:any=[]
  selectedName:String=""
  name:String=""
  a:any={productname:"productname"}
  sell(pid:any,pname:any,kg:any){
    var pid=pid.value
    var kg=kg.value
    console.log(pname.value+pid)
    // this.http.post("http://localhost:3000/sellproduct",{pid,pname,kg}).subscribe((res)=>{
    //   window.alert("Added")
    // })
  }
check(pname:any){
  console.log(pname)
  switch(pname){
    case 1:{
      console.log(1)
      break
    }
    default:
      console.log(2)

  }
}
  onSelectName(obj:any): void {
    this.selectedName = obj.name;        
 
    this.name = obj.name;                
    console.log(obj+"test");                 
   }
  // this.http.post("http://localhost:3000/check",{pname}).subscribe((res)=>{
  //   console.log(res)
  //   this.a=res
  // })
}
