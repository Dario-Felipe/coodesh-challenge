import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import { Link } from 'react-router-dom';
import { media } from '@gympass/yoga-helpers';
import colors from '../../tokens/colors';

export const Section = styled.section`
  background: ${colors.secondary};
  height: calc(100vh - 81.75px);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  color: ${colors.secondary};
  padding: ${theme.spacing.xsmall}px ${theme.spacing.small}px;
  border-radius: 40px;
  text-decoration: none;
  gap: 10px;
  transition: all ease-out 0.3s;

  &:hover {
    color: ${colors.primary};
    background: ${colors.white};
    box-shadow: 4px 4px ${colors.primary};

    svg {
      path {
        stroke: ${colors.primary};
      }
    }
  }
`;

export const Text = styled.h1`
  color: ${colors.primary};
  text-align: center;
  font-size: ${theme.fontSizes.xxlarge}px;

  ${media.lg`
    font-size: ${theme.fontSizes.huge}px;
  `}
`;
