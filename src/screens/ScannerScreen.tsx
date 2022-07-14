import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { mainStyle } from "../constants/Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import BarcodeScanner from "./BarcodeScannerScreen";
import BarcodeScannerScreen from "./BarcodeScannerScreen";
import CameraBarcodeScanner from "./CameraBarcodeScanner";

export type RootStackParams = {
  BarcodeScanner: undefined;
  CameraBarcodeScanner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function ScannerScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BarcodeScanner" component={BarcodeScannerScreen} />
      <Stack.Screen
        name="CameraBarcodeScanner"
        options={{ headerTitle: "Barcode scanner" }}
        component={CameraBarcodeScanner}
      />
    </Stack.Navigator>
  );
}
