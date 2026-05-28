import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I am your AI Fiber Optic Learning Assistant. Ask me anything about single-mode fibers, TIR, attenuation, or anything else!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateMockResponse = (inputText) => {
    const text = inputText.toLowerCase();
    
    if (text.includes("hello") || text.includes("hi ") || text === "hi" || text.includes("hey")) {
      return "Hello there! I'm your FiberTutor AI. What would you like to learn about fiber optics today?";
    }
    if (text.includes("single") && text.includes("mode") || text.includes("smf")) {
      return "Single-Mode Fiber (SMF) has a very small core (around 9 µm) which forces light to travel in a single straight path. This eliminates modal dispersion, making it perfect for long-distance, high-speed communication.";
    }
    if (text.includes("multi") && text.includes("mode") || text.includes("mmf")) {
      return "Multi-Mode Fiber (MMF) has a larger core (50 µm to 62.5 µm) that allows multiple paths (or modes) of light to travel. It's cheaper but suffers from modal dispersion, so it's only used for short distances like inside buildings.";
    }
    if (text.includes("tir") || text.includes("total internal reflection")) {
      return "Total Internal Reflection (TIR) is the magic behind optical fibers! It happens when light traveling in the core hits the cladding boundary at a steep enough angle, causing 100% of the light to bounce back into the core rather than escaping.";
    }
    if (text.includes("attenuation") || text.includes("loss")) {
      return "Attenuation refers to the loss of signal strength as light travels through the fiber. It's measured in dB/km and is primarily caused by Rayleigh scattering and impurities in the glass absorbing the light.";
    }
    if (text.includes("dispersion") || text.includes("spread")) {
      return "Dispersion is when light pulses spread out as they travel down the fiber. If they spread too much, they overlap with adjacent pulses, causing errors. Chromatic and Modal dispersion are the two main types.";
    }
    if (text.includes("core") || text.includes("cladding")) {
      return "The core is the inner glass layer where the light travels. The cladding surrounds it and must have a slightly lower refractive index to create the Total Internal Reflection that keeps light trapped inside the core!";
    }
    if (text.includes("thank")) {
      return "You're very welcome! If you have any more questions about fiber optics, feel free to ask.";
    }
    
    return "That's a great question! As an offline interactive demo, my knowledge base is focused specifically on core fiber optic concepts like TIR, attenuation, dispersion, and fiber types (single-mode/multi-mode). Try asking me about one of those!";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate network delay for AI response
    setTimeout(() => {
      const responseContent = generateMockResponse(userMessage.content);
      setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
      setIsTyping(false);
    }, 1500);

  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-100 d-flex flex-column">
      
      <div className="glass-card flex-grow-1 d-flex flex-column" style={{ overflow: 'hidden' }}>
        
        {/* Header */}
        <div className="border-bottom border-secondary pb-3 mb-3 d-flex align-items-center gap-3">
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--neon-glow-accent)'
          }}>
            <Bot className="text-white" size={24} />
          </div>
          <div>
            <h5 className="m-0 fw-bold">FiberTutor AI</h5>
            <p className="m-0 text-muted" style={{ fontSize: '12px' }}>Online</p>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow-1 overflow-auto pe-2 custom-scrollbar" style={{ display: 'flex', flexDirection: 'column' }}>
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`d-flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: msg.role === 'user' ? 'var(--primary)' : 'var(--accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: '10px'
              }}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`chat-bubble ${msg.role === 'user' ? 'chat-user' : 'chat-ai'}`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="d-flex gap-2">
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'
              }}>
                <Bot size={16} />
              </div>
              <div className="chat-bubble chat-ai typing-indicator d-flex align-items-center" style={{ height: '44px', width: '60px', justifyContent: 'center' }}>
                <span></span><span></span><span></span>
              </div>
            </motion.div>
          )}
          <div ref={endOfMessagesRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="mt-3 position-relative">
          <input 
            type="text" 
            className="input-glass" 
            placeholder="Ask a question about Fiber Optics..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ paddingRight: '60px', borderRadius: '24px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-main)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px 20px', width: '100%', outline: 'none' }}
          />
          <button 
            type="submit" 
            className="position-absolute btn btn-link p-0 text-accent" 
            style={{ right: '16px', top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'transparent' }}
            disabled={!input.trim() || isTyping}
          >
            <Send size={24} />
          </button>
        </form>

      </div>
    </motion.div>
  );
};

export default Chatbot;
