import React, { useEffect, useState } from "react";

function HexagonBackground() {
  const [hexagons, setHexagons] = useState([]);
  
  // Styles pour le conteneur des hexagones
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
    opacity: 0.08, // Opacité très réduite pour un effet subtil et sobre
    pointerEvents: "none", // Permet de cliquer à travers le fond
    background: "var(--light-beige)" // Fond léger pour adoucir l'ensemble
  };

  // Générer un tableau d'hexagones avec des positions et tailles aléatoires
  const generateHexagons = () => {
    const hexArray = [];
    const colors = [
      "var(--warm-beige)",
      "var(--medium-beige)",
      "var(--light-brown)",
      "var(--medium-brown)",
      "var(--dark-brown)"
    ];
    
    // Nombre d'hexagones à générer - pas trop pour rester subtil
    const count = 25;
    
    for (let i = 0; i < count; i++) {
      // Taille aléatoire entre 80 et 200px
      const size = Math.floor(Math.random() * 120) + 80;
      
      // Position aléatoire
      const x = Math.floor(Math.random() * 100);
      const y = Math.floor(Math.random() * 100);
      
      // Rotation aléatoire
      const rotation = Math.floor(Math.random() * 60);
      
      // Couleur aléatoire de la palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Opacité aléatoire (très subtile)
      const opacity = Math.random() * 0.15 + 0.05;
      
      // Points de l'hexagone
      const points = calculateHexagonPoints(size);
      
      // Animation légère - valeurs pour le flottement
      const floatX = (Math.random() * 0.4) - 0.2; // entre -0.2 et 0.2
      const floatY = (Math.random() * 0.4) - 0.2; // entre -0.2 et 0.2
      const floatDuration = Math.random() * 10 + 15; // entre 15 et 25 secondes
      const floatDelay = Math.random() * 5; // délai aléatoire pour désynchroniser
      
      hexArray.push({
        points,
        x,
        y,
        rotation,
        color,
        opacity,
        size,
        floatX,
        floatY,
        floatDuration,
        floatDelay,
        initialX: x,
        initialY: y
      });
    }
    
    return hexArray;
  };
  
  // Calculer les points d'un hexagone
  const calculateHexagonPoints = (size) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60) * Math.PI / 180;
      const x = size * Math.cos(angle);
      const y = size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };
  
  // Animation subtile des hexagones
  useEffect(() => {
    // Générer les hexagones initiaux
    setHexagons(generateHexagons());
    
    // Animation très légère pour donner vie aux hexagones
    const animationInterval = setInterval(() => {
      setHexagons(prevHexagons => 
        prevHexagons.map(hexagon => {
          // Calculer la nouvelle position basée sur le temps
          const time = Date.now() / 1000;
          const floatPhaseX = Math.sin((time + hexagon.floatDelay) / hexagon.floatDuration);
          const floatPhaseY = Math.cos((time + hexagon.floatDelay) / hexagon.floatDuration);
          
          return {
            ...hexagon,
            x: hexagon.initialX + (floatPhaseX * hexagon.floatX),
            y: hexagon.initialY + (floatPhaseY * hexagon.floatY)
          };
        })
      );
    }, 50); // Mise à jour toutes les 50ms pour une animation fluide
    
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div style={containerStyle}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="hexagon-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        
        {hexagons.map((hexagon, index) => (
          <polygon
            key={index}
            points={hexagon.points}
            transform={`translate(${hexagon.x}%, ${hexagon.y}%) rotate(${hexagon.rotation})`}
            fill={hexagon.color}
            opacity={hexagon.opacity}
            filter="url(#hexagon-blur)"
            style={{
              transition: "transform 0.5s ease-out",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default HexagonBackground;