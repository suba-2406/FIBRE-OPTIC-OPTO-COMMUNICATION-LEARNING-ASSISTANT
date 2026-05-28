import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const Diagrams = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex flex-column gap-4">
      
      <div className="glass-card">
        <h4 className="fw-bold text-gradient mb-4">Fiber Optic Structure</h4>
        <div className="row align-items-center">
          <div className="col-md-6 position-relative text-center d-flex justify-content-center py-5">
            {/* CSS 3D Cylinder Representation */}
            <div className="position-relative" style={{ width: '250px', height: '250px', transform: 'rotateX(20deg) rotateY(-30deg)', transformStyle: 'preserve-3d' }}>
              
              {/* Outer Jacket */}
              <div 
                className="position-absolute rounded-circle" 
                style={{ 
                  width: '200px', height: '200px', top: '25px', left: '25px',
                  background: activeLayer === 'jacket' ? 'rgba(79,70,229,0.8)' : 'rgba(79,70,229,0.2)',
                  border: '2px solid var(--primary)',
                  boxShadow: activeLayer === 'jacket' ? 'var(--neon-glow-primary)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveLayer('jacket')}
                onMouseLeave={() => setActiveLayer(null)}
              ></div>

              {/* Cladding */}
              <div 
                className="position-absolute rounded-circle" 
                style={{ 
                  width: '140px', height: '140px', top: '55px', left: '55px',
                  background: activeLayer === 'cladding' ? 'rgba(6,182,212,0.8)' : 'rgba(6,182,212,0.2)',
                  border: '2px solid var(--accent)',
                  boxShadow: activeLayer === 'cladding' ? 'var(--neon-glow-accent)' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveLayer('cladding')}
                onMouseLeave={() => setActiveLayer(null)}
              ></div>

              {/* Core */}
              <div 
                className="position-absolute rounded-circle" 
                style={{ 
                  width: '60px', height: '60px', top: '95px', left: '95px',
                  background: activeLayer === 'core' ? '#f59e0b' : 'rgba(245,158,11,0.2)',
                  border: '2px solid #f59e0b',
                  boxShadow: activeLayer === 'core' ? '0 0 20px #f59e0b' : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveLayer('core')}
                onMouseLeave={() => setActiveLayer(null)}
              ></div>
              
              {/* Center Light */}
              <div className="position-absolute rounded-circle" style={{ width: '10px', height: '10px', top: '120px', left: '120px', background: '#fff', boxShadow: '0 0 10px #fff' }}></div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex flex-column gap-3">
              <div 
                className={`glass-card p-3 ${activeLayer === 'jacket' ? 'border-primary' : ''}`}
                onMouseEnter={() => setActiveLayer('jacket')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <h6 className="fw-bold text-primary m-0 mb-1">Outer Jacket</h6>
                <p className="text-muted m-0 fs-6">Protects the fiber against physical damage and moisture.</p>
              </div>
              
              <div 
                className={`glass-card p-3 ${activeLayer === 'cladding' ? 'border-accent' : ''}`}
                onMouseEnter={() => setActiveLayer('cladding')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <h6 className="fw-bold text-accent m-0 mb-1">Cladding</h6>
                <p className="text-muted m-0 fs-6">Reflects light back into the core, maintaining the signal over long distances.</p>
              </div>
              
              <div 
                className={`glass-card p-3 ${activeLayer === 'core' ? 'border-warning' : ''}`}
                onMouseEnter={() => setActiveLayer('core')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <h6 className="fw-bold text-warning m-0 mb-1">Core</h6>
                <p className="text-muted m-0 fs-6">The central, highly transparent region where the light wave travels.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card mt-2">
        <h4 className="fw-bold text-gradient mb-4">Total Internal Reflection</h4>
        <div className="d-flex justify-content-center p-4" style={{ background: 'var(--bg-dark)', borderRadius: '12px' }}>
          <div className="position-relative" style={{ width: '100%', height: '150px', background: 'rgba(6,182,212,0.1)', borderTop: '2px solid rgba(6,182,212,0.5)', borderBottom: '2px solid rgba(6,182,212,0.5)' }}>
            <span className="position-absolute text-muted" style={{ top: '-30px', left: '10px' }}>Cladding (n2)</span>
            <span className="position-absolute text-muted" style={{ bottom: '-30px', left: '10px' }}>Cladding (n2)</span>
            <span className="position-absolute text-accent" style={{ top: '60px', left: '10px', fontWeight: 'bold' }}>Core (n1 &gt; n2)</span>
            
            {/* Laser Line - SVG */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <motion.polyline 
                points="0,75 100,10 200,140 300,10 400,140 500,10 600,140"
                fill="none" 
                stroke="#f59e0b" 
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ filter: 'drop-shadow(0 0 8px #f59e0b)' }}
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 d-flex align-items-center gap-2 text-muted">
          <Info size={20} className="text-accent" />
          <p className="m-0">Light entering the core at a specific angle continues bouncing entirely within the boundary due to TIR.</p>
        </div>
      </div>

      <div className="glass-card mt-2 mb-4">
        <h4 className="fw-bold text-gradient mb-4">Single-Mode vs Multi-Mode Fiber</h4>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="d-flex flex-column p-4 h-100" style={{ background: 'var(--bg-dark)', borderRadius: '12px', border: '1px solid rgba(79,70,229,0.3)' }}>
              <h6 className="fw-bold text-primary mb-3 text-center fs-5">Single-Mode Fiber (SMF)</h6>
              <div className="position-relative w-100 d-flex justify-content-center align-items-center mb-4" style={{ height: '120px' }}>
                <div style={{ width: '100%', height: '80px', background: 'rgba(6,182,212,0.1)', border: '2px solid rgba(6,182,212,0.5)', position: 'relative' }}>
                  <span className="position-absolute text-muted" style={{ top: '-25px', left: '10px', fontSize: '0.8rem' }}>Cladding (125µm)</span>
                  <div style={{ width: '100%', height: '10px', background: 'rgba(245,158,11,0.2)', border: '1px solid #f59e0b', position: 'absolute', top: '33px' }}>
                     <span className="position-absolute text-warning" style={{ top: '-20px', left: '10px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>Core (9µm)</span>
                  </div>
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <motion.line 
                      x1="0" y1="38" x2="100%" y2="38"
                      stroke="#f59e0b" strokeWidth="3"
                      strokeDasharray="10 5"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      style={{ filter: 'drop-shadow(0 0 5px #f59e0b)' }}
                    />
                  </svg>
                </div>
              </div>
              <p className="text-muted fs-6 mb-0 text-center mt-3">
                Small core. Only allows one path for light so there is <strong className="text-white">zero modal dispersion</strong>, making it ideal for very long distances.
              </p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex flex-column p-4 h-100" style={{ background: 'var(--bg-dark)', borderRadius: '12px', border: '1px solid rgba(6,182,212,0.3)' }}>
              <h6 className="fw-bold text-accent mb-3 text-center fs-5">Multi-Mode Fiber (MMF)</h6>
              <div className="position-relative w-100 d-flex justify-content-center align-items-center mb-4" style={{ height: '120px' }}>
                <div style={{ width: '100%', height: '80px', background: 'rgba(6,182,212,0.1)', border: '2px solid rgba(6,182,212,0.5)', position: 'relative' }}>
                  <span className="position-absolute text-muted" style={{ top: '-25px', left: '10px', fontSize: '0.8rem' }}>Cladding (125µm)</span>
                  <div style={{ width: '100%', height: '50px', background: 'rgba(245,158,11,0.2)', border: '1px solid #f59e0b', position: 'absolute', top: '13px' }}>
                     <span className="position-absolute text-warning" style={{ top: '-20px', left: '10px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>Core (50µm)</span>
                  </div>
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                    <motion.line 
                      x1="0" y1="38" x2="100%" y2="38"
                      stroke="rgba(245,158,11,0.5)" strokeWidth="2" strokeDasharray="10 5"
                      initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.polyline 
                      points="0,38 50,15 150,61 250,15 350,61 450,15 550,61"
                      fill="none" stroke="#f59e0b" strokeWidth="2"
                      strokeDasharray="500" strokeDashoffset="500"
                      initial={{ strokeDashoffset: 500 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.polyline 
                      points="0,38 75,55 225,20 375,55 525,20"
                      fill="none" stroke="#fcd34d" strokeWidth="2"
                      strokeDasharray="500" strokeDashoffset="500"
                      initial={{ strokeDashoffset: 500 }} animate={{ strokeDashoffset: 0 }} transition={{ duration: 4, repeat: Infinity }}
                    />
                  </svg>
                </div>
              </div>
              <p className="text-muted fs-6 mb-0 text-center mt-3">
                Large core. Allows multiple paths (modes). This causes <strong className="text-white">modal dispersion</strong>, limiting its use to short distances.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
};

export default Diagrams;
