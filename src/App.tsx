import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kanbas from './Kanbas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Kanbas />} />
      </Routes>
    </Router>
  );
}

export default App;
