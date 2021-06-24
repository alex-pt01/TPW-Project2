import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SearchComponent} from "./search/search.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";



const routes: Routes = [
  {path: 'shop', component: SearchComponent},
  {path: 'account', component: ProfileComponent},
  {path: 'details/:id', component: ProductDetailsComponent},
  {path: 'login/', component: ProductDetailsComponent},
  {path: 'details/:id', component: ProductDetailsComponent},


];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
