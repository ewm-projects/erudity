const utcTimeNow = () => new Date().toUTCString();
const toUTCTime = (time) => new Date(time).toUTCString();

export const TimeHelper = {
  utcTimeNow,
  toUTCTime,
};
