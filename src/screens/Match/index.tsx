import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import MatchScore from "../../organisms/MatchScore";
import StopWatch from "../../organisms/GameTime";
import Divider from "../../atoms/Divider";
import { Match as IMatch } from "../../@types/Match.interface";
import { Penalties } from "../../organisms/Penalties";

const Match: React.FC = ({ route }: any) => {
  const { groupName } = route.params;

  const match: IMatch = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.teamGroupTitle}>{groupName}</Text>

      <MatchScore match={route.params} />

      <Divider />

      <StopWatch
        matchId={match.id}
        repetitionsTimeInSeconds={10}
        totalRepetitions={2}
      />

      <Divider />

      <Penalties teamAName={match.teamA.name} teamBName={match.teamB.name} />
    </View>
  );
};

export default Match;
