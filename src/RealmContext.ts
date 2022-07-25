import { createRealmContext } from "@realm/react";
import ConsumedProduct from "./models/ConsumedProductModel";

import Product from "./models/ProductModel";

const config = {
  schema: [Product.schema, ConsumedProduct.schema],
};

export default createRealmContext(config);
