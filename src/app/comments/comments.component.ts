import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../Models/User";
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {Comment} from "../Models/Comment";
import {Promotion} from "../Models/Promotion";
import {Product} from "../Models/Product";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = Array<Comment>();
  commentForm: FormGroup | null = null;
  user: User|null = null;
  updateForm: FormGroup | null = null;
  PRODUCTS = Array<Product>();


  constructor(private formbuilder: FormBuilder,
              private service: DRFService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getComments();
    this.createForm();
  }

  getComments(): void{
    this.service.getAllComments().subscribe((c: Comment[])=>
    {
      this.comments = c;
    })
  }

  createForm(): void{
    this.service.profile().subscribe((pr: User)=> {
      this.user=pr;
      this.service.getProducts().subscribe((products: Product[])=>{
      this.PRODUCTS = products;
      this.commentForm = new FormGroup({
        userName: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        userEmail: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        rating: new FormControl('', [
          Validators.required,
          Validators.min(1),
          Validators.max(5)]),
        commentDate: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        product:new FormControl('', [
        ]),
      });
    });
    });
  }



  deleteComment(commentID: number | null): void {
    confirm('Are You Sure Yow Want To Delete This Comment?')
    if (commentID)
      this.service.deleteComment(commentID).subscribe((_)=>{
        window.location.reload()
      })

  }


}
