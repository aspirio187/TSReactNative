import React from "react";
import { View, Text, Animated, TextInput, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

import Colors from "../constants/Colors";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

interface CircularProgressProps {
  actualValue: number;
  radius: number;
  strokeWidth: number;
  duration: number;
  color: string;
  delay: number;
  textColor: string;
  max: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  actualValue,
  radius,
  strokeWidth,
  duration,
  color,
  delay,
  textColor,
  max,
}) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;
  const circleRef = React.useRef<View>();
  const inputRef = React.useRef<TextInput>();

  const animation = (toValue: number) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animation(actualValue);

    animatedValue.addListener((v) => {
      if (circleRef?.current) {
        const maxPercentage = (100 * v.value) / max;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPercentage) / 100;

        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        inputRef?.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, actualValue]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation={-90} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference / 2}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? Colors.COLOR_BLUE,
            fontWeight: "bold",
            textAlign: "center",
          },
        ]}
      />
    </View>
  );
};

export default CircularProgress;