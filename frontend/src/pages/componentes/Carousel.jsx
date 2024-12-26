import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import imagem1 from '../../assets/imgs/inicio/Carousel1.jpg';
import imagem2 from '../../assets/imgs/inicio/Carousel2.png';
import imagem3 from '../../assets/imgs/inicio/Carousel3.jpg';

const Carousel = () => {
  const slides = [
    { id: 1, image: imagem1, text: 'Slide 1' },
    { id: 2, image: imagem2, text: 'Slide 2' },
    { id: 3, image: imagem3, text: 'Slide 3' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // UseEffect para transição de imagens do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); 
    }, 3000);  // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [currentSlide]); // O efeito depende do estado `currentSlide`

  return (
    <div className="relative w-full h-[60vh]">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.text}
                className="w-full h-full object-cover" //ver se o problema com o ajuste das imagens no carrossel é causado pela resolução da imagem (utilizando contain, a imagem corta e fica branca em algumas partes)
              />
              <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded">
                {slide.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-nba-red dark:bg-nba-orange bg-opacity-50 dark:bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 dark:hover:bg-opacity-75"
      >
        <FaArrowLeft className="text-lg" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-nba-red dark:bg-nba-orange bg-opacity-50 dark:bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-75 dark:hover:bg-opacity-75"
      >
        <FaArrowRight className="text-lg" />
      </button>
    </div>
  );
};

export default Carousel;
