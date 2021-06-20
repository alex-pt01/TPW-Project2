import {Promotion} from "./Promotion";

export class Product {
  static CONDITIONS = ["New","Used"]
  private BASE_URL = 'http://localhost:8000/';
  id: number | null;
  name: string;
  price: number;
  description: string;
  stock: boolean = false;
  image: string;
  quantity: number;
  brand: string;
  seller: string = '';
  category : string = '';
  promotion : Promotion = new Promotion(null, '', 0, '');
  date: Date = new Date();
  condition: string = '';

  constructor(id: number | null, name: string, price: number, description: string, image: string, quantity: number, brand: string, seller: string, category: string, condition: string, promotion: Promotion, date?: Date) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = this.BASE_URL + image;
    this.quantity = quantity;
    this.brand = brand;
    this.seller = seller;
    this.category = category;
    this.promotion = promotion;
    this.condition = condition;
    if (date){
      this.date = date
    }
    this.stock = quantity > 0;
  }
  static newProduct(): Product{
    return new Product(-99,'',0,'','',0,'','','','',Promotion.newPromotion());
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
