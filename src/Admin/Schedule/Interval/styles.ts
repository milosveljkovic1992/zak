import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const SInterval = {
  Container: styled(Card)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    flex-wrap: wrap;
    grid-gap: 0.25rem;
  `,
  Block: styled(Card)`
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 100px;
    display: grid;
    place-items: center;
    cursor: pointer;
    user-select: none;
  `,
};
