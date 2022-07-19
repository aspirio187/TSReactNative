import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { Component, JSXElementConstructor, ReactElement } from "react";
import { BarcodeScannerPageProps } from "./BarcodeScannerPage";
import { useSelector } from "react-redux";
import { selectBarcode } from "../redux/barcodeSlice";
import Colors from "../constants/Colors";
import Product from "../models/ProductModel";
import { onClose, onOpen, Picker } from "react-native-actions-sheet-picker";
import MealPicker from "../components/MealPicker";
import { FoodService } from "../services/FoodService";

const ProductDetailPage: React.FC<BarcodeScannerPageProps> = (props) => {
  const barcode = useSelector(selectBarcode);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [selected, setSelected] = React.useState<string | undefined>("POMME");
  const foodService = new FoodService();

  const mealTypes = ["Petit-déjeuner", "Déjeuner", "Dîner", "Snacks"];

  React.useEffect(() => {
    foodService.getProduct(barcode).then((value) => {
      setProduct(value);
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
          fontSize: 30,
          color: Colors.COLOR_BLUE,
          textAlign: "center",
          marginBottom: 22,
        }}
      >
        {product?.name}
      </Text>
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
