import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  value: number;
};

const ScoreCounterValue: React.FC<Props> = ({ value }) => {
  return <Text style={styles.valueText}>{value}</Text>;
};

export default ScoreCounterValue;
