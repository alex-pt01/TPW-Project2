import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {FormBuilder} from "@angular/forms";
import {DRFService} from "../Services/drf.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products = Array<Product>();
  //productGroup: FormGroup;
  constructor( private formbuilder: FormBuilder,
               private service: DRFService,
               private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getProducts();


  }

  getProducts(): void{
    this.service.getProducts().subscribe((pr: Product[])=>
    {
      this.products = pr;
    })
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
