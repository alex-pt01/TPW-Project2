export class PaymentMethod{
  type: string;
  card_no: string;

  constructor(type: string, card_no: string) {
    this.type = type;
    this.card_no = card_no;
  }
}
