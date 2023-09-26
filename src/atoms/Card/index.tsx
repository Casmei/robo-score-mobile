import { View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { styles } from "./styles";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const Card: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;
