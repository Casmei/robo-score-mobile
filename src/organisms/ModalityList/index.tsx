import { FlatList } from "react-native";
import { ModalityItem } from "../../molecules/ModalityItem";
import { Modality } from "../../@types/Modality.interface";

interface Props {
  modalities: Modality[];
}

const ModalityList: React.FC<Props> = ({ modalities }) => {
  return (
    <FlatList
      data={modalities}
      renderItem={({item}) => (
        <ModalityItem.Root modalityPage={item.page}>
          <ModalityItem.Title title={item.name} />
          <ModalityItem.Emoji emoji={item.emoji} />
        </ModalityItem.Root>
      )}
    />
  )
}

export default ModalityList;