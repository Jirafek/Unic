import NotFound from 'pages/NotFound';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<div></div>} />
    </Routes>
  );
}

export default App;
