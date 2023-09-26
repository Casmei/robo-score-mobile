import { useNavigation } from "@react-navigation/native";
import Section from "../../atoms/Section";
import { formatSecondsToMinutesAndSeconds } from "../../helpers/formatSecondsToMinutesAndSeconds";
import { useCountdown } from "../../hooks/useCountdown";
import Timer from "../../molecules/Timer";

type Props = {
  matchId: number;
  repetitionsTimeInSeconds: number;
  totalRepetitions: number;
};

const StopWatch: React.FC<Props> = ({
  matchId,
  repetitionsTimeInSeconds,
  totalRepetitions,
}) => {
  const navigation = useNavigation(); 

  const goToMatch = () => navigation.navigate("WinnerTeam", { matchId });

  const { count, repetitions, countdownControllers } = useCountdown(
    repetitionsTimeInSeconds,
    totalRepetitions,
    goToMatch
  );

  const { startCountdown, stopCountdown, resetCountdown } =
    countdownControllers;

  return (
    <Section title="Cronômetro">
      <Timer.Root repetitions={repetitions}>
        <Timer.Display seconds={formatSecondsToMinutesAndSeconds(count)} />
        <Timer.Controls
          onStart={startCountdown}
          onReset={resetCountdown}
          onStop={stopCountdown}
        />
      </Timer.Root>
    </Section>
  );
};

export default StopWatch;
