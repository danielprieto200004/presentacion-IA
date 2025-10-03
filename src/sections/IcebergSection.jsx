// src/sections/IcebergSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlurText from '../components/BlurText';

const sectionStyles = {
  width: '100vw',
  height: '100vh',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: '#000000',
  aspectRatio: '16/9'
};

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  maxWidth: '1400px',
  width: '100%'
};

const textContainerStyles = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'left',
  padding: '1rem',
  maxWidth: '400px',
  marginRight: '3rem'
};

const rightTextContainerStyles = {
  flex: 0.5,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'left',
  padding: '1rem',
  maxWidth: '400px'
};

const videoContainerStyles = {
  flex: 2,
  maxWidth: '500px',
  height: '80vh',
  position: 'relative',
  borderRadius: '200px',
  overflow: 'hidden',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8)'
};

const titleStyles = {
  fontSize: '5rem',
  fontWeight: 'bold',
  lineHeight: '1',
  color: 'white',
  textTransform: 'uppercase',
  marginBottom: '3rem',
  letterSpacing: '2px'
};

const listItemBase = {
  fontSize: '2rem',
  lineHeight: '1.7',
  marginTop: '0.8rem',
  transition: 'all 0.8s ease'
};

const videoStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

// --- Componente ---
export const IcebergSection = ({ onNextSlide, onPrevSlide }) => {
  const icebergItems = [
    "IA Generativa",
    "Modelos Predictivos",
    "Procesamiento de Lenguaje Natural",
    "Sistemas de Recomendación",
    "Optimización y Programación",
    "Automatización Inteligente / RPA",
    "Infraestructura, Gobernanza, Datos y Seguridad"
  ];

  const [visibleCount, setVisibleCount] = useState(1);
  const [highlightRPA, setHighlightRPA] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        if (visibleCount < icebergItems.length) {
          setVisibleCount(prev => Math.min(prev + 1, icebergItems.length));
        } else if (!highlightRPA) {
          setHighlightRPA(true);
        } else {
          onNextSlide?.();
        }
      } else if (event.key === 'ArrowLeft') {
        if (highlightRPA) {
          setHighlightRPA(false);
        } else if (visibleCount > 1) {
          setVisibleCount(prev => Math.max(prev - 1, 1));
        } else {
          onPrevSlide?.();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visibleCount, highlightRPA, icebergItems.length, onNextSlide, onPrevSlide]);

  return (
    <motion.section 
      style={sectionStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div style={containerStyles}>

        {/* Columna Izquierda: T��tulo */}
        <div style={textContainerStyles}>
          <h1 style={titleStyles}>
            <BlurText text="El Verdadero Mundo de la IA" variant="large" />
          </h1>
        </div>

        {/* Columna Centro: Video */}
        <div style={videoContainerStyles}>
          <video
            style={videoStyles}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/iceberg-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Columna Derecha: Capas del Iceberg */}
        <div style={rightTextContainerStyles}>
          {icebergItems.slice(0, visibleCount).map((item, index) => {
            const colors = [
              { color: "#ffffff", glow: "0 0 25px rgba(255,255,255,0.9)" },
              { color: "#aefeff", glow: "0 0 15px rgba(150,250,255,0.6)" },
              { color: "#7defff", glow: "0 0 12px rgba(125,239,255,0.5)" },
              { color: "#4ddfff", glow: "0 0 10px rgba(77,223,255,0.4)" },
              { color: "#2dc9ff", glow: "0 0 8px rgba(45,201,255,0.3)" },
              { color: "#1ba0e8", glow: "0 0 6px rgba(27,160,232,0.25)" },
              { color: "#1570b5", glow: "0 0 5px rgba(21,112,181,0.2)" }
            ];
            const style = colors[index] || colors[colors.length - 1];
            const isRPA = item === "Automatización Inteligente / RPA";

            return (
              <motion.p
                key={index}
                style={{
                  ...listItemBase,
                  color: style.color,
                  textShadow: style.glow,
                  fontSize: "2rem",
                  fontWeight: index === 0 ? "bold" : "normal",
                  whiteSpace: "nowrap"
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: highlightRPA && isRPA ? [1, 1.1, 1] : 1,
                  textShadow: highlightRPA && isRPA
                    ? "0 0 25px rgba(0,255,255,1), 0 0 40px rgba(0,255,255,0.6)"
                    : style.glow
                }}
                transition={{
                  duration: 0.6,
                  repeat: highlightRPA && isRPA ? Infinity : 0,
                  repeatType: "mirror"
                }}
              >
                {item}
              </motion.p>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
};
