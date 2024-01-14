import React from 'react';

import { SInterval } from './styles';
import { TInterval } from './types';

type TIntervalProps = {
  interval: TInterval;
};

export const Interval = ({ interval }: TIntervalProps) => (
  <SInterval.Block>
    <span>{interval.time}</span>
  </SInterval.Block>
);

export default Interval;
