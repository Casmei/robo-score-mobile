import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { MatchItem } from "../../molecules/MatchItem";
import { styles } from "./styles";
import { Match } from "../../@types/Match.interface";
import { MatchService } from "../../services/HandleMatches";
import MatchListSection from "../../organisms/MatchList";

const Home = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  const fetchMatchData = async () => {
    try {
      const matchesWithGroups = await MatchService.MatchesWithGroups();
      console.table(matchesWithGroups);
      setMatches(matchesWithGroups);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMatchData()
  }, []);

  return (
    <View style={styles.container}>
      <MatchListSection matches={matches}/>
    </View>
  )
}

export default Home;