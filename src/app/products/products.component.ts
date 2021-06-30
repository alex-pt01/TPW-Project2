import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {Promotion} from "../Models/Promotion";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products = Array<Product>();
  productForm: FormGroup | null = null;
  user: User|null = null;
  CATEGORY =['Smartphones','Computers','Tablets','Drones', 'Televisions']
  PROMOTIONS = Array<Promotion>();
  //productGroup: FormGroup;
  constructor( private formbuilder: FormBuilder,
               private service: DRFService,
               private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.createForm();


  }

  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.products = pr;
    })
  }
  createForm(): void{
    this.service.profile().subscribe((pr: User)=> {
      this.user=pr;
      this.service.getPromotions().subscribe((promos: Promotion[])=>{
        this.PROMOTIONS = promos;
        this.productForm = new FormGroup({
          name: new FormControl('', [
            Validators.required
          ]),
          price: new FormControl('', [
            Validators.required,
            Validators.min(0)]),
          description: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
          ]),
          quantity: new FormControl('', [
            Validators.required,
            Validators.min(0)
          ]),
          image: new FormControl('', [
            Validators.required,
          ]),
          brand: new FormControl('', [
            Validators.required,
          ]),
          category:new FormControl('', [
            Validators.required,
          ]),
        });
      });

    });

  }

  /*
  addProduct(): void {
    if(this.productGroup ){
      this.service.createProduct(new Product(this.productGroup.value.name)).subscribe(()=>{
        window.location.reload();
      })
  }
  deleteProduct(productID:number): void {
    if(productID){
      this.service.deleteProduct(productID).subscribe((_)=>{
        this.router.navigate(['/products']);
      })
    }
  }
 */





}
