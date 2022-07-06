import React from 'react';
import Header from './Header';
import Body from './Body';

interface GenderProps {
  gender?: string;
}

function GenderPage({gender}: GenderProps) {

  return (
    <h2>
      <Header title='Пол персонажа' />
      <Body data={gender} />
    </h2>
  );
}

export default GenderPage;