import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Diagrams from './pages/Diagrams';
import Quiz from './pages/Quiz';
import Chatbot from './pages/Chatbot';
import Progress from './pages/Progress';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="bg-glow"></div>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <TopNav />
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/signup" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/diagrams" element={<Diagrams />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/chat" element={<Chatbot />} />
              <Route path="/progress" element={<Progress />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
