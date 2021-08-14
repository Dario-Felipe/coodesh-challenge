import styled from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import { Button, theme } from '@gympass/yoga';
import colors from '../../tokens/colors';

export const Content = styled.table`
  thead {
    color: ${colors.white};
    background-color: ${colors.primary};

    th {
      padding: ${theme.spacing.xxsmall}px;
      border: none;
    }
  }

  tr {
    td {
      padding: ${theme.spacing.xxsmall}px;
    }
  }

  tr td {
    background: ${colors.white};
    color: ${colors.dark};
    text-align: center;
  }

  ${media.lg`
    width: 80%;

    #name {
      width: 420px;
    }

    #gender {
      width: 156px;
    }

    #birth {
      width: 256px;
    }

    #actions {
      width: 60px;
    }
  `}
`;

export const ButtonMore = styled(Button)`
  background: ${colors.dark};

  svg {
    margin: 0;
  }
`;
