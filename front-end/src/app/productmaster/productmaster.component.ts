import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogClose,MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css']
})
export class ProductmasterComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

}
