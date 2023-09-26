import { ReactNode } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Pill } from "../../atoms/Pill";

type Props = {
  children: ReactNode;
  repetitions: number;
};

const TimerRoot: React.FC<Props> = ({ children, repetitions }) => {
  return (
    <View style={styles.rootContainer}>
      <Pill textColor="#09090b" text={`${repetitions}° tempo`} />
      {children}
    </View>
  );
};

export default TimerRoot;
