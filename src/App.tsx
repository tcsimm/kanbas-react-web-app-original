import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kanbas from './Kanbas';
import Labs from './Labs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Kanbas />} />
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
