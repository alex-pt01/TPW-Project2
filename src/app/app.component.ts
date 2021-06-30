import { Component } from '@angular/core';
import {DRFService} from "./Services/drf.service";
import {User} from "./Models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TPW-Project2';
  constructor(private drfService: DRFService) {

  }
  logout(): void{
    localStorage.clear();
  }
  public slides = [
    { src: "https://image1.com" },
    { src: "https://image2.com" },
    { src: "https://image3.com" },
    { src: "https://image4.com" }
  ];
}
