import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  const questions = [
    {
      question: "What is the primary principle behind optical fiber communication?",
      options: ["Refraction", "Total Internal Reflection", "Diffraction", "Dispersion"],
      answer: 1
    },
    {
      question: "Which type of fiber is best suited for long-distance communication?",
      options: ["Multi-mode step-index", "Multi-mode graded-index", "Single-mode", "Plastic optical fiber"],
      answer: 2
    },
    {
      question: "The refractive index of the core must be ____ the cladding for TIR to occur.",
      options: ["Equal to", "Less than", "Greater than", "Independent of"],
      answer: 2
    },
    {
      question: "What causes light pulses to spread out over time in a fiber, limiting bandwidth?",
      options: ["Attenuation", "Dispersion", "Scattering", "Absorption"],
      answer: 1
    },
    {
      question: "Which of the following is a common light source used in optical transmitters?",
      options: ["Photodiode", "PIN diode", "LASER", "Coaxial cable"],
      answer: 2
    },
    {
      question: "Attenuation in an optical fiber is usually measured in which unit?",
      options: ["dB/km", "Watts", "Ohms/km", "Volts"],
      answer: 0
    },
    {
      question: "Which component converts optical signals back into electrical signals?",
      options: ["Transmitter", "Receiver", "Amplifier", "Multiplexer"],
      answer: 1
    }
  ];

  const handleSelect = (idx) => {
    if (isAnswered) return;
    setSelected(idx);
    setIsAnswered(true);
    
    if (idx === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1);
        setSelected(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-100 d-flex flex-column align-items-center justify-content-center">
      
      {!showResult ? (
        <div className="glass-card" style={{ width: '100%', maxWidth: '600px' }}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="text-muted m-0">Question {currentQ + 1} of {questions.length}</h5>
            <div className="d-flex gap-1">
              {questions.map((_, i) => (
                <div key={i} style={{ 
                  width: '30px', height: '6px', borderRadius: '3px',
                  background: i <= currentQ ? 'var(--primary)' : 'rgba(255,255,255,0.1)'
                }}></div>
              ))}
            </div>
          </div>

          <h3 className="fw-bold mb-4">{questions[currentQ].question}</h3>

          <div className="d-flex flex-column gap-2">
            {questions[currentQ].options.map((opt, idx) => {
              let btnClass = "quiz-option";
              let icon = null;

              if (isAnswered) {
                if (idx === questions[currentQ].answer) {
                  btnClass += " bg-success bg-opacity-25 border-success";
                  icon = <CheckCircle className="text-success" />;
                } else if (idx === selected) {
                  btnClass += " bg-danger bg-opacity-25 border-danger";
                  icon = <XCircle className="text-danger" />;
                }
              } else if (selected === idx) {
                btnClass += " selected";
              }

              return (
                <motion.div 
                  whileHover={!isAnswered ? { scale: 1.02 } : {}}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  key={idx} 
                  className={btnClass}
                  onClick={() => handleSelect(idx)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-5">{opt}</span>
                    {icon}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ) : (
        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="glass-card text-center text-white" style={{ width: '100%', maxWidth: '500px', padding: '40px' }}>
          <div style={{
            width: '120px', height: '120px', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--neon-glow-primary)'
          }}>
            <h1 className="m-0 fw-bold">{score}/{questions.length}</h1>
          </div>
          <h2 className="fw-bold mb-3">Quiz Completed!</h2>
          <p className="text-muted fs-5 mb-4">
            {score === questions.length ? "Excellent work! You've mastered this topic." : "Good effort. Review the notes and try again!"}
          </p>
          <button 
            className="btn-3d w-100"
            onClick={() => {
              setCurrentQ(0); setSelected(null); setScore(0); setShowResult(false); setIsAnswered(false);
            }}
          >
            Retry Quiz
          </button>
        </motion.div>
      )}

    </motion.div>
  );
};

export default Quiz;
