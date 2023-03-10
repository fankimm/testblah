import moment from 'moment';

const convertDateToString = (dateString: string): string => {
  console.log('dateString', dateString);
  const dateTime = moment(dateString);
  const now = moment();
  const diff = now.diff(dateTime);
  console.log(diff);
  const calDuration = moment.duration(diff);
  const years = calDuration.years();
  console.log('π ~ file: conver_date_to_string.ts:10 ~ convertDateToString ~ years', years);
  const months = calDuration.months();
  const days = calDuration.days();
  const hours = calDuration.hours();
  const minutes = calDuration.minutes();
  const seconds = calDuration.seconds();
  if (
    years === 0 &&
    months === 0 &&
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds !== undefined &&
    (seconds === 0 || seconds < 1)
  ) {
    return '0μ΄';
  }
  if (years === 0 && months === 0 && days === 0 && hours === 0 && minutes === 0 && seconds) {
    return `${Math.floor(seconds)}μ΄`;
  }
  if (years === 0 && months === 0 && days === 0 && hours === 0) {
    return `${minutes}λΆ`;
  }
  if (years === 0 && months === 0 && days === 0) {
    return `${hours}μ`;
  }
  if (years === 0 && months === 0) {
    return `${days}μΌ`;
  }
  if (years === 0) {
    return `${years}κ°μ`;
  }
  return `${years}λ`;
};

export default convertDateToString;
