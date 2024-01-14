import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const SSchedule = {
  Container: styled.div`
    width: 100;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Inner: styled(Card)`
    width: 90%;
    max-width: 768px;
    box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
    padding: 10px;
  `,
};
