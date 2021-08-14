import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
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
