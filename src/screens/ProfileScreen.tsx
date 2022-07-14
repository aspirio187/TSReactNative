import React from "react";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import Input from "../components/Input";
import { mainStyle } from "../constants/Styles";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={mainStyle.AndroidSafeArea}>
      <ScrollView style={mainStyle.container}>
        <Text style={mainStyle.h1}>PROFILE</Text>
        <View>
          <Input
            iconName="mail"
            label="Pomme"
            errorMessage = "Veuillez entrer une adresse email"
            onFocus={async () => {}}
            password
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
