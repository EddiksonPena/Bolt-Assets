import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { MobileOnboarding } from './pages/MobileOnboarding';
import { MobileDashboard } from './pages/MobileDashboard';
import { WebDashboard } from './pages/WebDashboard';
import { MotionGraphics } from './pages/MotionGraphics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<MobileOnboarding />} />
        <Route path="/mobile-dashboard" element={<MobileDashboard />} />
        <Route path="/dashboard" element={<WebDashboard />} />
        <Route path="/motion" element={<MotionGraphics />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
