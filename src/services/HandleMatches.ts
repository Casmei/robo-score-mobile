import { Group } from "../@types/Group.internface";
import { Match } from "../@types/Match.interface";
import { WinnerTeam as IWinnerTeam } from "../@types/WinnerTeam.interface";

const baseURL = `http://172.22.72.201:3000`;

const fetchMatchesWithGroups = async () => {
  try {
    const response = await fetch(`${baseURL}/groups/find`);
    const data: Group[] = await response.json();

    const allMatches: Match[] = [];

    data.forEach((group) => {
      group.matches.forEach((match) => {
        const matchWithGroup = {
          ...match,
          groupName: group.name,
        };
        allMatches.push(matchWithGroup);
      });
    });

    // Ordenar as partidas com pontuação por último
    allMatches.sort((a, b) => {
      if (a.teamAScore || a.teamBScore) {
        return 1; // 'a' tem pontuação, portanto, deve vir depois de 'b'
      } else if (b.teamAScore || b.teamBScore) {
        return -1; // 'b' tem pontuação, portanto, deve vir antes de 'a'
      }
      return 0; // Ambos não têm pontuação ou têm pontuação igual, a ordem permanece a mesma
    });

    return allMatches;
  } catch (error: any) {
    throw new Error("Error fetching data: " + error.message);
  }
};

const updateMatchScore = async (
  matchId: number,
  team: "teamAScore" | "teamBScore",
  value: number
): Promise<void> => {
  try {
    const response = await fetch(`${baseURL}/matches/${matchId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [team]: value,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update match score");
    }
  } catch (error: any) {
    throw new Error("Error updating match score: " + error.message);
  }
};

const getWinnerTeam = async (matchId: number): Promise<IWinnerTeam | "EMPATE">  => {
  try {
    const response = await fetch(`${baseURL}/matches/${matchId}`);
    const data: Match = await response.json();

    let winnerTeam: IWinnerTeam | "EMPATE" = "EMPATE" ;
    if (data.teamAScore > data.teamBScore) {
      winnerTeam = { team: data.teamA, score: data.teamAScore}
    } else if (data.teamBScore > data.teamAScore) {
      winnerTeam = {team: data.teamB, score: data.teamBScore};
    } else {
      winnerTeam
    }

    return winnerTeam;
  } catch (error: any) {
    throw new Error("Erro ao buscar os dados: " + error.message);
  }
};


export const MatchService = {
  MatchesWithGroups: fetchMatchesWithGroups,
  UpdateMatchScore: updateMatchScore,
  GetWinnerTeam: getWinnerTeam,
};
