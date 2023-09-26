export const formatSecondsToMinutesAndSeconds = (count: number, removeMs: boolean = true): string => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const milliseconds = (count % 1) * 1000;
  let formattedMilliseconds = "";

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  if(!removeMs) {
    let formattedMilliseconds = String(Math.floor(milliseconds)).padStart(
      2,
      "0"
    );

    formattedMilliseconds = `: ${formattedMilliseconds}`
  }

  return `${formattedMinutes}:${formattedSeconds}${formattedMilliseconds}`;
};
