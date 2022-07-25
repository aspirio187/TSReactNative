export default class ConsumedProduct {
  id: number;
  mealType : string;
  quantity: number;
  productBarcode: string;

  /**
   *
   */
  constructor(quantity: number, mealType : string, productBarcode: string, id = 0) {
    this.id = id;
    this.quantity = quantity;
    this.mealType = mealType;
    this.productBarcode = productBarcode;
  }
}
