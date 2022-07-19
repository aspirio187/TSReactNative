import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { BarcodeScannerPageProps } from "./BarcodeScannerPage";
import { useSelector } from "react-redux";
import { selectBarcode } from "../redux/barcodeSlice";
import Colors from "../constants/Colors";
import Product from "../models/ProductModel";
import MealPicker from "../components/MealPicker";
import { FoodService } from "../services/FoodService";

const ProductDetailPage: React.FC<BarcodeScannerPageProps> = (props) => {
  const barcode = useSelector(selectBarcode);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [selected, setSelected] = React.useState<string | undefined>("");
  const foodService = new FoodService();

  const mealTypes = ["Petit-déjeuner", "Déjeuner", "Dîner", "Snacks"];

  React.useEffect(() => {
    foodService.getProduct(barcode).then((value) => {
      if (product != null) {
        setProduct(value);
      }
    });
  });

  return (
    <ScrollView>
      <MealPicker
        selected={selected}
        setSelected={setSelected}
        mealTypes={mealTypes}
      />
      <Text
        style={{
          fontSize: 22,
          color: Colors.COLOR_BLUE,
          paddingLeft: 8,
          marginBottom: 22,
          borderBottomWidth: 0.2,
        }}
      >
        {product?.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View>

        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: Colors.COLOR_GRAY,
            }}
          >
            0 %
          </Text>

          <Text
            style={{
              fontSize: 15,
              color: Colors.COLOR_BLUE,
            }}
          >
            0 g
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#008e35",
            }}
          >
            Glucides
          </Text>
        </View>
        <View></View>
        <View></View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: product?.imgSmallUrl }}
          style={{
            width: (Dimensions.get("window").width / 100) * 90,
            aspectRatio: 1,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetailPage;

const styles = StyleSheet.create({});
