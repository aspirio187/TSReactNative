import axios, { AxiosResponse } from "axios";
import Product from "../models/ProductModel";

export class FoodService {
  getProduct(barcode: string): Product | null {
    axios
      .get("https://world.openfoodfacts.org/api/v2/product/" + barcode)
      .then((result: AxiosResponse) => {
        if (result.status != 200) {
          return null;
        }

        let barcode: string | undefined = result.data["code"];

        if (barcode === undefined) return null;

        let vitaminA = result.data["vitamin-a_100g"] === undefined ?  0 : result.data['vitamin-a_100g'];
        console.log("codebar:" + barcode);
        console.log("vitaminA: " + vitaminA);
      });

    return null;
  }
}
