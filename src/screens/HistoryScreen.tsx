import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  );
};

export default HomeScreen;
