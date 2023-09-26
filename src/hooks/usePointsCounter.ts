import { useReducer } from "react";
import { MatchService } from "../services/HandleMatches";

interface State {
  points: number;
}

interface IncrementAction {
  type: "INCREMENT";
  payload: number;
}

interface DecrementAction {
  type: "DECREMENT";
  payload: number;
}

export interface HookType {
  points: number;
  increment: () => void;
  decrement: () => void;
}

type Action = IncrementAction | DecrementAction;

const pointsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return scoreIncrement(state, action);
    case "DECREMENT":
      return scoreDecrement(state, action);
    default:
      return state;
  }
};

const scoreIncrement = (state: State, action: Action) => {
  return { ...state, points: state.points + action.payload };
}

const scoreDecrement = (state: State, action: Action) => {
  const newPoints = state.points - action.payload;
  return { ...state, points: Math.max(newPoints, 0) };
}

const usePointsCounter = (id: number, team: "teamAScore" | "teamBScore", points: number) => {
  const [state, dispatch] = useReducer(pointsReducer, {
    points,
  });

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
    const updatedPoints = state.points + 1; // Get the updated points value
    MatchService.UpdateMatchScore(id, team, updatedPoints); // Pass the updated points value
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
    const updatedPoints = Math.max(state.points - 1, 0); // Get the updated points value
    MatchService.UpdateMatchScore(id, team, updatedPoints); // Pass the updated points value
  };

  return { points: state.points, increment, decrement };
};

export default usePointsCounter;
