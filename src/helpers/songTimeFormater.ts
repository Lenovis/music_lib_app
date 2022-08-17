export const songTimeFormater = (duration: number): string => {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = duration - hours * 3600 - minutes * 60;

  return (
    (hours ? `${hours}h ` : '') +
    (minutes ? `${minutes}m ` : '') +
    `${seconds < 10 ? '0' : ''}${seconds}s`
  );
};
