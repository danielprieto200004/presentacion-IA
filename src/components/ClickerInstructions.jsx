import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickerInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    // Mostrar instrucciones al inicio y ocultarlas después de 5 segundos
    setShowInstructions(true);
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const instructionStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '8px',
    fontSize: '14px',
    zIndex: 1000,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)'
  };

  const keyStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '2px 6px',
    borderRadius: '4px',
    margin: '0 2px',
    fontFamily: 'monospace',
    fontSize: '12px'
  };

  return (
    <AnimatePresence>
      {showInstructions && (
        <motion.div
          style={instructionStyles}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>
            🎯 Clicker Remoto / Teclado:
          </div>
          <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
            <div>Avanzar: <span style={keyStyles}>→</span> <span style={keyStyles}>↑</span> <span style={keyStyles}>Espacio</span> <span style={keyStyles}>Enter</span> <span style={keyStyles}>N</span></div>
            <div>Retroceder: <span style={keyStyles}>←</span> <span style={keyStyles}>↓</span> <span style={keyStyles}>P</span> <span style={keyStyles}>Esc</span></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ClickerInstructions;
