import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { MatchService } from "../../services/HandleMatches";
import { WinnerTeam as IWinnerTeam } from "../../@types/WinnerTeam.interface";
import { styles } from "./styles";
import Button from "../../atoms/Button";
import { useNavigation } from "@react-navigation/native";

const WinnerTeam = ({ route }: any) => {
  const [winnerTeam, setWinnerTeam] = useState<IWinnerTeam | "EMPATE">("EMPATE"); // Inicializado como "EMPATE"
  const { matchId } = route.params;

  const handleFetchWinnerTeam = async () => {
    const winnerTeamData = await MatchService.GetWinnerTeam(matchId);

    // Verifique se o resultado é uma string "EMPATE"
    if (typeof winnerTeamData === "string" && winnerTeamData === "EMPATE") {
      setWinnerTeam("EMPATE");
    } else {
      setWinnerTeam(winnerTeamData);
    }
  };

  useEffect(() => {
    handleFetchWinnerTeam();
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {winnerTeam === "EMPATE" ? (
        <Text style={{ marginTop: 15, fontSize: 40, textAlign: 'center' }}>A partida terminou em empate.</Text>
      ) : (
        <Text style={{ marginTop: 15, fontSize: 40 }}>
          {winnerTeam?.team.name}
        </Text>
      )}
      <Button
        style={{ marginTop: 30 }}
        title="Voltar para listagem"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default WinnerTeam;
