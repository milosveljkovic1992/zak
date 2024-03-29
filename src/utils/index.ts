import { TInterval } from 'Admin/Schedule/Interval/types';

import { TtimeOptions } from './types';

const createIntervals = (from: Date, to: Date, interval: number, intervalBreak: number = 0): Array<TInterval> => {
  const intervals = [];

  while (from.getTime() < to.getTime()) {
    const options: TtimeOptions = { hour: '2-digit', minute: '2-digit' };
    const startInterval = from.toLocaleTimeString('sr-RS', options);
    from.setMinutes(from.getMinutes() + interval);

    if (from.getTime() > to.getTime()) break;
    const endInterval = from.toLocaleTimeString('sr-RS', options);
    intervals.push({ time: `${startInterval} - ${endInterval}`, date: from, id: from.getTime().toString() });

    if (intervalBreak > 0) from.setMinutes(from.getMinutes() + intervalBreak);
  }
  return intervals;
};

const generate = {
  intervals: createIntervals,
};

export { generate, createIntervals };
