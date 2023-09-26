import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";
import { ReactNode } from "react";

type Props = {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  textColor?: string;
};

const Button: React.FC<Props> = ({ onPress, title, style, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
