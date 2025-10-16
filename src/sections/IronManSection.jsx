// src/sections/IronManSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Squares from '../components/Squares';
import BlurText from '../components/BlurText';

// --- Datos para los videos de Iron Man ---
const ironManVideos = [
  { 
    id: 1, 
    title: "LA HERRAMIENTA",
    description: "Iron Man interactuando con JARVIS - La IA como herramienta",
    videoSrc: "/ironman-jarvis-1.mp4"
  },
  { 
    id: 2, 
    title: "EL ARQUITECTO",
    description: "Iron Man diseñando y creando - El humano como arquitecto",
    videoSrc: "/ironman-jarvis-2.mp4"
  }
];

// --- Contenido reflexivo (removido) ---

// --- Estilos (igual que RPASection) ---
const sectionStyles = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000'
};

const backgroundContainerStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0
};

const videoContainerStyles = {
  flex: 1,
  height: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  zIndex: 1
};

const contentContainerStyles = {
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '2rem',
  paddingTop: '1rem',
  zIndex: 1
};

const videoStyles = {
  maxWidth: '80%',
  maxHeight: '70%',
  borderRadius: '15px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
  objectFit: 'cover'
};

const titleStyles = {
  fontSize: '5.5rem',
  fontWeight: 'bold',
  lineHeight: '1.2',
  color: 'white',
  textTransform: 'uppercase',
  marginBottom: '2rem',
  marginTop: '0rem',
  wordBreak: 'break-word',
  letterSpacing: '2px'
};

// Estilos de texto reflexivo removidos


// --- Componente ---
export const IronManSection = ({ onNextSlide, onPrevSlide }) => {
  const handleClick = (event) => {
    // Si se hace clic en la mitad derecha de la pantalla, avanza
    // Si se hace clic en la mitad izquierda, retrocede
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const middleX = rect.width / 2;
    
    if (clickX > middleX) {
      onNextSlide?.();
    } else {
      onPrevSlide?.();
    }
  };

  // Navegación simplificada - solo avanza/retrocede
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
        onNextSlide?.();
      } 
      // Teclas para retroceder (clicker remoto y teclado)
      else if (event.key === 'ArrowLeft' || 
               event.key === 'ArrowDown' ||
               event.key === 'PageUp' ||
               event.key === 'Escape' ||
               event.key === 'p' || 
               event.key === 'P') {
        onPrevSlide?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNextSlide, onPrevSlide]);

  return (
    <motion.section
      style={sectionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Fondo con Squares */}
      <div style={backgroundContainerStyles}>
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={30}
          borderColor="rgba(31, 148, 47, 0.3)"
          hoverFillColor="rgba(255, 107, 107, 0.1)"
        />
      </div>

      {/* Videos a la izquierda */}
      <motion.div
        style={videoContainerStyles}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        {ironManVideos.map((video, index) => (
          <motion.video
            key={video.id}
            src={video.videoSrc}
            style={videoStyles}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
            autoPlay
            muted
            loop
            playsInline
          />
        ))}
      </motion.div>

      {/* Contenido a la derecha */}
      <motion.div
        style={contentContainerStyles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div>
          <h1 style={titleStyles}>
            <BlurText
              text="La Herramienta vs. El Arquitecto"
              animateBy="words"
              delay={120}
              direction="top"
            />
          </h1>
        </div>
      </motion.div>
    </motion.section>
  );
};