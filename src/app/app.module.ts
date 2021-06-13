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
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [DRFService],
  bootstrap: [AppComponent]
})
export class AppModule { }
