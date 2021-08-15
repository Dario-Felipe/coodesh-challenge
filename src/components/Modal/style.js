import styled from 'styled-components';
import { theme, Button } from '@gympass/yoga';
import { media } from '@gympass/yoga-helpers';
import colors from '../../tokens/colors';

export const Section = styled.section`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  height: 100%;
  justify-content: center;
  left: ${theme.spacing.zero};
  position: fixed;
  top: ${theme.spacing.zero};
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background: ${colors.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.medium}px;

  h1 {
    margin: ${theme.spacing.small}px;
  }

  ${media.xxs`
    height: 400px;
    width: 80%;

    h1 {
      font-size: ${theme.fontSizes.xlarge}px;
    }
  `}

  ${media.xs`
    height: 478px;

    h1 {
      font-size: ${theme.fontSizes.xxlarge}px;
    }
  `}

  ${media.sm`
    height: 450px;
    width: 50%;
  `}

  ${media.lg`
    height: 450px;
    width: 550px;
  `}
`;

export const Image = styled.img`
  border-radius: 120px;
  border: 4px solid ${colors.primary};
  position: absolute;
  top: -44px;
  width: 130px;
`;

export const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xsmall}px;
  justify-content: center;
  list-style: none;
  padding: ${theme.spacing.zero};

  ${media.xxs`
    li {
      font-size: ${theme.fontSizes.xsmall}px;

      strong {
        font-size: ${theme.fontSizes.small}px;
      }
    }
  `}

  ${media.xs`
    li {
      font-size: ${theme.fontSizes.small}px;

      strong {
        font-size: ${theme.fontSizes.medium}px;
      }
    }
  `}
`;

export const CloseButton = styled(Button)`
  background: ${colors.dark};
  bottom: ${theme.spacing.medium}px;
  position: absolute;
`;
