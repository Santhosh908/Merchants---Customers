import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BformComponent } from './components/bform/bform.component';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomefooterComponent } from './components/homefooter/homefooter.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {  HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { ProductmasterComponent } from './productmaster/productmaster.component';
import {MatDialogModule,MatDialogContent, MatDialogClose} from '@angular/material/dialog';
import { DialogproductComponent } from './dialogproduct/dialogproduct.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BformComponent,
    HomeComponent,
    HomeheaderComponent,
    HomefooterComponent,
    SignupComponent,
    ProductmasterComponent,
    DialogproductComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    DragDropModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
