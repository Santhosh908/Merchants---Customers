import { HomeheaderComponent } from '../components/homeheader/homeheader.component';
import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogproductComponent } from '../dialogproduct/dialogproduct.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class  ProductmasterComponent {
  a:any=[];
  constructor(private dialog:MatDialog,private http:HttpClient) { }
  popup(){
    this.dialog.open(DialogproductComponent)
}
displayedColumns: string[] = ["pid","pname"];
dataSource = ELEMENT_DATA;
ngOnInit(): void {
  this.http.get("http://localhost:3000/showtables").subscribe((data)=>{
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
  })
}

}
export const ELEMENT_DATA: any = [];






