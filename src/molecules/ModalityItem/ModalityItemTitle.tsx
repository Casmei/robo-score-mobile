import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";

type Props = {
  title: string;
};

const ModalityItemTitle: React.FC<Props> = ({ title }) => {
  return (
    <View style={style.teamContainer}>
      <Text>{title}</Text>
    </View>
  );
};

export default ModalityItemTitle;
