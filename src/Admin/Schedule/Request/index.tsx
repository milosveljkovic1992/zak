import React from 'react';

import { SRequest } from './styles';

export const Request = ({ label }: { label: number }) => (
  <SRequest.Container>
    <span>{label}</span>
    <SRequest.Actions>
      <button>Y</button>
      <button>X</button>
    </SRequest.Actions>
  </SRequest.Container>
);
