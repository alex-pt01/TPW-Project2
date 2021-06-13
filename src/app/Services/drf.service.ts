import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../Models/Product";
import {Observable} from "rxjs";
import {Promotion} from "../Models/Promotion";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})


export class DRFService {
  private BASE_URL = 'http://localhost:8000/';
  constructor(private http: HttpClient) {

  }

  //Products
  getProduct(id:number): Observable<Product>{
    const url = this.BASE_URL + 'product/' + id;
    return this.http.get<Product>(url);
  }
  getProducts(): Observable<Product[]>{
    const url = this.BASE_URL +'products';
    return this.http.get<Product[]>(url);
  }
  createProduct(product: Product): Observable<any>{
    const url = this.BASE_URL +'productcre';
    return this.http.post(url, product, httpOptions);
  }
  updateProduct(product: Product): Observable<any>{
    const url = this.BASE_URL +'productup/'+product.id;
    return this.http.put(url, product, httpOptions);
  }
  deleteProduct(product: Product): Observable<any>{
    const url = this.BASE_URL +'productdel/'+product.id;
    return this.http.delete<Product>(url, httpOptions);
  }

  //Promotions
  getPromotions(): Observable<Promotion[]>{
    const url = this.BASE_URL +'promotions';
    return this.http.get<Promotion[]>(url);
  }
  createPromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotioncre';
    return this.http.post(url, promotion, httpOptions);
  }
  updatePromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotionup/'+promotion.id;
    return this.http.put(url, promotion, httpOptions);
  }
  deletePromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotiondel/'+promotion.id;
    return this.http.delete<Product>(url, httpOptions);
  }

}
