import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import s from './App.module.css';

function Main() {
  return (
    <main className={s.root}>
      <MainContent />
      <Footer />
    </main>
  );
}

function App() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/discord')) {
      window.location.replace('https://discord.com/servers/venus-protocol-912811548651708448');
    }
  }, [window.location.pathname]);

  return (
    <BrowserRouter>
      <Routes>
        {['/', '/discord'].map(path => (
          <Route path={path} element={<Main />} key={path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
