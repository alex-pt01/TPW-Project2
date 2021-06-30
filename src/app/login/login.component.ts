import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DRFService} from "../Services/drf.service";
import {Product} from "../Models/Product";
import {User} from "../Models/User";
import {Router, RouterModule} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | null = null;



  constructor(private drf: DRFService, fb: FormBuilder, private router: Router) {

  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }

  login(): void{
    if (this.loginForm){
      this.drf.login(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value).subscribe((u: User)=> {
        this.drf.user = u;
        localStorage.setItem('TOKEN', u.token)


        this.router.navigate(['/home']);

      });
    }
  }

}
