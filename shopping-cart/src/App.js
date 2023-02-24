import './styles/app.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
        <>
        <div className='app'>
          <Header/>
          <Main/>
          <Footer/>
        </div>
        </>
  );
}

export default App;
