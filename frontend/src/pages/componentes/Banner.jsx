import React from 'react';
import logoMaisprati from '../../assets/imgs/inicio/Maisprati_logo.png';

const Banner = () => {
  const imageUrl = logoMaisprati;

  return (
    <div className="grid grid-cols-4 gap-6 w-full  my-6">
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="w-full h-24 mx-2">
          <img
            src={imageUrl}
            alt={`Logo Maisprati ${i + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
