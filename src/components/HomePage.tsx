import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';

function HomePage() {

  return (
    <>
      <Header title='Добро пожаловать!' />
      <div>
        <NavLink to="/name">Имя персонажа</NavLink>
        <br />
        <NavLink to="/gender">Пол персонажа</NavLink>
      </div>
    </>
  );
}

export default HomePage;