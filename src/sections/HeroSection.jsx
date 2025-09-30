// src/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Estilos para la sección
const heroStyles = {
  minHeight: '100vh', // Ocupa toda la altura de la pantalla
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 2rem', // Padding a los lados
  textAlign: 'center',
  background: 'linear-gradient(180deg, #1e1e1e 0%, #121212 100%)' // Un degradado sutil
};

const titleStyles = {
  fontSize: 'clamp(2.5rem, 8vw, 5rem)', // Tamaño de fuente responsivo
  fontWeight: 'bold',
  color: '#FFFFFF',
  marginBottom: '1rem',
};

const subtitleStyles = {
  fontSize: 'clamp(1rem, 4vw, 1.5rem)',
  fontWeight: '300',
  color: '#A9A9A9', // Un gris claro para el subtítulo
  maxWidth: '600px'
};

const symbioticBrandStyles = {
    color: '#87CEFA' // El color azulado que ya teníamos
};


export const HeroSection = () => {
  return (
    <section style={heroStyles}>
      <motion.h1
        style={titleStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transformando Datos en Conocimiento Accionable
      </motion.h1>
      <motion.p
        style={subtitleStyles}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        En <span style={symbioticBrandStyles}>Symbiotic</span>, combinamos ciencia de datos, IA y consultoría estratégica para potenciar tus decisiones.
      </motion.p>
    </section>
  );
};