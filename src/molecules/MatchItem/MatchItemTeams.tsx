import React from "react";
import { Text, View } from "react-native";
import { style } from "./styles";

type Props = {
  teams: {
    teamOne: string;
    teamTwo: string;
  };
};

const MatchItemTeams: React.FC<Props> = ({ teams }) => {
  return (
    <View style={style.teamContainer}>
      <Text>{teams.teamOne}</Text>
      <Text> X </Text>
      <Text>{teams.teamTwo}</Text>
    </View>
  );
};

export default MatchItemTeams;
