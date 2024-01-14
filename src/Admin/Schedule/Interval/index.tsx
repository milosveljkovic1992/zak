import React from 'react';

import { SInterval } from './styles';

type TInterval = {
  interval: string;
};

export const Interval = ({ interval }: TInterval) => (
  <SInterval.Block>
    <span>{interval}</span>
  </SInterval.Block>
);

export default Interval;
