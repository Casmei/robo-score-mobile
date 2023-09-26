import { View } from "react-native";
import { styles } from "./styles";
import Button from "../../atoms/Button";

type Props = {
  increase: () => void;
  decrease: () => void;
};

const ScoreCounterButtons: React.FC<Props> = ({ increase, decrease }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button onPress={decrease} title="-" />
      <Button onPress={increase} title="+" />
    </View>
  );
};

export default ScoreCounterButtons;
