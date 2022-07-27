import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { mainStyle } from "../constants/Styles";
import User from "../models/UserModel";
import { selectUser, setUserJson } from "../redux/userSlice";
import { FoodService } from "../services/FoodService";
import UserService from "../services/UserService";

const HomeScreen = () => {
  const userJson = useSelector(selectUser);

  const [user, setUser] = React.useState<User | undefined>();
  const dispatch = useDispatch();
  const userService = new UserService();
  const foodService = new FoodService();

  React.useEffect(() => {
    userService.getUser((result) => {
      if (result != undefined) {
        dispatch(setUserJson(JSON.stringify(result)));
        setUser(JSON.parse(userJson));
      }
    });
  }, [userJson]);

  return (
    <SafeAreaView style={mainStyle.AndroidSafeArea}>
      {user != undefined && (
        <Text
          style={{
            fontSize: 30,
            color: Colors.COLOR_BLUE,
            paddingLeft: 18,
            marginVertical: 15,
          }}
        >
          Bienvenu {user.firstName} {user.lastName}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
