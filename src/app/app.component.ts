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
<<<<<<< HEAD
  public slides = [
    { src: "https://image1.com" },
    { src: "https://image2.com" },
    { src: "https://image3.com" },
    { src: "https://image4.com" }
  ];
=======


>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4
}
