import React from 'react';
import { ChevronLeft, ChevronRight } from '@gympass/yoga-icons';
import { Content, LinkPage } from './style';
import colors from '../../tokens/colors';

const PageControl = ({ page }) => (
  <Content>
    <LinkPage to={Number(page) > 1 ? `/page=${page - 1}` : `/page=${page}`}>
      <ChevronLeft stroke={colors.white} width={30} height={30} />
    </LinkPage>
    <span>{page}</span>
    <LinkPage to={`/page=${Number(page) + 1}`}>
      <ChevronRight stroke={colors.white} width={30} height={30} />
    </LinkPage>
  </Content>
);

export default PageControl;
