import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import Button from "../../atoms/Button";
import { useState } from "react";

type Props = {
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<Props> = ({onStart, onReset, onStop}) => {

  const [isRunning, setIsRunning] = useState<boolean>(false)

  const stop = () => {
    setIsRunning(false);
    onStop()
  }
  
  const start = () => {
    setIsRunning(true);
    onStart()
  }

  return (
    <View style={styles.controlsContainer}>
      <Button title={"Começar"} onPress={start} style={{marginRight: 15}}/>
      <Button title={isRunning ? "Parar" : "Continuar" } onPress={isRunning ? start : stop} style={{marginRight: 15}}/>

      <Button title="Reiniciar" onPress={onReset} />
    </View>
  )
}

export default TimerControls;