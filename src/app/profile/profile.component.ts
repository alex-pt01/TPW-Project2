import { Component, OnInit } from '@angular/core';
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {User} from "../Models/User";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  constructor(private drfService: DRFService, private router: Router) {
    if (!this.drfService.user){
      this.router.navigate(['/login']);
    }else{
      this.user = this.drfService.user;
    }


  }

  ngOnInit(): void {

  }

}
