import {Component, OnInit} from '@angular/core';
import {DRFService} from "./Services/drf.service";
import {User} from "./Models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TPW-Project2';
  user: User|null=null;

  constructor(private drfService: DRFService) {

  }
  logout(): void{
    localStorage.clear();
  }

  ngOnInit(): void {
    if(localStorage.getItem('TOKEN'))
    this.drfService.profile().subscribe((user:User)=>{
      this.user=user;
    })
  }
}
