const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const utcTimeNow = () => new Date().toUTCString();
const toUTCTime = (time) => new Date(time).toUTCString();
const displayDate = (time) => {
  const d = new Date(time);
  const month = d.getMonth();
  const date = d.toDateString();
  const splitDate = date.split(" ").slice(1);
  splitDate[0] = months[month];
  return splitDate.join(" ");
};

export const TimeHelper = {
  utcTimeNow,
  toUTCTime,
  displayDate,
};
