import Header from './components/header/Header'
import Range from './components/range/Range'
import Weight from './components/weight/Weight';
import Pi from './components/pi/Pi';
import Volume from './components/volume/Volume';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">

          <Header />

          <Routes>
            <Route path="/range" element={<Range />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/pi" element={<Pi />} />
            <Route path="/volume" element={<Volume />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
