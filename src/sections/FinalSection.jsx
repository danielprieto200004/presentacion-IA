// src/sections/FinalSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import LaserFlowBackground from '../components/LaserFlowBackground';

const sectionStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000',
  aspectRatio: '16/9'
};

const contentStyles = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  alignItems: 'center',
  width: '100%'
};

const titleStyles = {
    fontSize: '4rem',
    fontWeight: 'bold',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    marginBottom: '2rem'
};

const thanksStyles = {
    fontSize: '3rem',
    fontWeight: '300',
    color: '#d9f3ff',
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '3px'
};

const nameStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: '1rem'
};

const roleStyles = {
    fontSize: '1.4rem',
    color: '#d9f3ff',
    textAlign: 'center',
    lineHeight: '1.6'
};

const topTitleContainerStyles = {
    position: 'absolute',
    top: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
};

const logoStyles = {
    height: '120px',
    opacity: 0.9
};


// --- ESTILOS PARA LOS LOGOS ---
const bottomLogoContainerStyles = {
    position: 'absolute',
    bottom: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3rem',
    zIndex: 2
};

export const FinalSection = ({ onNextSlide, onPrevSlide }) => {
  return (
    <motion.section
      style={sectionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <LaserFlowBackground />
      
      {/* Título arriba */}
      <motion.div
        style={topTitleContainerStyles}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 style={titleStyles}>LEARNING DRIVEN BY IA</h1>
      </motion.div>
      
      <div style={contentStyles}>
        <motion.p
          style={thanksStyles}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          ¡Gracias!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p style={nameStyles}>Daniel Mateo Prieto</p>
          <p style={roleStyles}>Analista de datos Vicerrectoría Académica BCB</p>
        </motion.div>
      </div>

      {/* Contenedor para ambos logos ABAJO uno al lado del otro */}
      <motion.div
        style={bottomLogoContainerStyles}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <motion.img
          src="/logo-symbiotic.png"
          alt="Logo Symbiotic"
          style={logoStyles}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        />
        <motion.img
          src="/logo-uniminuto.png"
          alt="Logo UNIMINUTO"
          style={logoStyles}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
      </motion.div>
    </motion.section>
  );
};
