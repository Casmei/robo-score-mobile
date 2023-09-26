import React, { useState } from "react";
import { View } from "react-native";
import Button from "../../atoms/Button";
import { Pill } from "../../atoms/Pill";
import { useCountdown } from "usehooks-ts";
import { formatSecondsToMinutesAndSeconds } from "../../helpers/formatSecondsToMinutesAndSeconds";

type Props = {
  robotName: string;
  countStart: number;
  onPress?: () => void;
};

export const PenalityTeamCounter: React.FC<Props> = ({ robotName,countStart }) => {
  const [count, { startCountdown }] = useCountdown({
    countStart,
    intervalMs: 1000,
  });

  console.log(count);

  return (
    <>
      <View style={{ position: "relative" }}>
        <Button
          title={robotName}
          onPress={startCountdown}
          style={{
            backgroundColor:
              count !== countStart && count !== 0 ? "#ef4444" : "#d9d9d9",
          }}
          textColor={count !== countStart && count !== 0 ? "#ffffff" : "#1c1c1e"}
        />
        {count !== countStart && count !== 0 && (
          <Pill
            text={formatSecondsToMinutesAndSeconds(count, true)}
            style={{ position: "absolute", top: -10, right: -20, maxWidth: 60 }}
          />
        )}
      </View>
    </>
  );
};
