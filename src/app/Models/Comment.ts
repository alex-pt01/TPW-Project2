import {Product} from "./Product";

export class Comment{
  id: number | null;
  userName: string;
  userEmail: string;
  description: string;
  rating: number;
  date: Date;
  product: Product | null;

  constructor(id: number | null, userName: string, userEmail: string, description: string, rating: number, product: Product | null) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.description = description;
    this.rating = rating;
    this.product = product;
    this.date = new Date();
    this.id = id;
  }
}
