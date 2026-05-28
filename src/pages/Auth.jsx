import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a display name based on input
    let displayName = "Student";
    if (!isLogin && name.trim()) {
      displayName = name.trim();
    } else if (email) {
      displayName = email.split('@')[0];
    }
    
    // Capitalize first letter
    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
    
    // Save to local storage for the TopNav to use
    localStorage.setItem('username', displayName);
    
    navigate('/dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 position-relative z-1" style={{ minHeight: '100vh' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card" 
        style={{ width: '100%', maxWidth: '420px', padding: '40px' }}
      >
        <div className="text-center mb-5">
          <div className="mx-auto mb-3" style={{
            width: '60px', height: '60px', borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--neon-glow-primary)'
          }}>
            <span className="fw-bold text-white fs-2">F</span>
          </div>
          <h2 className="fw-bold text-gradient mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p className="text-muted">Fiber Optic Learning Assistant</p>
        </div>

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="position-relative"
              >
                <User size={18} className="position-absolute" style={{ top: '14px', left: '16px', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="input-glass" 
                  placeholder="Full Name" 
                  required 
                  style={{ paddingLeft: '44px' }} 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="position-relative">
            <Mail size={18} className="position-absolute" style={{ top: '14px', left: '16px', color: 'var(--text-muted)' }} />
            <input 
              type="email" 
              className="input-glass" 
              placeholder="Email Address" 
              required 
              style={{ paddingLeft: '44px' }} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="position-relative">
            <Lock size={18} className="position-absolute" style={{ top: '14px', left: '16px', color: 'var(--text-muted)' }} />
            <input type="password" className="input-glass" placeholder="Password" required style={{ paddingLeft: '44px' }} />
          </div>

          <button type="submit" className="btn-3d w-100 mt-2 py-3 fs-5">
            {isLogin ? 'Login' : 'Sign Up'} <ArrowRight size={20} />
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted mb-0">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className="text-accent fw-bold cursor-pointer" 
              style={{ color: 'var(--accent)', cursor: 'pointer' }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign up' : 'Login'}
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
