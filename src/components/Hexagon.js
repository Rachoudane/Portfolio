import React from "react";

function Hexagon({ size = 100, color = "var(--dark-brown)", strokeWidth = 2, rotation = 0, className = "" }) {
  // Calculer les points de l'hexagone
  const calculateHexagonPoints = (size) => {
    const height = size * Math.sqrt(3);
    const points = [];
    
    for (let i = 0; i < 6; i++) {
      const angleDeg = 60 * i - 30;
      const angleRad = (Math.PI / 180) * angleDeg;
      const x = size * Math.cos(angleRad);
      const y = size * Math.sin(angleRad);
      points.push(`${x},${y}`);
    }
    
    return points.join(" ");
  };

  const hexPoints = calculateHexagonPoints(size / 2);

  return (
    <div 
      className={`hexagon-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "inline-block",
        position: "relative",
        margin: "10px",
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`-${size/2} -${size/2} ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={hexPoints}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Hexagon;