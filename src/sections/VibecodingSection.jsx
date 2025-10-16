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

// Estilos de texto lateral removidos

const videoStyles = {
  width: '100%',
  maxWidth: '800px',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 15px 50px rgba(0,0,0,0.8)',
  filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.2))'
};

const reflectionContainerStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',
  maxWidth: '1800px',
  padding: '1rem',
  zIndex: 10
};

const reflectionLeftStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flex: '1',
  minHeight: '80vh'
};

const reflectionCenterStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1',
  minHeight: '80vh'
};

const reflectionRightStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1',
  minHeight: '80vh'
};

const reflectionImageStyles = {
  width: '800px',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
};

const reflectionTextStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, 200px)',
  fontSize: '2.5rem',
  fontWeight: '400',
  color: '#d9f3ff',
  textAlign: 'center',
  letterSpacing: '1px',
  lineHeight: '1.4',
  zIndex: 15,
  maxWidth: '80%',
  textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
};


export const VibecodingSection = ({ onNextSlide, onPrevSlide }) => {
  const [showReflection, setShowReflection] = useState(false);
  const [showReflectionText, setShowReflectionText] = useState(false);

  const reflectionImages = ['/zootopia1.png', '/zootopia2.png', '/zootopia3.png'];

  const handleKeyDown = useCallback((event) => {
    // Teclas para avanzar (clicker remoto y teclado)
    if (event.key === 'ArrowRight' || 
        event.key === 'ArrowUp' || 
        event.key === ' ' || // Espacio
        event.key === 'Space' ||
        event.key === 'PageDown' ||
        event.key === 'Enter' ||
        event.key === 'n' || 
        event.key === 'N') {
      if (!showReflection) {
        setShowReflection(true);
      } else if (!showReflectionText) {
        setShowReflectionText(true);
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
      if (showReflectionText) {
        setShowReflectionText(false);
      } else if (showReflection) {
        setShowReflection(false);
      } else {
        onPrevSlide();
      }
    }
  }, [showReflection, showReflectionText, onNextSlide, onPrevSlide]);

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
      {!showReflection && (
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
              text="el sentir Técnologico "
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
          
          {/* Texto debajo del video */}
          <motion.div
            style={{
              marginTop: '3rem',
              fontSize: '4rem',
              fontWeight: '500',
              color: '#d9f3ff',
              textAlign: 'center',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              maxWidth: '100%',
              lineHeight: '1.4'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p>
              de construir tecnología que se siente intuitiva y en perfecta sintonía
            </p>
          </motion.div>
        </div>
      </motion.div>
      )}

      {/* Imágenes de reflexión */}
      {showReflection && !showReflectionText && (
        <motion.div
          style={reflectionContainerStyles}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Lado izquierdo: Primera imagen */}
          <div style={reflectionLeftStyles}>
            <motion.img
              src={reflectionImages[0]}
              alt="Reflexión 1"
              style={reflectionImageStyles}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            />
          </div>

          {/* Centro: Segunda imagen */}
          <div style={reflectionCenterStyles}>
            <motion.img
              src={reflectionImages[1]}
              alt="Reflexión 2"
              style={reflectionImageStyles}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            />
          </div>

          {/* Lado derecho: Tercera imagen */}
          <div style={reflectionRightStyles}>
            <motion.img
              src={reflectionImages[2]}
              alt="Reflexión 3"
              style={reflectionImageStyles}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}

      {/* Texto de reflexión expandido por toda la pantalla */}
      {showReflectionText && (
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            padding: '4rem'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: '300',
            color: '#d9f3ff',
            textAlign: 'center',
            letterSpacing: '2px',
            lineHeight: '1.2',
            textShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
            maxWidth: '90%',
            background: 'linear-gradient(135deg, #d9f3ff 0%, #ffffff 50%, #d9f3ff 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.15))'
          }}>
            Ese es el sentido de Learning Driven by IA: no que la IA piense por nosotros, sino que nos potencie para aprender mejor y decidir mejor
          </h1>
        </motion.div>
      )}

    </motion.section>
  );
};