import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
        <Route path="/anvandarvillkor" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
