import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Section, Content, Title } from './style';
import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';

const home = () => {
  const { page } = useParams();
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const loadUsers = async () => {
    if (Number.isNaN(Number(page))) {
      history.push('/404');
    }

    try {
      const response = await api.get('', {
        params: {
          page,
        },
      });
      const { results } = response.data;
      setUsers(results);
    } catch (error) {
      alert('Houve um erro, tente novamente mais tarde!');
    }
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Row>
            <Col xxs={12}>
              <Content>
                <Title>&#128269; Search patient &#128270;</Title>
                <Table users={users} />
                <Link
                  to={Number(page) > 1 ? `/page=${page - 1}` : `/page=${page}`}
                  disabled
                >
                  Anterior
                </Link>
                <Link to={`/page=${Number(page) + 1}`}>Proxima</Link>
              </Content>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default home;
