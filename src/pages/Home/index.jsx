import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { ChevronLeft, ChevronRight } from '@gympass/yoga-icons';
import { useParams, useHistory } from 'react-router-dom';
import {
  Section,
  Content,
  Title,
  PageControl,
  LinkPage,
  TableContainer,
} from './style';
import colors from '../../tokens/colors';
import Header from '../../components/Header';
import Table from '../../components/Table';
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
                    <PageControl>
                      <LinkPage
                        to={
                          Number(page) > 1
                            ? `/page=${page - 1}`
                            : `/page=${page}`
                        }
                      >
                        <ChevronLeft
                          stroke={colors.white}
                          width={30}
                          height={30}
                        />
                      </LinkPage>
                      <span>{page}</span>
                      <LinkPage to={`/page=${Number(page) + 1}`}>
                        <ChevronRight
                          stroke={colors.white}
                          width={30}
                          height={30}
                        />
                      </LinkPage>
                    </PageControl>
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
