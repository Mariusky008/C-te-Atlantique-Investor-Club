import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MemberArea from './pages/MemberArea';

function App() {
  return (
    <div className="min-h-screen bg-club-sand text-club-blue font-sans">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/member-area" element={<MemberArea />} />
      </Routes>
    </div>
  );
}

export default App;
