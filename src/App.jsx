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

const totalSlides = 9;

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
      if (event.key === 'ArrowRight') {
        if (currentSlide === 0) {
          nextSlide();
        }
        // Las secciones 1, 2, 5, 6 y 7 manejan su propia navegación interna
        // Las secciones 3 y 4 usan navegación simple
        if (currentSlide === 3 || currentSlide === 4) {
          nextSlide();
        }
      } else if (event.key === 'ArrowLeft') {
        if (currentSlide > 0 && currentSlide !== 1 && currentSlide !== 2 && currentSlide !== 5 && currentSlide !== 6 && currentSlide !== 7) {
          prevSlide();
        }
        // Las secciones 1, 2, 5, 6 y 7 manejan su propia navegación interna
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

  return <>{renderCurrentSlide()}</>;
}

export default App;
