import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Box, AutoComplete } from '@gympass/yoga';
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
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(false);
  const history = useHistory();

  const cleanInput = () => {
    const closeButton = document.querySelector(
      '#searchInput>div>div>fieldset>div',
    );

    if (closeButton) {
      closeButton.click();
    }
  };

  const loadUsers = async () => {
    setIsLoading(true);
    cleanInput();
    setFilteredUsers(false);

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

  const searchUser = (value) => {
    setIsLoading(true);
    setSearchInput(value);

    const filtered = users.filter(
      (item) =>
        item.name.first
          .concat(' ', item.name.last)
          .toLowerCase()
          .includes(value) ||
        item.location.country.toLowerCase().includes(value) ||
        item.gender.toLowerCase() === value,
    );

    if (filtered.length !== 0) {
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(false);
    }

    setIsLoading(false);
  };

  const generateOptions = (array) => {
    const options = [
      ...array.map((item) => `${item.name.first} ${item.name.last}`),
      ...new Set(array.map((item) => item.location.country)),
      'Male',
      'Female',
    ];

    return options;
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
                <Box
                  id="searchInput"
                  padding="medium"
                  backgroundColor="white"
                  borderRadius={20}
                  width="70%"
                  marginBottom="medium"
                >
                  <AutoComplete
                    value={searchInput}
                    label="Search here"
                    full
                    onChange={(value) => searchUser(value.toLowerCase())}
                    options={generateOptions(users)}
                  />
                </Box>
                {isLoading ? (
                  <Loading />
                ) : (
                  <TableContainer>
                    {searchInput !== '' && !filteredUsers && (
                      <Box paddingBottom="small">
                        <h1>Patient not found &#128531;</h1>
                        <span>Others bellow:</span>
                      </Box>
                    )}
                    <Table users={filteredUsers || users} />
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
