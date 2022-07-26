export default class ConsumedProduct {
  id?: number;
  mealType: string;
  quantity: number;
  productBarcode: string;
  consumedAt: number;

  /**
   *
   */
  constructor(
    quantity: number,
    mealType: string,
    productBarcode: string,
    consumedAt: number,
    id?: number
  ) {
    this.id = id;
    this.quantity = quantity;
    this.mealType = mealType;
    this.productBarcode = productBarcode;
    this.consumedAt = consumedAt;
  }
}
