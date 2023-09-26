import { Text, View } from "react-native";
import { Modality as IModality } from "../../@types/Modality.interface";
import ModalityList from "../../organisms/ModalityList";

const Modality = () => {
  const modalityData: IModality[] = [
    {
      name: "Soccer",
      emoji: "⚽",
      page: "Home",
    },
    {
      name: "Rescue",
      emoji: "🚧",
    },
    {
      name: "OnStage",
      emoji: "🌈",
    },
  ];
  return (
    <View>
      <ModalityList modalities={modalityData} />
    </View>
  );
};

export default Modality;
