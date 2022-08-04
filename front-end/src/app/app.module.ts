import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BformComponent } from './components/bform/bform.component';
import { HomeComponent } from './home/home.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomefooterComponent } from './components/homefooter/homefooter.component';
import { ProfileComponent } from './profile/profile.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AuthGuard } from './auth.guard';
import {  HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BformComponent,
    HomeComponent,
    HomeheaderComponent,
    MenuComponent,
    HomefooterComponent,
    ProfileComponent,
    SignupComponent
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
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
