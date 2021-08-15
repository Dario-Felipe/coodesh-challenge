import React from 'react';
import { Section, Content, Image, List, CloseButton } from './style';

const Modal = ({ user, handle }) => (
  <Section>
    <Content>
      <Image src={user.picture.large} alt={`Picture of ${user.name.first}`} />
      <h1>{user.name.first}</h1>
      <List>
        <li>
          <strong>ID: </strong>
          {user.id.name ? `${user.id.name}${user.id.value}` : 'Empty'}
        </li>
        <li>
          <strong>Name: </strong>
          {user.name.title}. {user.name.first} {user.name.last}
        </li>
        <li>
          <strong>Email: </strong>
          {user.email}
        </li>
        <li>
          <strong>Gender: </strong>
          {user.gender}
        </li>
        <li>
          <strong>Birth day: </strong>
          {user.dob.date.slice(0, 10)} ({user.dob.age} years old)
        </li>
        <li>
          <strong>Phone number: </strong>
          {user.phone} and {user.cell}
        </li>
        <li>
          <strong>Address: </strong>
          {user.location.country} - {user.location.state} - {user.location.city}
        </li>
      </List>
      <CloseButton onClick={() => handle(false)} type="button" secondary>
        Close
      </CloseButton>
    </Content>
  </Section>
);

export default Modal;
