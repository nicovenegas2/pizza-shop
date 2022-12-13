import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Routes,Route } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Pay from './pages/Pay';

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pay" element={<Pay />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
