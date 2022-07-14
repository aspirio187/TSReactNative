import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/Colors";

export interface InputProps {
  label: string;
  iconName: string;
  errorMessage: string;
  password: boolean;
  onFocus: () => {};
}

const Input: React.FC<InputProps> = ({
  label,
  iconName,
  errorMessage: error,
  password,
  onFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: hasError
              ? Colors.COLOR_RED
              : isFocused
              ? Colors.COLOR_BLUE
              : Colors.COLOR_GRAY,
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{
            fontSize: 22,
            color: Colors.COLOR_BLUE,
            marginHorizontal: 10,
          }}
        />
        <TextInput
          keyboardType="email-address"
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          onChangeText={(text) => {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) {
              setHasError(true);
            } else {
              setHasError(false);
            }
          }}
          style={{
            color: "#000",
            flex: 1,
          }}
        />
      </View>
      {hasError && (
        <Text style={{ color: Colors.COLOR_RED, fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "#D3D3D3",
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    paddingHorizontal: 0.5,
    borderWidth: 0.5,
    alignItems: "center",
  },
});

export default Input;
