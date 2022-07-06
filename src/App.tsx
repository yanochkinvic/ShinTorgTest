import React from 'react';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GenderPage from './components/GenderPage';
import NamePage from './components/NamePage';
import { IData } from './types/types';
import axios from 'axios';
import HomePage from './components/HomePage';

function App() {
  const [state, setState] = React.useState<IData | undefined>(undefined);
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('https://swapi.dev/api/people/1/')
      setState(response.data)
    } catch (e) {
      alert(e)
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/name"} element={<NamePage name={state?.name}/>} />
        <Route path={"/gender"} element={<GenderPage gender={state?.gender}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
