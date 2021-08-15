import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Box } from '@gympass/yoga';
import { useParams, useHistory } from 'react-router-dom';
import { Section, Content, Title, TableContainer } from './style';
import Header from '../../components/Header';
import Table from '../../components/Table';
import PageControl from '../../components/PageControl';
import api from '../../services/api';
import { ReactComponent as Loading } from '../../assets/images/loading.svg';

const Home = () => {
  const { page } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  const loadUsers = async () => {
    setIsLoading(true);

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
      setIsLoading(false);
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
                {isLoading ? (
                  <Loading />
                ) : (
                  <TableContainer>
                    <Table users={users} />
                    <Box padding="medium">
                      <PageControl page={page} />
                    </Box>
                  </TableContainer>
                )}
              </Content>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Home;
