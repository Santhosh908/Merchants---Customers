import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogClose,MatDialogContent } from '@angular/material/dialog';
import { DialogproductComponent } from '../dialogproduct/dialogproduct.component';
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  popup(){
    this.dialog.open(DialogproductComponent)
  }
  ngOnInit(): void {
  }

}
