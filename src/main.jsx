import { domAnimation, LazyMotion } from 'framer-motion';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Preloader from './components/Preloader';
import './fonts.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation} strict>
        <Suspense fallback={ <Preloader /> }>
          <App />
        </Suspense>
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>
);
