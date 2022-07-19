import axios, { AxiosResponse } from "axios";
import Product from "../models/ProductModel";

export class FoodService {
  async getProduct(barcode: string): Promise<Product | null> {
    let finalProduct: Product;

    let result = await axios.get(
      "https://world.openfoodfacts.org/api/v2/product/" + barcode
    );

    if (result.status != 200) {
      return null;
    }

    let code: string | undefined = result.data["code"];

    if (code === undefined) return null;

    let product = result.data["product"];

    let name =
      product["product_name"] === undefined
        ? "PRODUCT HAS NO NAME REGISTERED"
        : product["product_name"];

    let imgSmallUrl =
      product["image_small_url"] === undefined
        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        : product["image_small_url"];

    let imgUrl =
      product["image_url"] === undefined
        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        : product["image_url"];

    let energyKj: number =
      product["energy-kj_100g"] === undefined ? 0 : product["energy-kg_100g"];

    let energyKCal =
      product["energy-kcal_100g"] === undefined
        ? 0
        : product["energy-kcal_100g"];

    let carboHydrates =
      product["carboHydrates_100g"] === undefined
        ? 0
        : product["carboHydrates_100g"];

    let protein =
      product["proteins_100g"] === undefined ? 0 : product["proteins_100g"];

    let fat = product["fat_100g"] === undefined ? 0 : product["fat_100g"];

    let vitaminA =
      product["vitamin-a_100g"] === undefined ? 0 : product["vitamin-a_100g"];

    let vitaminB1 =
      product["vitamin-b1_100g"] === undefined ? 0 : product["vitamin-b1_100g"];

    let vitaminB2 =
      product["vitamin-b2_100g"] === undefined ? 0 : product["vitamin-b2_100g"];

    let vitaminB6 =
      product["vitamin-b6_100g"] === undefined ? 0 : product["vitamin-b6_100g"];

    let vitaminB9 =
      product["vitamin-b9_100g"] === undefined ? 0 : product["vitamin-b9_100g"];

    let vitaminC =
      product["vitamin-c_100g"] === undefined ? 0 : product["vitamin-c_100g"];

    let vitaminD =
      product["vitamin-d_100g"] === undefined ? 0 : product["vitamin-d_100g"];

    let vitaminE =
      product["vitamin-e_100g"] === undefined ? 0 : product["vitamin-e_100g"];

    let vitaminK =
      product["vitamin-k_100g"] === undefined ? 0 : product["vitamin-k_100g"];

    let vitaminPP =
      product["vitamin-pp_100g"] === undefined ? 0 : product["vitamin-pp_100g"];

    product = new Product(
      barcode,
      name,
      imgSmallUrl,
      imgUrl,
      carboHydrates,
      protein,
      fat,
      energyKj,
      energyKCal,
      vitaminA,
      vitaminB1,
      vitaminB2,
      vitaminB6,
      vitaminB9,
      vitaminC,
      vitaminD,
      vitaminE,
      vitaminK,
      vitaminPP
    );

    return product;
  }
}
