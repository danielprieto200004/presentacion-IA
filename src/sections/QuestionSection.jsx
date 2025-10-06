// src/sections/QuestionSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';
import Aurora from '../components/Aurora';

const sectionStyles = {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000',
  aspectRatio: '16/9'
};

const contentContainerStyles = {
  textAlign: 'center',
  maxWidth: '1200px',
  padding: '2rem',
  zIndex: 1
};

const titleStyles = {
  fontSize: '6.5rem',
  fontWeight: 'bold',
  lineHeight: '1.1',
  color: 'white',
  textTransform: 'uppercase',
  marginBottom: '2rem',
  letterSpacing: '3px'
};

const questionStyles = {
  fontSize: '5.2rem',
  fontWeight: '300',
  lineHeight: '1.2',
  color: '#ffffff',
  fontStyle: 'italic',
  letterSpacing: '2px',
  textShadow: '0 0 20px rgb(255, 255, 255)'
};

export const QuestionSection = () => {
  return (
    <motion.section
      style={sectionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Fondo con Aurora */}
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

      {/* Una sola frase centrada */}
      <motion.div
        style={contentContainerStyles}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
      >
        <h1 style={titleStyles}>
          <BlurText
            text="Una IA puede darte una respuesta."
            animateBy="words"
            delay={150}
            direction="top"
          />
        </h1>
        
        <motion.h2
          style={questionStyles}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        >
          <BlurText
            text="Pero... ¿sabes hacer la pregunta correcta?"
            animateBy="words"
            delay={100}
            direction="top"
          />
        </motion.h2>
      </motion.div>
    </motion.section>
  );
};
