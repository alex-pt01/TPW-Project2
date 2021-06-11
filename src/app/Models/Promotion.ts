export class Promotion {
  name: string;
  discount: number;
  description: string;


  constructor(name: string, discount: number, description: string) {
    this.name = name;
    this.discount = discount;
    this.description = description;
  }
}
