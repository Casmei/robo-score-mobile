import { Group } from "../@types/Group.internface";
import { Match } from "../@types/Match.interface";

const baseURL = `http://192.168.5.36:3000`;

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

export const MatchService = {
  MatchesWithGroups: fetchMatchesWithGroups,
  UpdateMatchScore: updateMatchScore,
};
