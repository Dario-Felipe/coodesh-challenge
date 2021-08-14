import styled from 'styled-components';
import { theme } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
import colors from '../../tokens/colors';

export const Section = styled.header`
  background: ${colors.primary};
  padding: ${theme.spacing.xxsmall}px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 160px;

  ${media.lg`
    width: 150px;
  `}
`;

export const ImageContent = styled.div`
  border-radius: 40px;
  border: ${theme.borders.medium}px solid ${colors.secondary};
  cursor: pointer;
  height: 50px;
  width: 50px;

  img {
    border-radius: 40px;
    height: 100%;
    width: 100%;
  }
`;
