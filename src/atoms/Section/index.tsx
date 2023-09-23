import { Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { styles } from "./styles";
import Card from "../Card";

type Props = {
  title: string;
  children: ReactNode;
  style?: ViewStyle;
}

const Section: React.FC<Props> = ({children, title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Card>
        {children}
      </Card>
    </View>
  )
}

export default Section;