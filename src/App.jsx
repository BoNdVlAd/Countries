import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React, { createContext } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  console.log('render App')
  const [countries, setCountries] = React.useState([])
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('home');
  }, []);
  return (
    <>
      <Header />
      <Main>
        <div id="detail">
          <Outlet context={[countries, setCountries]}/>
        </div>
      </Main>
    </>
  );
}

export default App;
