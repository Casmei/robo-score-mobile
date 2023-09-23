import { useCountdown } from "usehooks-ts"
import Section from "../../atoms/Section"
import Timer from "../../molecules/Timer"

const StopWatch: React.FC = () => {

  function formatCountdownTime(count: number) {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    const milliseconds = (count % 1) * 1000;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMilliseconds = String(Math.floor(milliseconds)).padStart(2 , '0');
  
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }
  
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 10,
      intervalMs: 1000,
    })

  return (
    <Section title="Cronômetro">

      <Timer.Root>
        <Timer.Display seconds={formatCountdownTime(count)}/>
        <Timer.Controls
          onStart={startCountdown}
          onReset={resetCountdown}
          onStop={stopCountdown}
        />

      </Timer.Root>
  </Section>
  )

}

export default StopWatch
