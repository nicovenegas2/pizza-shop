import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes,Route } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
