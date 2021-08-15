import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '@gympass/yoga';
import colors from '../../tokens/colors';

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xxlarge}px;
  width: 100%;
`;

export const LinkPage = styled(Link)`
  background: ${colors.dark};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-out 0.3s;

  &:hover {
    background: ${colors.primary};
  }
`;
