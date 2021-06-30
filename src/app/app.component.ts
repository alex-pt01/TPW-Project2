import {Component, OnInit} from '@angular/core';
import {DRFService} from "./Services/drf.service";
import {User} from "./Models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TPW-Project2';
  user: User|null=null;

  constructor(public drfService: DRFService) {

  }
  logout(): void{
    localStorage.clear();
    this.drfService.user=null;
  }


}
