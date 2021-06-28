import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {DRFService} from "../Services/drf.service";
import {Product} from "../Models/Product";
import {User} from "../Models/User";
import {Router, RouterModule} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= new FormControl('');
  password= new FormControl('');




  constructor(private drf: DRFService, fb: FormBuilder, private router: Router) {

  }


  ngOnInit(): void {
  }

  login(): void{
    if (this.username.value && this.password.value){
      this.drf.login(this.username.value, this.password.value).subscribe((u: User)=> {
        this.drf.user = u;
        localStorage.setItem('TOKEN', u.token)
        alert(u.token)
        this.router.navigate(['/shop']);
      });
    }



  }

}
