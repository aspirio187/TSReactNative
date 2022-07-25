import React from "react";
import { View, Text, Button } from "react-native";
import ConsumedProduct from "../models/ConsumedProductModel";
import { FoodService } from "../services/FoodService";

const HomeScreen = () => {
  const foodService = new FoodService();
  const [consumedProducts, setConsumedProducts] = React.useState<
    ConsumedProduct[] | undefined
  >(undefined);

  React.useEffect(() => {}, []);

  return (
    <View>
      <Text>Home screen</Text>
      <Button title="Click here" onPress={() => alert("Button clicked!")} />
    </View>
  );
};

export default HomeScreen;
