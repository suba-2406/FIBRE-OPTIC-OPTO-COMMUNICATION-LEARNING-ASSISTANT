import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, X, ArrowRight } from 'lucide-react';

const Notes = () => {
  const [selectedNote, setSelectedNote] = useState(null);

  const notesData = [
    {
      title: "Introduction to Fiber Optics",
      summary: "Learn the basics of optical fibers and their applications in modern communication.",
      content: "Optical fibers are transparent, flexible fibers made of high-quality glass (silica) or plastic. They act as a waveguide to transmit light between the two ends of the fiber. <br/><br/>They are widely used in fiber-optic communications, which permits transmission over longer distances and at higher bandwidths (data rates) than electrical wires. Fibers are used instead of metal wires because signals travel along them with less loss, and they are immune to electromagnetic interference, a common problem with copper wires.<br/><br/><strong>Key Advantages:</strong><ul><li>High bandwidth</li><li>Low attenuation</li><li>Immunity to electromagnetic interference</li><li>Lightweight and flexible</li></ul>"
    },
    {
      title: "Total Internal Reflection (TIR)",
      summary: "Understand the core physical principle that keeps light inside the fiber.",
      content: "The core principle behind optical fibers is <b>Total Internal Reflection (TIR)</b>. When light traveling in an optically dense medium (like glass) hits a boundary with a less dense medium (like air or cladding) at a steep angle (larger than the critical angle), the light is completely reflected back into the denser medium.<br/><br/>This is how light is continuously guided down the core of the fiber without escaping through the sides. For TIR to occur, two conditions must be met: <ol><li>The light must travel from a medium with a higher refractive index to one with a lower refractive index.</li><li>The angle of incidence must be greater than the critical angle.</li></ol><br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Total_internal_reflection.svg/400px-Total_internal_reflection.svg.png' style='max-width:100%; border-radius:10px; margin-top:10px; background: rgba(255,255,255,0.9); padding: 10px;' alt='TIR Diagram'/>"
    },
    {
      title: "Core and Cladding structure",
      summary: "Explore the physical layers: Core, Cladding, and Coating.",
      content: "A standard optical fiber consists of three main concentric layers:<br/><br/><b>1. Core:</b> The inner light-guiding region. It has a higher refractive index (n1).<br/><b>2. Cladding:</b> The surrounding protective layer. It has a slightly lower refractive index (n2) to enable TIR.<br/><b>3. Coating / Buffer:</b> An outer plastic layer that protects the delicate glass from physical damage and moisture.<br/><br/>The refractive index difference between the core and the cladding is typically very small (around 1%), but sufficient to confine the light.<br/><br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Optical_fiber_cross_section_with_layers.png/400px-Optical_fiber_cross_section_with_layers.png' style='max-width:100%; border-radius:10px; margin-top:10px; background: rgba(255,255,255,0.9); padding: 5px;' alt='Core and Cladding'/>"
    },
    {
      title: "Single-Mode vs Multi-Mode",
      summary: "Compare the two main types of optical fibers and their uses.",
      content: "<b>Single-Mode Fibers (SMF)</b> have a very small core diameter (typically 8-10 µm) which allows only one mode of light (the fundamental mode) to propagate. Because there is no modal dispersion, SMFs can transmit data over very long distances at high speeds. They typically use expensive laser diodes as light sources.<br/><br/><b>Multi-Mode Fibers (MMF)</b> have a much larger core (50-100 µm), allowing multiple modes or paths for the light to travel. They are cheaper and use LEDs or VCSELs as light sources, but suffer from modal dispersion, limiting their use to short distances (like inside a data center or building).<br/><br/><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Optical_fiber_modes.svg/500px-Optical_fiber_modes.svg.png' style='max-width:100%; border-radius:10px; background: rgba(255,255,255,0.8); padding: 10px; margin-top:10px;' alt='Modes'/>"
    },
    {
      title: "Signal Attenuation",
      summary: "Discover why optical signals lose power over long distances.",
      content: "<b>Attenuation</b> is the loss of optical power as light travels through the fiber. It is usually measured in decibels per kilometer (dB/km). Despite being very clear, glass still attenuates light over tens of kilometers.<br/><br/><b>Primary Causes:</b><br/><ul><li><b>Material Absorption:</b> Impurities in the glass (like OH- ions) or the silica molecule itself absorbing light energy.</li><li><b>Rayleigh Scattering:</b> Microscopic density variations in the glass that scatter light in all directions. This is the dominant loss mechanism in modern fibers.</li><li><b>Bending Losses:</b> macroscopic bends (tight physical curves in the cable) and microscopic bends (nano-scale deformities) that cause light to leak out of the core.</li></ul>"
    },
    {
      title: "Dispersion in Fibers",
      summary: "Learn how pulses of light spread out, limiting data rates.",
      content: "<b>Dispersion</b> causes light pulses to spread out over time. If pulses spread too much, they overlap with adjacent pulses (Inter-Symbol Interference), causing errors and limiting the maximum data rate.<br/><br/><b>Types of dispersion include:</b><br/><ul><li><b>Modal Dispersion:</b> Occurs in multi-mode fibers because different modes (paths) take different amounts of time to travel the fiber length.</li><li><b>Chromatic Dispersion:</b> A material property where different wavelengths (colors) of light travel at slightly different speeds through the glass. Even a pure laser has a finite spectral width.</li><li><b>Polarization Mode Dispersion (PMD):</b> Slight ovality in the fiber causes different polarization states of light to travel at different speeds.</li></ul>"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="glass-card mb-4" style={{ background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(6,182,212,0.1))' }}>
        <div className="d-flex align-items-center gap-3">
          <Book className="text-accent" size={32} />
          <div>
            <h4 className="m-0 fw-bold text-white">Fiber Optics Notes</h4>
            <p className="m-0 text-muted">Master the core concepts of optical communications</p>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {notesData.map((note, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <motion.div 
              className="glass-card h-100 d-flex flex-column align-items-start justify-content-between p-4"
              whileHover={{ y: -5, boxShadow: 'var(--neon-glow-primary)' }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <h5 className="mb-3 fw-bold text-gradient" style={{ minHeight: '48px' }}>{note.title}</h5>
                <p className="text-muted mb-4 fs-6">{note.summary}</p>
              </div>
              <button 
                className="btn btn-primary d-flex align-items-center gap-2 mt-auto w-100 justify-content-center"
                style={{ background: 'linear-gradient(45deg, var(--primary), var(--accent))', border: 'none' }}
                onClick={() => setSelectedNote(note)}
              >
                Learn Topic <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal Overlay for Detailed Notes */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{ background: 'rgba(15,23,42,0.85)', zIndex: 1050, backdropFilter: 'blur(5px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNote(null)}
          >
            <motion.div 
              className="glass-card position-relative p-4 p-md-5 overflow-auto custom-scrollbar"
              style={{ width: '90%', maxWidth: '800px', maxHeight: '85vh', background: 'var(--bg-dark)', border: '1px solid var(--primary-light)' }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="btn btn-link text-muted position-absolute top-0 end-0 m-3 p-1 rounded-circle hover-bg-light"
                onClick={() => setSelectedNote(null)}
              >
                <X size={24} />
              </button>
              
              <h3 className="fw-bold text-gradient mb-4 display-6 fs-3 pe-4">{selectedNote.title}</h3>
              <div 
                className="text-light lh-lg fs-5 custom-html-content"
                dangerouslySetInnerHTML={{ __html: selectedNote.content }}
              ></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Notes;

