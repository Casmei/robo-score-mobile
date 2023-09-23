import { Text } from "react-native"

type Props = {
  seconds: string;
}

const TimerDisplay: React.FC<Props> = ({seconds}) => {

  return (
    <Text style={{ fontSize: 40}}>
      {seconds}
    </Text>
  )
}

export default TimerDisplay;