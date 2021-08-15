import React, { useState } from 'react';
import { Search } from '@gympass/yoga-icons';
import { Content, ButtonMore } from './style';
import Modal from '../Modal';

const Table = ({ users }) => {
  const [isModal, setIsModal] = useState(false);
  const [selected, setSelected] = useState({});

  const selectUser = (user) => {
    setSelected(user);
    setIsModal(true);
  };

  return (
    <>
      <Content>
        <thead>
          <tr>
            <th>Name</th>
            <th id="gender">Gender</th>
            <th id="birth">Birth</th>
            <th id="actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.email}>
              <td>
                {item.name.title}. {item.name.first} {item.name.last}
              </td>
              <td>{item.gender}</td>
              <td>{item.dob.date.slice(0, 10)}</td>
              <td>
                <ButtonMore
                  type="button"
                  onClick={() => selectUser(item)}
                  secondary
                  small
                  full
                >
                  <Search />
                </ButtonMore>
              </td>
            </tr>
          ))}
        </tbody>
      </Content>
      {isModal && <Modal user={selected} handle={setIsModal} />}
    </>
  );
};

export default Table;
