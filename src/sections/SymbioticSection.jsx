// src/sections/SymbioticSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LetterGlitchBackground from '../components/LetterGlitchBackground';
import BlurText from '../components/BlurText';

// --- Datos para los proyectos de Symbiotic ---
const projectsData = [
  { 
    id: 1, 
    title: "SCORE DE COMPETITIVIDAD",
    description: "Sistema de evaluación automática de competencias estudiantiles",
    videoSrc: "/score-competitividad.mp4" // Reemplazar con video real
  },
  { 
    id: 2, 
    title: "RUTA DE APRENDIZAJE",
    description: "Personalización inteligente del camino educativo",
    videoSrc: "/ruta-aprendizaje.mp4" // Reemplazar con video real
  },
  { 
    id: 3, 
    title: "QUERYCHAT",
    description: "Asistente inteligente para consultas académicas",
    videoSrc: "/querychat.mp4" // Reemplazar con video real
  },
  { 
    id: 5, 
    title: "ENCUESTAS ADN ESTUDIANTIL",
    description: "Análisis predictivo del perfil estudiantil",
    videoSrc: "/encuestas-adn.mp4" // Reemplazar con video real
  }
];

// --- Estilos ---
const sectionStyles = {
  minHeight: '100vh', 
  width: '100%', 
  display: 'flex', 
  alignItems: 'center',
  position: 'relative', 
  overflow: 'hidden', 
  backgroundColor: '#000000',
};

const glitchContainerStyles = {
  flex: 1, 
  height: '100vh', 
  position: 'relative',
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
};

const titleContainerStyles = {
  flex: 1, 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: '4rem'
};

const titleStyles = {
  fontSize: '5.5rem', 
  fontWeight: 'bold',
  lineHeight: '1.1', 
  color: 'white', 
  textTransform: 'uppercase',
  letterSpacing: '3px'
};

// --- NUEVO ESTILO PARA LOS VIDEOS REDONDEADOS ---
const projectVideoStyles = {
  position: 'absolute',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '15px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
  objectFit: 'cover'
};

// --- Componente ---
export const SymbioticSection = ({ onNextSlide, onPrevSlide }) => {
  const [projectIndex, setProjectIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Teclas para avanzar (clicker remoto y teclado)
      if (event.key === 'ArrowRight' || 
          event.key === 'ArrowUp' || 
          event.key === ' ' || // Espacio
          event.key === 'Space' ||
          event.key === 'PageDown' ||
          event.key === 'Enter' ||
          event.key === 'n' || 
          event.key === 'N') {
        if (projectIndex < projectsData.length - 1) {
          setProjectIndex(prev => prev + 1);
        } else {
          onNextSlide();
        }
      } 
      // Teclas para retroceder (clicker remoto y teclado)
      else if (event.key === 'ArrowLeft' || 
               event.key === 'ArrowDown' ||
               event.key === 'PageUp' ||
               event.key === 'Escape' ||
               event.key === 'p' || 
               event.key === 'P') {
        if (projectIndex > -1) {
          setProjectIndex(prev => prev - 1);
        } else {
          onPrevSlide();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projectIndex, onNextSlide, onPrevSlide]);

  return (
    <section style={sectionStyles}>
      <div style={glitchContainerStyles}>
        <LetterGlitchBackground />
        
        {/* Aquí renderizamos los videos de proyectos encima del fondo glitch */}
        <AnimatePresence>
          {projectIndex > -1 && (
            <motion.video
              key={projectIndex}
              src={projectsData[projectIndex].videoSrc}
              style={projectVideoStyles}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              autoPlay
              muted
              loop
              playsInline
              ref={(video) => {
                if (video) {
                  video.playbackRate = 1.0;
                }
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div style={titleContainerStyles} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column' }}>
          <h1 style={titleStyles}>
            <BlurText text="IA APLICADA A PROBLEMAS REALES DESDE" variant="large" />
          </h1>
          <img 
            src="/logo-symbiotic.png" 
            alt="Symbiotic Logo" 
            style={{
              height: '300px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
