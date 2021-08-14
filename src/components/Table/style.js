import styled from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import { Button } from '@gympass/yoga';
import colors from '../../tokens/colors';

export const Content = styled.table`
  thead {
    color: ${colors.white};
    background-color: ${colors.primary};

    th {
      padding: 10px;
      border: none;
    }
  }

  tr {
    td {
      padding: 8px;
    }
  }

  tr td {
    background: ${colors.white};
    color: ${colors.dark};
    text-align: center;
  }

  ${media.lg`
    width: 80%;

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
