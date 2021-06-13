import {Promotion} from "./Promotion";

export class Product {
  id: number | null;
  name: string;
  price: number;
  description: string;
  stock: boolean;
  image: File;
  quantity: number;
  brand: string;
  seller: string;
  category : string;
  promotion : Promotion;
  date: Date;
  condition: string;

  constructor(id: number | null, name: string, price: number, description: string, image: File, quantity: number, brand: string, seller: string, category: string, promotion: Promotion, condition: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
    this.quantity = quantity;
    this.brand = brand;
    this.seller = seller;
    this.category = category;
    this.promotion = promotion;

    this.condition = condition;
    this.date = new Date();
    if (quantity > 0)
    {
      this.stock = true;
    }
    else
    {
     this.stock = false;
    }
  }

  /*conditions = (('New', 'New'), ('Used', 'Used'))*/
  /*
  CATEGORY = (('Smartphones', 'Smartphones'),
    ('Computers', 'Computers'),
    ('Tablets', 'Tablets'),
    ('Drones', 'Drones')
    , ('Televisions', 'Televisions'))
   */


}
