import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {DRFService} from "./Services/drf.service";
import { ProductDetailsComponent } from './product-details/product-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatAutocomplete} from "@angular/material/autocomplete";
import { LoginComponent } from './login/login.component';
import {CartService} from "./Services/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
    ProductDetailsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,

  ],
  providers: [DRFService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
