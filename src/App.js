import Header from './components/header/Header'
import Range from './components/range/Range'
import Weight from './components/weight/Weight';
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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
