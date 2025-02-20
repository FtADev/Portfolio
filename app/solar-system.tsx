"use client"
import { useEffect } from 'react';

const SolarSystem = () => {
  useEffect(() => {
    // Animation loop
    const planets = document.querySelectorAll('.planet');
    let angle = 0;

    const animateOrbit = () => {
      angle += 1;
      planets.forEach((planet, index) => {
        const radius = 150 + index * 50; // Increasing distance for each planet
        const x = radius * Math.cos((angle + index * 10) * (Math.PI / 180));
        const y = radius * Math.sin((angle + index * 10) * (Math.PI / 180));
        planet.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animateOrbit);
    };

    animateOrbit();

    return () => cancelAnimationFrame(animateOrbit);
  }, []);

  return (
    <div className="relative w-96 h-96 rounded-full bg-black mx-auto">
      <div className="absolute w-12 h-12 rounded-full bg-yellow-400"></div>
      <div className="planet planet-1 absolute w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center text-white">🌍</div>
      <div className="planet planet-2 absolute w-8 h-8 rounded-full bg-gray-500 flex justify-center items-center text-white">🪐</div>
      <div className="planet planet-3 absolute w-8 h-8 rounded-full bg-gray-700 flex justify-center items-center text-white">🌑</div>
    </div>
  );
};

export default SolarSystem;
