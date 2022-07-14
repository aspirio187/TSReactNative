import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { mainStyle } from "../constants/Styles";
import { selectBarcode } from "../redux/barcodeSlice";
import { FoodService } from "../services/FoodService";
import { RootStackParams } from "./ScannerScreen";

type BarcodeScannerPageProps = NativeStackScreenProps<
  RootStackParams,
  "BarcodeScanner"
>;

const BarCodeScannerPage: React.FC<BarcodeScannerPageProps> = (props) => {
  const barcode = useSelector(selectBarcode);
  const dispatch = useDispatch();
  const foodService = new FoodService();

  return (
    <SafeAreaView style={mainStyle.AndroidSafeArea}>
      <Button
        title={"Scanner"}
        onPress={() => {
          props.navigation.push("CameraBarcodeScanner");
        }}
      />

      <Text>{barcode}</Text>
    </SafeAreaView>
  );
};

export default BarCodeScannerPage;
