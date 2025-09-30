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

// --- Contenido reflexivo ---
const reflectiveContent = [
  "Pero hay algo fundamental que no puede hacer por sí solo.",
  "No puede tener intención estratégica.",
  "No tiene curiosidad humana.",
  "No sabe cuál es el siguiente gran problema que vale la pena resolver."
];

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
  alignItems: 'center',
  padding: '2rem',
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
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontWeight: 'bold',
  lineHeight: '1.2',
  color: 'white',
  textTransform: 'uppercase',
  marginBottom: '3rem',
  marginTop: '2rem',
  wordBreak: 'break-word'
};

const reflectiveTextStyles = {
  fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
  color: '#d9f3ff',
  lineHeight: '1.6',
  letterSpacing: '0.5px',
  textAlign: 'left',
  fontStyle: 'italic',
  maxWidth: '400px',
  fontWeight: '300'
};


// --- Componente ---
export const IronManSection = ({ onNextSlide, onPrevSlide }) => {
  const [reflectionIndex, setReflectionIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        if (reflectionIndex < reflectiveContent.length - 1) {
          setReflectionIndex(prev => prev + 1);
        } else {
          onNextSlide?.();
        }
      } else if (event.key === 'ArrowLeft') {
        if (reflectionIndex > -1) {
          setReflectionIndex(prev => prev - 1);
        } else {
          onPrevSlide?.();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [reflectionIndex, onNextSlide, onPrevSlide]);

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
          
          <AnimatePresence mode="wait">
            {reflectionIndex >= 0 && (
              <motion.p
                key={reflectionIndex}
                style={reflectiveTextStyles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {reflectiveContent[reflectionIndex]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
};