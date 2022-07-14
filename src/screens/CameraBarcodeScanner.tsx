import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Alert, Button, SafeAreaView, Text, StyleSheet } from "react-native";
import { mainStyle } from "../constants/Styles";

export interface BarcodeScanned {
  type: string;
  data: string;
}

export default function CameraBarcodeScanner() {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarcodeScanned) => {
    setScanned(true);
    Alert.alert("Code bar scanné: " + data);
  };

  if (hasPermission === null) {
    return <Text>Demande d'accès à la caméra</Text>;
  }

  if (hasPermission === false) {
    return <Text>Accès à la caméra refusé</Text>;
  }

  return <SafeAreaView style={mainStyle.AndroidSafeArea}>
    <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, ]}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
  </SafeAreaView>;
}
