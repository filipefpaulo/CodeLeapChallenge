export function dateDiff(date: string) {
  const providedDate = new Date(date).getTime();
  const currentDate = new Date().getTime();
  const timeIntervals = [
    { unit: 'second', limit: 60, divisor: 60 },
    { unit: 'minute', limit: 60, divisor: 60 },
    { unit: 'hour', limit: 24, divisor: 24 },
    { unit: 'day', limit: 30, divisor: 30 },
    { unit: 'month', limit: 12, divisor: 12 },
    { unit: 'year', limit: Infinity, divisor: 12 },
  ];

  let timeDifference = (currentDate - providedDate) / 1000;

  for (const interval of timeIntervals) {
    if (timeDifference < interval.limit) {
      return `${Math.floor(timeDifference)} ${interval.unit}${
        timeDifference < 2 ? '' : 's'
      } ago`;
    }
    timeDifference /= interval.divisor;
  }

  return 'More than a year ago';
}
