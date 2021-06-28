import { Component, OnInit } from '@angular/core';
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {Product} from "../Models/Product";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  constructor(private service: DRFService, private router: Router) {


  }

  ngOnInit(): void {
    if (!localStorage.getItem("TOKEN")){
      this.router.navigate(['/login']);
    }else{
      this.getUser();
    }

  }
  getUser(): void{
    this.service.profile().subscribe((pr: User)=>
    {
      this.user = pr;
    })
  }
}
