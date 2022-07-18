import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
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
    let product = foodService.getProduct(barcode);
    setProduct(product ?? undefined);
  };

  return (
    <SafeAreaView style={mainStyle.AndroidSafeArea}>
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
      <View></View>
    </SafeAreaView>
  );
};

export default BarCodeScannerPage;
