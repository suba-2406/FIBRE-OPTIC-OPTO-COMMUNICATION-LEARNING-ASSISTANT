import React from 'react';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Progress = () => {
  const lineData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Quiz Scores (%)',
        data: [40, 60, 55, 85, 95],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.5)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { color: '#f3f4f6' } },
    },
    scales: {
      y: { min: 0, max: 100, ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.05)' } },
      x: { ticks: { color: '#9ca3af' }, grid: { display: false } }
    }
  };

  const skills = [
    { name: 'Basic Principles', level: 90 },
    { name: 'Types of Fibers', level: 75 },
    { name: 'Transmission Losses', level: 60 },
    { name: 'Optical Links', level: 40 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex flex-column gap-4">
      <div className="glass-card">
        <h4 className="fw-bold text-gradient mb-4">Performance Insights</h4>
        <div style={{ height: '300px', display: 'flex', justifyContent: 'center' }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>

      <div className="glass-card">
        <h4 className="fw-bold text-gradient mb-4">Skill Tracker</h4>
        <div className="d-flex flex-column gap-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-medium">{skill.name}</span>
                <span className="text-accent">{skill.level}%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: `${skill.level}%` }} 
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: '4px', boxShadow: 'var(--neon-glow-accent)' }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Progress;
