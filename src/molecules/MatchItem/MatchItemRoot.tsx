import React, { ReactNode }  from "react"
import Card from "../../atoms/Card"
import { TouchableOpacity, View } from "react-native"
import { style } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Match } from "../../@types/Match.interface"

type Props = {
  children: ReactNode;
  match: Match;
}

const MatchItemRoot: React.FC<Props> = ({children, match}) => {
  const navigation = useNavigation();

  const goToMatch = () => navigation.navigate('Match', { ...match });

  return (
    <TouchableOpacity style={style.rootContainer} onPress={goToMatch}>
      <Card>
        <View style={style.rootContent}>
          {children}
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export default MatchItemRoot;