import React from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { Link, useLocation } from 'react-router-dom';
import { Section, Content, ImageContent, Logo } from './style';
import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.png';

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Section>
      <Container>
        <Row>
          <Col xxs={12}>
            <Content>
              <Link to={pathname}>
                <Logo src={logo} alt="Logo Pharma.inc" />
              </Link>
              <ImageContent>
                <a
                  href="https://github.com/Dario-Felipe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={user} alt="Usuário" />
                </a>
              </ImageContent>
            </Content>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Header;
