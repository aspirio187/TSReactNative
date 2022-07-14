import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView } from "react-native";
import { mainStyle } from "../constants/Styles";
import { RootStackParams } from "./ScannerScreen";

type BarcodeScannerScreenProps = NativeStackScreenProps<RootStackParams, "BarcodeScanner">


const BarCodeScannerScreen : React.FC<BarcodeScannerScreenProps> = (props) => {
    return(<SafeAreaView style={mainStyle.AndroidSafeArea}>
        <Button
          title={"Scanner"}
          onPress={() => {
            props.navigation.navigate("CameraBarcodeScanner");
          }}
        />
      </SafeAreaView>);
}

export default BarCodeScannerScreen;