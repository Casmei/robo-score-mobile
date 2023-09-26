import React from "react";
import { Text } from "react-native";
import { isMatchFinished } from "../../helpers/isMatchFinished";
import { Pill } from "../../atoms/Pill";

type Props = {
  teamAPoint: number;
  teamBPoint: number;
};

const MatchItemIcon: React.FC<Props> = ({ teamAPoint, teamBPoint }) => {
  const handlePill = () => {
    const isFinished = isMatchFinished(teamAPoint, teamBPoint);

    if (!isFinished) return <Text style={{ fontSize: 20 }}>⚽</Text>;

    return (
      <Pill
        text="Encerrado"
        textColor="#ffff"
        style={{ backgroundColor: "#ef4444" }}
      />
    );
  };

  return handlePill();
};

export default MatchItemIcon;
