// src/sections/VibecodingSection.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';
import Aurora from '../components/Aurora';

const sectionStyles = {
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000'
};

const contentContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '3rem',
  maxWidth: '1600px',
  padding: '2rem',
  zIndex: 1,
  position: 'absolute',
  top: '2rem',
  left: '2rem',
  right: '2rem'
};

const leftContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  flex: '0 0 auto'
};

const centerContentStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1',
  minHeight: '80vh'
};

const rightContentStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  maxWidth: '900px',
  flex: '0 0 auto'
};

const titleStyles = {
  fontSize: '5rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  color: 'white',
  textTransform: 'uppercase',
  marginBottom: '2rem',
  maxWidth: '700px',
  letterSpacing: '2px'
};

const imageStyles = {
  width: '600px',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 15px 50px rgba(0,0,0,0.8)',
  filter: 'drop-shadow(0 0 15px rgb(88, 109, 75))'
};

const sideTextStyles = {
  fontSize: '2rem',
  fontWeight: '300',
  lineHeight: '1.5',
  color: '#d9f3ff',
  textAlign: 'left',
  maxWidth: '900px',
  letterSpacing: '0.5px',
  marginBottom: '2rem'
};

const videoStyles = {
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 15px 50px rgba(0,0,0,0.8)',
  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))'
};

const bottomTextStyles = {
  position: 'absolute',
  bottom: '7rem',
  left: '30%',
  transform: 'translateX(-50%)',
  fontSize: '2.8rem',
  fontWeight: '300',
  color: '#d9f3ff',
  textAlign: 'center',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  zIndex: 1,
  maxWidth: '80%'
};

export const VibecodingSection = ({ onNextSlide, onPrevSlide }) => {
  const [showBottomText, setShowBottomText] = useState(false);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowRight') {
      if (!showBottomText) {
        setShowBottomText(true);
      } else {
        onNextSlide();
      }
    } else if (event.key === 'ArrowLeft') {
      if (showBottomText) {
        setShowBottomText(false);
      } else {
        onPrevSlide();
      }
    }
  }, [showBottomText, onNextSlide, onPrevSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.section
      style={sectionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Fondo con Aurora (igual que QuestionSection) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Aurora />
      </div>

      {/* Contenido principal */}
      <motion.div
        style={contentContainerStyles}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
      >
        {/* Lado izquierdo: Solo Título */}
        <div style={leftContentStyles}>
          <h1 style={titleStyles}>
            <BlurText
              text="La Frontera Final: La Experiencia"
              animateBy="words"
              delay={150}
              direction="top"
            />
          </h1>
        </div>

        {/* Centro: Imagen */}
        <div style={centerContentStyles}>
          <motion.img
            src="/vibecoding1.png"
            alt="Vibecoding"
            style={imageStyles}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </div>

        {/* Lado derecho: Video y Texto */}
        <div style={rightContentStyles}>
          <motion.video
            src="/codigo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={videoStyles}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          
          <motion.p
            style={sideTextStyles}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Pero de nada sirve tener la mejor estrategia y la IA más potente si la experiencia de usarla es frustrante. La forma en que interactuamos con esta inteligencia es la última pieza del rompecabezas.
          </motion.p>
        </div>
      </motion.div>

      {/* Texto inferior */}
      {showBottomText && (
        <motion.div
          style={bottomTextStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            de construir tecnología que se siente intuitiva y en perfecta sintonía
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};