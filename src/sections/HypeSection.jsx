// src/sections/HypeSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LetterGlitchBackground from '../components/LetterGlitchBackground';
import BlurText from '../components/BlurText';

// --- Datos para las tarjetas (de tu carpeta /public) ---
const cardsData = [
  { id: 1, src: '/llm-chatgpt.png' },
  { id: 2, src: '/llm-gemini.png' },
  { id: 3, src: '/llm-claude.png' },
];

// --- Estilos ---
const sectionStyles = {
  width: '100vw', height: '100vh', display: 'flex', alignItems: 'center',
  position: 'relative', overflow: 'hidden', backgroundColor: '#000000',
  aspectRatio: '16/9'
};
const glitchContainerStyles = {
  flex: 1, height: '100vh', position: 'relative', // Contenedor ahora es relativo
  display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const titleContainerStyles = {
  flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem'
};
const titleStyles = {
    fontSize: '5rem', fontWeight: 'bold',
    lineHeight: '1.1', color: 'white', textTransform: 'uppercase',
    letterSpacing: '3px'
};
// --- NUEVO ESTILO PARA LAS TARJETAS REDONDEADAS ---
const cardImageStyles = {
  position: 'absolute',
  maxWidth: '80%',
  maxHeight: '70%',
  borderRadius: '15px', // <-- Bordes redondeados
  boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
};

// --- Componente ---
export const HypeSection = ({ onNextSlide, onPrevSlide }) => {
  // -1: solo fondo. 0: primera tarjeta, etc.
  const [cardIndex, setCardIndex] = useState(-1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        if (cardIndex < cardsData.length - 1) {
          setCardIndex(prev => prev + 1);
        } else {
          onNextSlide(); // Llama a la función para pasar a la siguiente diapositiva principal
        }
      } else if (event.key === 'ArrowLeft') {
        if (cardIndex > -1) {
          setCardIndex(prev => prev - 1);
        } else {
          onPrevSlide(); // Llama a la función para ir a la diapositiva anterior
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cardIndex, onNextSlide, onPrevSlide]);

  return (
    <section style={sectionStyles}>
      <div style={glitchContainerStyles}>
        <LetterGlitchBackground />
        
        {/* Aquí renderizamos las tarjetas encima del fondo glitch */}
        <AnimatePresence>
          {cardIndex > -1 && (
            <motion.img
              key={cardIndex}
              src={cardsData[cardIndex].src}
              style={cardImageStyles}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div style={titleContainerStyles} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <h1 style={titleStyles}>
          <BlurText text="El Hype de la IA Generativa" variant="large" />
        </h1>
      </motion.div>
    </section>
  );
};