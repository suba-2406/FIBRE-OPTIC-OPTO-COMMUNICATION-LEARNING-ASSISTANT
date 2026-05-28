import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, HelpCircle, Activity, Award } from 'lucide-react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

const Dashboard = () => {
  const doughnutData = {
    labels: ['Completed', 'Pending'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#4F46E5', 'rgba(255, 255, 255, 0.1)'],
      borderColor: ['#6366f1', 'rgba(255, 255, 255, 0.2)'],
      borderWidth: 1,
    }]
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Study Hours',
      data: [2, 3.5, 1.5, 4, 2.5, 5, 3],
      backgroundColor: '#06b6d4',
      borderRadius: 6,
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#f3f4f6' } },
    },
    scales: {
      y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      x: { ticks: { color: '#9ca3af' }, grid: { display: false } }
    }
  };

  const doughnutOptions = {
    responsive: true,
    plugins: { legend: { position: 'bottom', labels: { color: '#f3f4f6' } } },
    cutout: '75%'
  };

  const cards = [
    { title: 'Modules Done', value: '12/16', icon: BookOpen, color: 'var(--primary)' },
    { title: 'Quiz Score', value: '85%', icon: Award, color: 'var(--accent)' },
    { title: 'Study Streak', value: '7 Days', icon: Activity, color: '#f59e0b' },
    { title: 'Questions', value: '24', icon: HelpCircle, color: 'var(--secondary)' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex flex-column gap-4">
      
      {/* Stats Row */}
      <div className="row g-4">
        {cards.map((card, i) => (
          <div className="col-md-3" key={i}>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card d-flex align-items-center gap-3"
            >
              <div style={{
                background: `linear-gradient(135deg, ${card.color}40, ${card.color}10)`,
                padding: '16px', borderRadius: '16px', color: card.color
              }}>
                <card.icon size={28} />
              </div>
              <div>
                <p className="text-muted mb-1 fs-6">{card.title}</p>
                <h3 className="m-0 fw-bold">{card.value}</h3>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="row g-4 mt-1">
        <div className="col-md-8">
          <div className="glass-card h-100">
            <h5 className="fw-semibold mb-4 text-gradient">Weekly Activity</h5>
            <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
              <Bar data={barData} options={chartOptions} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="glass-card h-100 d-flex flex-column align-items-center justify-content-center">
            <h5 className="fw-semibold mb-4 text-gradient align-self-start">Course Progress</h5>
            <div style={{ width: '200px', height: '200px', position: 'relative' }}>
              <Doughnut data={doughnutData} options={doughnutOptions} />
              <div className="position-absolute top-50 start-50 translate-middle text-center" style={{ marginTop: '-15px' }}>
                <h3 className="fw-bold m-0 text-white">75%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recents */}
      <div className="glass-card mt-2">
        <h5 className="fw-semibold mb-4 text-gradient">Recently Viewed Topics</h5>
        <div className="d-flex flex-column gap-3">
          {['Total Internal Reflection (TIR)', 'Single-Mode vs Multi-Mode Fibers', 'Attenuation & Dispersion'].map((topic, idx) => (
            <div key={idx} className="d-flex justify-content-between align-items-center p-3" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <div className="d-flex align-items-center gap-3">
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', boxShadow: 'var(--neon-glow-accent)' }}></div>
                <span className="fw-medium">{topic}</span>
              </div>
              <button className="btn-3d btn-3d-secondary py-1 px-3 fs-6 rounded-pill" style={{ padding: '4px 16px' }}>Review</button>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default Dashboard;
