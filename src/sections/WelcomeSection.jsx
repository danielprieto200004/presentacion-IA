// src/sections/WelcomeSection.jsx
import React from 'react';
import LaserFlowBackground from '../components/LaserFlowBackground';

// --- Estilos ---
const welcomeStyles = {
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
    fontSize: '1.2rem',
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
const authorInfoStyles = {
    marginTop: '1.5rem',
    lineHeight: '1.6'
};
const nameStyles = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: 'white'
};
const roleStyles = {
    color: '#ffffffff',
    fontSize: '1.2rem'
};
const buttonStyles = {
    marginTop: '2rem',
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid white',
    color: 'white',
    padding: '0.8rem 1.8rem',
    fontSize: '1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.3s ease',
    maxWidth: '300px'
};
const logoStyles = {
    height: '100px',
    opacity: 0.8
};

// --- ESTILOS PARA LOS LOGOS ---
const topLogoContainerStyles = {
    position: 'absolute',
    top: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
};

const bottomLogoContainerStyles = {
    position: 'absolute',
    bottom: '2rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
};


// --- Componente ---
export const WelcomeSection = ({ onStart }) => {
  return (
    <section style={welcomeStyles}>
      <LaserFlowBackground />
      
      {/* Contenedor para el logo de Symbiotic ARRIBA */}
      <div style={topLogoContainerStyles}>
        <img src="/logo-symbiotic.png" alt="Logo Symbiotic" style={logoStyles} />
      </div>

      <div style={contentStyles}>
        <p style={eventTitleStyles}>III JORNADA DE INTELIGENCIA ARTIFICIAL DEL MINUTO DE DIOS</p>
        <h1 style={mainTitleStyles}>Learning Driven By IA</h1>
        
        <div style={authorInfoStyles}>
          <p style={nameStyles}>Daniel Mateo Prieto</p>
          <p style={roleStyles}>Analista de datos Vicerrectoría Académica BCB</p>
          <p style={roleStyles}>Manager, UNIMINUTO Symbiotic</p>
        </div>

        <button
          style={buttonStyles}
          onClick={onStart}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
        >
          Empezar Experiencia
        </button>
      </div>

      {/* Contenedor para el logo de Uniminuto ABAJO */}
      <div style={bottomLogoContainerStyles}>
        <img src="/logo-uniminuto.png" alt="Logo UNIMINUTO" style={logoStyles} />
      </div>
    </section>
  );
};