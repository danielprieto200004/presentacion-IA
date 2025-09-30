// src/slides/TitleSlide.jsx
import React from 'react';
import  SplitText  from '../components/SplitText'; // Importamos nuestro componente local

// Estilos para centrar y dar formato
const containerStyles = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px' // Espacio entre elementos
};

const titleStyles = {
    fontSize: '4em', // Tamaño grande para el título
    fontWeight: 'bold',
    color: '#87CEFA' // Un color azul claro
};

const subtitleStyles = {
    fontSize: '1.5em',
    color: '#CCCCCC'
};


export const TitleSlide = () => {
  return (
    <div style={containerStyles}>
        <h1 style={titleStyles}>
            {/* Aquí usamos el componente de texto animado */}
            <SplitText text="LEARNING DRIVEN BY IA" />
        </h1>
        <div style={{borderTop: '1px solid #555', width: '50%', margin: '0 auto'}}></div>
        <h2 style={subtitleStyles}>Daniel Mateo Prieto</h2>
        <p style={{color: '#999'}}>Analista de Datos | CEO, Symbiotic</p>
    </div>
  );
};