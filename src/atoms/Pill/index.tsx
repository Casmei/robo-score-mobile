import React from "react";
import { Text, View, ViewStyle } from "react-native";

type Props = {
  text: string;
  textColor?: string;
  style?: ViewStyle;
};

export const Pill: React.FC<Props> = ({ text, style, textColor }) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 10,
          paddingVertical: 2,
          backgroundColor: "#f4f4f5",
          borderRadius: 50,
        },
        style,
      ]}
    >
      <Text style={[{ color: textColor }]}>{text}</Text>
    </View>
  );
};
