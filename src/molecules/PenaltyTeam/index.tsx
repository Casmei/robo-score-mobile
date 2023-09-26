import { PenalityTeamCounter } from "./PenalityTeamCounter";
import { PenalityTeamRoot } from "./PenalityTeamRoot";
import { PenalityTeamTitle } from "./PenalityTeamTitle";

export const PenalityTeam = {
  Root: PenalityTeamRoot,
  Title: PenalityTeamTitle,
  //Na hora da composição, chamamos esse componente o tanto de vezeses que for nescessário
  TeamCounter: PenalityTeamCounter,
};
