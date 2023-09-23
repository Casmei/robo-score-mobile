export interface Match {
  groupId: string;
  teamAId: string;
  teamAScore: number;
  teamBId: string;
  teamBScore: number;
  state: string;
  day: number;
  hour: string;
  field: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  teamA: Team;
  teamB: Team;
  groupName: string;
}
