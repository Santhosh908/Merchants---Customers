import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductmasterComponent } from './productmaster/productmaster.component';
import { AuthGuard } from './auth.guard';
import { BformComponent } from './components/bform/bform.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes  =[  
   { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:BformComponent},
  { path: 'home', component:HomeComponent,canActivate:[AuthGuard] },
  {path:'signup',component:SignupComponent},
  {path:'addproduct',component:ProductmasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
