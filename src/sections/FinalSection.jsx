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

const eventTitleStyles = {
    color: '#ffffffff',
    fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
    fontWeight: '400',
    letterSpacing: '2px'
};

const mainTitleStyles = {
    fontSize: '4rem',
    fontWeight: 'bold',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    color: 'white'
};

const thanksStyles = {
    fontSize: '6rem',
    fontWeight: '300',
    color: '#d9f3ff',
    textAlign: 'center',
    marginBottom: '2rem',
    letterSpacing: '3px'
};

const authorInfoStyles = {
    marginTop: '1.5rem',
    lineHeight: '1.6'
};

const nameStyles = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white'
};

const roleStyles = {
    color: '#ffffffff',
    fontSize: 'clamp(1.8rem, 3vw, 2.2rem)'
};

const logoStyles = {
    height: 'clamp(60px, 8vw, 200px)',
    width: 'auto',
    opacity: 0.8,
    maxWidth: '100%'
};

// --- ESTILOS PARA LOS LOGOS ---
const topLogoContainerStyles = {
    position: 'absolute',
    top: 'clamp(1rem, 3vw, 2rem)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    padding: '0 1rem'
};


const bottomLogoContainerStyles = {
    position: 'absolute',
    bottom: 'clamp(1rem, 3vw, 2rem)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2,
    padding: '0 1rem'
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
      
      {/* Contenedor para el logo de Symbiotic ARRIBA */}
      <div style={topLogoContainerStyles}>
        <img src="/logo-symbiotic.png" alt="Logo Symbiotic" style={logoStyles} />
      </div>

      <div style={contentStyles}>
        <h1 style={mainTitleStyles}>Learning Driven By IA</h1>
        
        <motion.p
          style={thanksStyles}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          ¡Gracias!
        </motion.p>
        
        <div style={authorInfoStyles}>
          <p style={nameStyles}>Daniel Mateo Prieto</p>
          <p style={roleStyles}>Profesional en Data Analytics Vicerrectoría Académica BCB</p>
          <p style={roleStyles}>Manager, UNIMINUTO Symbiotic</p>
        </div>
      </div>

      {/* Contenedor para el logo de Uniminuto ABAJO */}
      <div style={bottomLogoContainerStyles}>
        <img src="/logo-uniminuto.png" alt="Logo UNIMINUTO" style={logoStyles} />
      </div>
    </motion.section>
  );
};
