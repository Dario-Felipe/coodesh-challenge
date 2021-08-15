import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
import { Link } from 'react-router-dom';
import colors from '../../tokens/colors';

export const Section = styled.section`
  height: 100%;
  background: ${colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${colors.dark};
  font-size: ${theme.fontSizes.xxlarge}px;

  ${media.lg`
    font-size: ${theme.fontSizes.xxxlarge}px;
  `}
`;

export const PageControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.medium}px;
  width: 100%;
  padding: ${theme.spacing.medium}px;
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
