import React from 'react';
import { ChevronLeft } from '@gympass/yoga-icons';
import Header from '../../components/Header';
import { Section, Content, Text, BackLink } from './style';
import colors from '../../tokens/colors';

const NotFount = () => (
  <>
    <Header />
    <Section>
      <Content>
        <Text>404 - Page is not found &#128531;</Text>
        <BackLink to="/">
          <ChevronLeft stroke={colors.secondary} width={30} height={30} /> Come
          back to Homepage
        </BackLink>
      </Content>
    </Section>
  </>
);

export default NotFount;
