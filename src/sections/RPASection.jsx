// src/sections/RPASection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';
import Squares from '../components/Squares';

const sectionStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000',
  aspectRatio: '16/9'
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
  flex: '0 0 50%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1
};

const videoStyles = {
  maxWidth: '100%',
  maxHeight: '85%',
  borderRadius: '15px',
  boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
  objectFit: 'cover'
};

const contentContainerStyles = {
  flex: '0 0 50%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '2rem',
  zIndex: 1
};

const titleStyles = {
  fontSize: '5.5rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '3px'
};

const descriptionStyles = {
  fontSize: '3rem',
  color: '#d9f3ff',
  lineHeight: '1.5',
  letterSpacing: '0.5px',
  maxWidth: '600px',
  textAlign: 'left'
};

export const RPASection = () => {
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
          borderColor="rgba(21, 125, 16, 0.3)"
          hoverFillColor="rgba(35,168,255,0.1)"
        />
      </div>

      {/* Video a la izquierda */}
      <motion.div
        style={videoContainerStyles}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <video
          style={videoStyles}
          autoPlay
          muted
          loop
          playsInline
          ref={(video) => {
            if (video) {
              video.playbackRate = 2.0; // 1.5x más rápido
            }
          }}
        >
          <source src="/Quantum.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
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
              text="Automatización Inteligente / RPA"
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
