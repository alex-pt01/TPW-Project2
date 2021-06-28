import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../Models/Product";
import {Observable} from "rxjs";
import {Promotion} from "../Models/Promotion";
import {Review} from "../Models/Comment";
import {User} from "../Models/User";
import {identifyDynamicQueryNodes} from "@angular/core/schematics/migrations/dynamic-queries/util";

@Injectable({
  providedIn: 'root'
})

export class DRFService {
  private BASE_URL = 'https://pedromarques27.pythonanywhere.com/';
  public user: User | null;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})}
  constructor(private http: HttpClient) {
    this.user = null;
  }

  login(inUser:string, inPass:string): Observable<User>{
    const url = this.BASE_URL + 'login';
    let answer = this.http.post<User>(url, {username: inUser, password:inPass}, this.httpOptions)

    return answer
  }

  profile(): Observable<User>{
    this.getToken()
    const url = this.BASE_URL + 'profile';
    return this.http.get<User>(url, this.httpOptions);
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
    return this.http.post(url, product, this.httpOptions);
  }
  updateProduct(product: Product): Observable<any>{
    const url = this.BASE_URL +'productup/'+product.id;
    return this.http.put(url, product, this.httpOptions);
  }
  deleteProduct(product: Product): Observable<any>{
    const url = this.BASE_URL +'productdel/'+product.id;
    return this.http.delete<Product>(url, this.httpOptions);
  }

  search(filters: Map<String, any>): Observable<Product[]>{
    let f  = {
      query: filters.get("query"),
      price: filters.get("price"),
      category: filters.get("categories"),
      seller: filters.get("sellers"),
      brand: filters.get("brands"),
      condition: filters.get("condition"),
      inStock: filters.get("inStock"),
      inPromotion: filters.get("inPromotion"),
    }
    const url = this.BASE_URL +'search';
    return this.http.post<Product[]>(url, f, this.httpOptions);
  }

  //Promotions
  getPromotions(): Observable<Promotion[]>{
    const url = this.BASE_URL +'promotions';
    return this.http.get<Promotion[]>(url);
  }
  createPromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotioncre';
    return this.http.post(url, promotion, this.httpOptions);
  }
  updatePromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotionup/'+promotion.id;
    return this.http.put(url, promotion, this.httpOptions);
  }
  deletePromotion(promotion: Promotion): Observable<any>{
    const url = this.BASE_URL +'promotiondel/'+promotion.id;
    return this.http.delete<Product>(url, this.httpOptions);
  }

  //Promotions
  getComments(productId: number): Observable<Review[]>{
    const url = this.BASE_URL +'product/'+productId+"/comment/";
    return this.http.get<Review[]>(url);
  }

  addToCart(productId: number, quantityn: number): Observable<any>{
    const url = this.BASE_URL +'addToCart';
    let token = localStorage.getItem('TOKEN')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token ' + token})}
    let body= {product: String(productId), quantity: String(quantityn)}

    return this.http.post(url, body, this.httpOptions);
  }

  getCart(): Observable<any>{
    let token = localStorage.getItem('TOKEN')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token ' + token})}

    const url = this.BASE_URL +'cart';
    return this.http.get<string>(url, this.httpOptions);
  }

  getCartTotal(): Observable<any>{
    this.getToken()
    const url = this.BASE_URL +'cart/total';
    return this.http.get<string>(url, this.httpOptions);
  }

  getToken(): void{
    let token = localStorage.getItem('TOKEN')
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': 'Token ' + token})}
  }
}
