import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  // Formatting path name
  const pageTitle = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  // Get username from localStorage
  const username = localStorage.getItem('username') || 'Student';
  const avatarName = encodeURIComponent(username);

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleBellClick = () => {
    alert("You have no new notifications right now.");
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="glass-card mb-4 d-flex justify-content-between align-items-center"
      style={{ padding: '16px 24px', borderRadius: '16px' }}
    >
      <h3 className="m-0 fw-bold">{pageTitle || 'Dashboard'}</h3>
      
      <div className="d-flex align-items-center gap-4">
        <div className="position-relative d-none d-md-block">
          <Search size={18} className="position-absolute" style={{ top: '10px', left: '12px', color: 'var(--text-muted)' }} />
          <input type="text" className="input-glass border-0" placeholder="Search..." style={{ paddingLeft: '40px', width: '250px', borderRadius: '20px' }} />
        </div>
        
        <div className="position-relative cursor-pointer" onClick={handleBellClick}>
          <Bell size={20} className="text-white" />
          <span className="position-absolute rounded-circle bg-danger" style={{ width: '8px', height: '8px', top: '0', right: '0' }}></span>
        </div>
        
        <div 
          className="d-flex align-items-center gap-2 cursor-pointer"
          onClick={handleLogout}
          title="Click to Logout"
        >
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--primary)',
            backgroundImage: `url("https://ui-avatars.com/api/?name=${avatarName}&background=6366f1&color=fff")`,
            backgroundSize: 'cover'
          }}></div>
          <div className="d-none d-md-block text-start">
            <p className="m-0 fw-semibold fs-6">Hello {username}</p>
            <p className="m-0 text-muted" style={{ fontSize: '12px' }}>Level 3 Learner</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopNav;
