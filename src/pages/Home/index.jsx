import React from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

const home = () => {
  const { page } = useParams();

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xxs={12}>
            <h1>Página: {page}</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default home;
