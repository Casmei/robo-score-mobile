import { ReactNode } from "react"
import { View } from "react-native"
import { styles } from "./styles"

type Props = {
  children: ReactNode
}

const TimerRoot: React.FC<Props> = ({children}) => {
  return (
    <View style={styles.rootContainer}>
      {children}
    </View>
  )
}

export default TimerRoot;