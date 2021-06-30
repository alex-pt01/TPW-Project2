import {Product} from "./Product";

export class Comment{
  id: number | null;
  userName: string;
  userEmail: string;
  description: string;
  rating: number;
  commentDate: Date = new Date();
  product: Product | null;
  stars: number[] = [];

  constructor(id: number | null, userName: string, userEmail: string, description: string, rating: number, product: Product | null, date?: Date ) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.description = description;
    this.rating = rating;
    this.product = product;
    if (date){
      this.commentDate = date;
    }
    this.id = id;
    for(let i=0; i < Math.floor(rating) ; i++){
      this.stars.push(1);
    }
    if (this.stars.length<this.rating){
      this.stars.push(0);
    }
  }
}
