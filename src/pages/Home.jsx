import React from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { useParams } from 'react-router-dom';

const home = () => {
  const { page } = useParams();

  return (
    <Container>
      <Row>
        <Col xxs={12}>
          <h1>Olá mundo! pagina: {page}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default home;
