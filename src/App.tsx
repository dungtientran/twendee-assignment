
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
