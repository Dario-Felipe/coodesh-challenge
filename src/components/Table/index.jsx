import React from 'react';
import { Search } from '@gympass/yoga-icons';
import { Content, ButtonMore } from './style';

const Table = ({ users }) => (
  <>
    <Content>
      <thead>
        <th>Name</th>
        <th id="gender">Gender</th>
        <th id="birth">Birth</th>
        <th id="actions">Actions</th>
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
                onClick={() => alert(item.name.first)}
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
  </>
);

export default Table;
