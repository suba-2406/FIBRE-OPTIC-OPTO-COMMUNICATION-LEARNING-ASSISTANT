import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Image, HelpCircle, MessageSquare, TrendingUp, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Notes', path: '/notes', icon: BookOpen },
    { name: 'Diagrams', path: '/diagrams', icon: Image },
    { name: 'Quiz', path: '/quiz', icon: HelpCircle },
    { name: 'AI Chatbot', path: '/chat', icon: MessageSquare },
    { name: 'Progress', path: '/progress', icon: TrendingUp },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="glass-card" 
      style={{ 
        width: '260px', 
        height: 'calc(100vh - 48px)',
        margin: '24px 0 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: '24px'
      }}
    >
      <div className="mb-5 d-flex align-items-center gap-3">
        <div style={{
          width: '40px', height: '40px', borderRadius: '12px',
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: 'var(--neon-glow-primary)'
        }}>
          <span className="fw-bold text-white fs-4">F</span>
        </div>
        <h4 className="m-0 fw-bold text-gradient">FiberAI</h4>
      </div>
      
      <div className="d-flex flex-column gap-2 mt-4 flex-grow-1">
        {links.map((link) => (
          <NavLink 
            key={link.path}
            to={link.path} 
            className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <link.icon size={20} />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto">
        <NavLink to="/login" className="sidebar-link text-danger" style={{marginTop: 'auto'}}>
          <LogOut size={20} />
          <span>Logout</span>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default Sidebar;
