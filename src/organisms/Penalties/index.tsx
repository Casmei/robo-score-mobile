import React from "react";
import Section from "../../atoms/Section";
import { PenalityTeam } from "../../molecules/PenaltyTeam";
import { View } from "react-native";
import Divider from "../../atoms/Divider";

type Props = {
  teamAName: string;
  teamBName: string;
};

export const Penalties: React.FC<Props> = ({ teamAName, teamBName }) => {
  return (
    <Section title="Penalidades">
      <PenalityTeam.Root>
        <PenalityTeam.Title teamName={teamAName} />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <PenalityTeam.TeamCounter countStart={6} robotName="Robô 1" />
          <PenalityTeam.TeamCounter countStart={6} robotName="Robô 2" />
        </View>
        <Divider />
        <PenalityTeam.Title teamName={teamBName} />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <PenalityTeam.TeamCounter countStart={6} robotName="Robô 1" />
          <PenalityTeam.TeamCounter countStart={6} robotName="Robô 2" />
        </View>
      </PenalityTeam.Root>
    </Section>
  );
};
