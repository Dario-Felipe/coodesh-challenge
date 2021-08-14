import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from '@gympass/yoga';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';

const home = () => {
  const { page } = useParams();
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
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
      {console.log(users)}
      <Header />
      <Container>
        <Row>
          <Col xxs={12}>
            <h1>Página: {page}</h1>

            <ul>
              {users.map((item) => (
                <li key={item.email}>{item.name.first}</li>
              ))}
            </ul>

            <Link
              to={Number(page) > 1 ? `/page=${page - 1}` : `/page=${page}`}
              disabled
            >
              Anterior
            </Link>
            <Link to={`/page=${Number(page) + 1}`}>Proxima</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default home;
