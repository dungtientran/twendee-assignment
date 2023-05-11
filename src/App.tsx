
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from './store/hooks';
import { getAllUserAction } from './store/reducers/usersSlice';
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
