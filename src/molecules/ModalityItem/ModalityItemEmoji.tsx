import React from "react";
import { Text } from "react-native";

type Props = {
  emoji: string;
};

const ModalityItemEmoji: React.FC<Props> = ({ emoji }) => {
  return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
};

export default ModalityItemEmoji;
