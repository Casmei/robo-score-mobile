import { View } from "react-native";
import { styles } from "./styles";
import Button from "../../atoms/Button";
import { useState } from "react";

type Props = {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const TimerControls: React.FC<Props> = ({ onStart, onReset, onStop }) => {
  const [stopPressed, setStopPressed] = useState<boolean>(false);

  const stop = () => {
    setStopPressed(true);
    onStop();
  };

  const start = () => {
    setStopPressed(false);
    onStart();
  };

  return (
    <>
      <View style={styles.controlsContainer}>
        <Button
          title={stopPressed ? "Retomar" : "Começar"}
          onPress={start}
          style={{ marginRight: 15 }}
        />
        <Button title={"Parar"} onPress={stop} style={{ marginRight: 15 }} />
        <Button title="Reiniciar" onPress={onReset} />
      </View>
    </>
  );
};

export default TimerControls;
