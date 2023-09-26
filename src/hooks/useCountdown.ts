import { useEffect, useState } from "react";
import { useCountdown as useCountdownFromLib } from "usehooks-ts";

interface CountdownControllers {
  startCountdown: () => void;
  stopCountdown: () => void;
  resetCountdown: () => void;
  startNextTime: () => void;
}

interface useCountdownType {
  count: number;
  repetitions: number;
  countdownControllers: CountdownControllers;
}

export const useCountdown = (
  initialCountInSeconds: number,
  totalRepetitions: number = 3,
  winPage: () => void
): useCountdownType => {
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdownFromLib({
      countStart: initialCountInSeconds,
      intervalMs: 1000,
  });

  const [repetitions, setRepetitions] = useState<number>(1);

  useEffect(() => {
    if (count == 0) {
      startNextTime();
    }

    if (repetitions > totalRepetitions) {
      winPage();
    }
  }, [repetitions, count]);

  const startNextTime = () => {
    resetCountdown();
    setRepetitions((prev) => prev + 1);
  };

  return {
    count,
    repetitions,
    countdownControllers: {
      startNextTime,
      startCountdown,
      stopCountdown,
      resetCountdown,
    },
  };
};
