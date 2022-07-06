import React from 'react';
import Header from './Header';
import Body from './Body';

interface NameProps {
  name?: string;
}

function NamePage({name}: NameProps) {

  return (
    <h2>
      <Header title='Имя персонажа' />
      <Body data={name} />
    </h2>
  );
}

export default NamePage;