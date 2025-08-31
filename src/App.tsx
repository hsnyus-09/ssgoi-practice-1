import { Ssgoi } from '@ssgoi/react';
import { fade } from "@ssgoi/react/view-transitions";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import SettingsPage from './pages/Settings';
import { Home, User, Settings } from 'lucide-react';

function TabBar() {
  const location = useLocation();

  return (
    <div className="tabbar">
      <Link to="/" className={location.pathname === "/" ? "active" : ""}>
        <Home />
        홈
      </Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>
        <User />
        프로필
      </Link>
      <Link to="/settings" className={location.pathname === "/settings" ? "active" : ""}>
        <Settings />
        설정
      </Link>
    </div>
  );
}

function App() {
  return (
    <Ssgoi config={{ defaultViewTransition: fade ()}}>
      <Router>
        <div className="app">
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
          <TabBar />
        </div>
      </Router>
    </Ssgoi>  
  );
}

export default App;