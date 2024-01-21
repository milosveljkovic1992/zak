import React from 'react';

import { SInterval } from './styles';
import { TInterval } from './types';

type TIntervalProps = {
  interval: TInterval;
  handleClick: (interval: TInterval) => void;
};

export const Interval = ({ interval, handleClick }: TIntervalProps) => (
  <SInterval.Block onClick={() => handleClick(interval)}>
    <span>{interval.time}</span>
  </SInterval.Block>
);

export default Interval;
