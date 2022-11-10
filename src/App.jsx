import React, { lazy } from 'react';
import { Lines } from 'react-preloaders';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => {
  return new Promise(res => {
    setTimeout(() => res(import('./pages/Home')), 800);
  });
});

function App(num) {

  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
