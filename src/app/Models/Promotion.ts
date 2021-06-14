import {Product} from "./Product";

export class Promotion {
  id: number | null;
  name: string;
  discount: number;
  description: string;


  constructor(id: number | null, name: string, discount: number, description: string) {
    this.name = name;
    this.id=id;
    this.discount = discount;
    this.description = description;
  }

  static newPromotion(): Promotion{
    return new Promotion(-99,'',0,'');
  }
}
