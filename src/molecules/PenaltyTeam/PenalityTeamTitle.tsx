import React from "react";
import { Text } from "react-native";

type Props = {
  teamName: string;
};

export const PenalityTeamTitle: React.FC<Props> = ({ teamName }) => (
  <Text style={{fontSize: 18, textAlign: "center", marginBottom: 20}}>Jogadores - {teamName}</Text>
);
