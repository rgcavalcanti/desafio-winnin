const pastTime = (timestamp: number) => {
  const timeFormatter = new Intl.RelativeTimeFormat("pt-br", {
    style: "short",
  });

  const today = new Date();

  const pastDate = new Date(timestamp);

  const relativeTime = today.getTime() - pastDate.getTime();

  const pastSeconds = Math.round(relativeTime / 1000);
  const pastMinutes = Math.round(pastSeconds / 60);
  const pastHours = Math.round(pastMinutes / 60);
  const pastDays = Math.round(pastHours / 24);

  if (pastDays > 0) return timeFormatter.format(-pastDays, "days");
  if (pastHours > 0) return timeFormatter.format(-pastHours, "hours");
  if (pastMinutes > 0) return timeFormatter.format(-pastMinutes, "minutes");

  return timeFormatter.format(-pastSeconds, "seconds");
};

export const formatText = {
  pastTime
}