import { Component, OnInit } from '@angular/core';
import {Product} from "../Models/Product";
import {DRFService} from "../Services/drf.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  products = Array<Product>();


  constructor(private drfservice: DRFService ) { }

  ngOnInit(): void {
    this.getProducts();

  }
  getProducts(): void{
    this.drfservice.getProducts().subscribe((pr: Product[]) =>this.products = pr)
  }


}
