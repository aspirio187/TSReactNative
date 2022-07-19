import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BarcodeInput from "../components/BarcodeInput";
import Input from "../components/Input";
import { mainStyle } from "../constants/Styles";
import Product from "../models/ProductModel";
import { selectBarcode } from "../redux/barcodeSlice";
import { FoodService } from "../services/FoodService";
import { RootStackParams } from "./ScannerScreen";

export type BarcodeScannerPageProps = NativeStackScreenProps<
  RootStackParams,
  "BarcodeScanner"
>;

const BarCodeScannerPage: React.FC<BarcodeScannerPageProps> = (props) => {
  const barcode = useSelector(selectBarcode);
  const dispatch = useDispatch();
  const foodService = new FoodService();
  const [product, setProduct] = React.useState<Product>();

  const handleSearch = () => {
    let product = foodService.getProduct(barcode).then((value) => {
      setProduct(value ?? undefined);
    });
  };

  return (
    <ScrollView style={mainStyle.AndroidSafeArea}>
      <View
        style={{
          flex: 1,
        }}
      >
        <BarcodeInput
          errorMessage="message d'erreur"
          icon="barcode"
          label="Code bar"
          text={barcode}
          onSearchPressed={handleSearch}
        />
      </View>
      <View>
        <Image source={{ uri: product?.imgUrl }} style={{ height: 250 }} />
        <Text
          style={{
            fontSize: 22,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          {product?.name}
        </Text>
      </View>
    </ScrollView>
  );
};

export default BarCodeScannerPage;
