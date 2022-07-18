import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { mainStyle } from "../constants/Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import BarcodeScanner from "./BarcodeScannerPage";
import BarcodeScannerScreen from "./BarcodeScannerPage";
import CameraBarcodeScannerPage from "./CameraBarcodePage";
import { Provider } from "react-redux";
import Store from "../redux/store";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export type RootStackParams = {
  BarcodeScanner: undefined;
  CameraBarcodeScanner: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function ScannerScreen() {
  return (
    <Provider store={Store}>
      <Stack.Navigator>
        <Stack.Screen
          name="BarcodeScanner"
          component={BarcodeScannerScreen}
          options={({navigation}) =>({
            headerTitle: "shit",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CameraBarcodeScanner");
                }}>
                <View>
                  <Icon
                    name="camera"
                    style={{
                      fontSize: 22,
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="CameraBarcodeScanner"
          options={{ headerTitle: "Barcode scanner" }}
          component={CameraBarcodeScannerPage}
        />
      </Stack.Navigator>
    </Provider>
  );
}
