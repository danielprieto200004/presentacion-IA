import React, { useState, useEffect, useCallback } from 'react';
import { WelcomeSection } from './sections/WelcomeSection';
import { HypeSection } from './sections/HypeSection';
import { IcebergSection } from './sections/IcebergSection';
import { RPASection } from './sections/RPASection';
import { QuestionSection } from './sections/QuestionSection';
import { IronManSection } from './sections/IronManSection';
import { VibecodingSection } from './sections/VibecodingSection';
import { SymbioticSection } from './sections/SymbioticSection';
import { FinalSection } from './sections/FinalSection';
import { HyperspeedSection } from './sections/HyperspeedSection'; // 🚀 nueva sección
import ClickerInstructions from './components/ClickerInstructions';

const totalSlides = 10; // aumentamos a 10 para incluir la nueva

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

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
        if (currentSlide === 0) nextSlide();
        else if (currentSlide === 3 || currentSlide === 4 || currentSlide === 5) nextSlide();
      } 
      // Teclas para retroceder (clicker remoto y teclado)
      else if (event.key === 'ArrowLeft' || 
               event.key === 'ArrowDown' ||
               event.key === 'PageUp' ||
               event.key === 'Escape' ||
               event.key === 'p' || 
               event.key === 'P') {
        if (currentSlide > 0 && currentSlide !== 1 && currentSlide !== 2 && currentSlide !== 6 && currentSlide !== 7) {
          prevSlide();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, nextSlide, prevSlide]);

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 0:
        return <WelcomeSection onStart={nextSlide} />;
      case 1:
        return <HypeSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      case 2:
        return <IcebergSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      case 3:
        return <RPASection />;
      case 4:
        return <QuestionSection />;
      case 5:
        return <IronManSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      case 6:
        return <SymbioticSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      case 7:
        return <VibecodingSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      case 8:
        return <FinalSection onNextSlide={nextSlide} onPrevSlide={prevSlide} />;
      
      default:
        return <WelcomeSection onStart={nextSlide} />;
    }
  };

  return (
    <>
      {renderCurrentSlide()}
      <ClickerInstructions />
    </>
  );
}

export default App;
