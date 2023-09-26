import { Text } from "react-native";

type Props = {
  name: string;
};

const ScoreCounterTeamName: React.FC<Props> = ({ name }) => {
  return <Text style={{ fontWeight: "700" }}>{name}</Text>;
};

export default ScoreCounterTeamName;
