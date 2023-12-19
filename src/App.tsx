import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerPage from './components/BeerPage';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home#topofpage" element={<MainSection />} />
          <Route path="/home#products" element={<MainSection />} />
          <Route path="/beer/:id" element={<BeerPage />} />
          <Route path="/beer/random" element={<BeerPage random />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;