import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const SRequest = {
  Container: styled(Card)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 0.25rem;
  `,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  `,
};
