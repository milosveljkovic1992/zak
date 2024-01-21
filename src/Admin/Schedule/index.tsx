import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Interval } from 'Admin/Schedule/Interval';
import { SInterval } from 'Admin/Schedule/Interval/styles';
import { generate } from 'utils';

import { TInterval } from './Interval/types';
import { Request } from './Request';
import { SSchedule } from './styles';

export const Schedule = () => {
  const navigate = useNavigate();
  const [intervals, setIntervals] = useState<Array<TInterval>>([]);

  const handleGenerateIntervals = () => {
    const from = new Date();
    from.setHours(8, 0, 0, 0);
    const to = new Date();
    to.setHours(20, 0, 0, 0);
    setIntervals(generate.intervals(from, to, 30, 1));
  };

  const handleIntervalClick = (interval: TInterval) => {
    // should redirect to 'OAuth modal'
    // query string id= appointment=
    const userId = 123;
    navigate(`?id=${userId}&appointment=${interval.id}`);
  };

  return (
    <SSchedule.Container>
      <SSchedule.Inner>
        {Array.from({ length: 3 }, (_, index) => index + 1).map((item) => (
          <Request key={item} label={item} />
        ))}
        <p>request 2</p>
        <p>request 3</p>
        <h1>Schedule</h1>
        <button onClick={handleGenerateIntervals}>Generate</button>
        <SInterval.Container>
          {!!intervals.length &&
            intervals.map((interval) => (
              <Interval key={interval.id} interval={interval} handleClick={handleIntervalClick} />
            ))}
        </SInterval.Container>
      </SSchedule.Inner>
    </SSchedule.Container>
  );
};

export default Schedule;
