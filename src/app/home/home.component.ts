import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
=======
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
import {User} from "../Models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../Models/Comment";
>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  allProducts = Array<Product>();
  products = Array<Product>();
<<<<<<< HEAD
=======
  user: User|null = null;
  PRODUCTS = Array<Product>();
  commentForm: FormGroup | null = null;
  comments = Array<Comment>();
>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4

  constructor(private service: DRFService) {
  }

  ngOnInit(): void {
    this.getProducts();
<<<<<<< HEAD
=======
    this.createForm();
    this.getComments();


>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4
  }
  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.products = pr;
      for (let i = 0; i < 5; i++) {
<<<<<<< HEAD
          this.allProducts.push(this.products[i])
=======
        this.allProducts.push(this.products[i])
>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4
      }

    })
  }

<<<<<<< HEAD
  addToCart(product: Product): void{
    if (product.id != null) {
      this.service.addToCart(product.id, 1).subscribe(()=>{
        alert("Added 1 " +product.name +" to Cart")
      })
    }
=======
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

  create(): void{

    if (this.commentForm && this.user ){
      alert('----')
      let c = new Comment(null, this.commentForm.controls['userName'].value, this.commentForm.controls['userEmail'].value, this.commentForm.controls['description'].value,this.commentForm.controls['rating'].value,this.commentForm.controls['commentDate'].value,this.commentForm.controls['product'].value)
      this.service.createComment(c).subscribe((_)=>{
        alert('Comment Created')
      });
    }

>>>>>>> 5b8087f4d93d1e49fdadb9ffa314e7f6bb6fc5f4
  }



}
