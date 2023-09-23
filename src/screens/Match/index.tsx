import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import MatchScore from "../../organisms/MatchScore";
import StopWatch from "../../organisms/GameTime";
import Divider from "../../atoms/Divider";

const Match: React.FC = ({route}: any) => {

  const { groupName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.teamGroupTitle}>
        {groupName}
      </Text>

      <MatchScore match={route.params} />

      <Divider />

      <StopWatch />

      <Divider />

    </View>
  )
}

export default Match;