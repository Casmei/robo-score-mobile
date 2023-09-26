import React, { ReactNode } from "react";
import Card from "../../atoms/Card";
import { TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";

type ModalityPageKeys = keyof ReactNavigation.RootParamList;

type Props = {
  children: ReactNode;
  modalityPage?: ModalityPageKeys;
};

const ModalityItemRoot: React.FC<Props> = ({ children, modalityPage }) => {
  const navigation = useNavigation();

  const goToModality = () => navigation.navigate(modalityPage || "Modality");

  return (
    <TouchableOpacity style={style.rootContainer} onPress={goToModality}>
      <Card>
        <View style={style.rootContent}>{children}</View>
      </Card>
    </TouchableOpacity>
  );
};

export default ModalityItemRoot;
