import Home from './sections/Home';
import Dashboard from './sections/Dashboard';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
