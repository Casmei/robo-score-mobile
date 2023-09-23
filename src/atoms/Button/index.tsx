import { Text, TouchableOpacity, ViewStyle } from "react-native"
import { styles } from "./styles";
import { ReactNode } from "react";

type Props = {
  onPress: () => void;
  title: string;
  style?: ViewStyle;

}

const Button: React.FC<Props> = ({onPress, title, style}) => {

  return (
    <TouchableOpacity style={[styles.button, style]} activeOpacity={.5} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;