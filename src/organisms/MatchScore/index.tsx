import React from "react";
import { View } from "react-native";
import usePointsCounter from "../../hooks/usePointsCounter";
import { Match } from "../../@types/Match.interface";
import Section from "../../atoms/Section";
import { styles } from
 "./styles";
import MatchScoreMolecule from "../../molecules/MatchScore";

type Props = {
  match: Match,
}

const MatchScoreOrganism: React.FC<Props> = ({match}) => {

  const { teamA, teamB, id, teamAScore, teamBScore } = match;

  const teamOne = usePointsCounter(id, "teamAScore", teamAScore);
  const teamTwo = usePointsCounter(id, "teamBScore", teamBScore);

  return (
    <View>
      <Section title="Pontuação">
        <View style={styles.SectionScoreContainer}>

          <MatchScoreMolecule.Root>
            <MatchScoreMolecule.TeamName name={teamA.name} />
            <MatchScoreMolecule.Value value={teamOne.points} />
            <MatchScoreMolecule.Button 
            increase={teamOne.increment} decrease={teamOne.decrement} />
          </MatchScoreMolecule.Root>

          <MatchScoreMolecule.Root>
            <MatchScoreMolecule.TeamName name={teamB.name} />
            <MatchScoreMolecule.Value value={teamTwo.points} />
            <MatchScoreMolecule.Button increase={teamTwo.increment} decrease={teamTwo.decrement} />
          </MatchScoreMolecule.Root>

        </View>
      </Section>
    </View>
  )
}

export default MatchScoreOrganism;