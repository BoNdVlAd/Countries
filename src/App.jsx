import './App.css';
import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
import React from 'react';
import { ALL_COUNTRIES } from './config';
import List from './components/List';
import Card from './components/Card';
import { Outlet, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('home');
  }, []);
  return (
    <>
      <Header />
      <Main>
        <div id="detail">
          <Outlet />
        </div>
      </Main>
    </>
  );
}

export default App;
