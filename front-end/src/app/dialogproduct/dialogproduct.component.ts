import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-dialogproduct',
  templateUrl: './dialogproduct.component.html',
  styleUrls: ['./dialogproduct.component.css']
})
export class DialogproductComponent implements OnInit {

  constructor(private dialog:Dialog) { }
  submit(){
    this.dialog.closeAll()
  }
  ngOnInit(): void {
  }

}
