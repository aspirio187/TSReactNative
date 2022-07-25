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

  public static schema: Realm.ObjectSchema = {
    name: "ConsumedProduct",
    properties: {
      id: "int",
      mealType: "string",
      quantity: "double",
      product: "Product",
      consumedAt: "int",
    },
    primaryKey: "id",
  };
}
