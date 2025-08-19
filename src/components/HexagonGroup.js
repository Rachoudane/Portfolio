import React from "react";
import Hexagon from "./Hexagon";

function HexagonGroup({ position = "left", className = "" }) {
  // Palette de couleurs du thème - utiliser principalement des tons marron
  const colors = [
    "var(--medium-brown)",
    "var(--dark-brown)",
    "var(--medium-brown)",
    "#8B7355", // Marron plus foncé
    "#A0845C"  // Marron moyen
  ];
  
  // Générer des tailles, rotations et épaisseurs de trait harmonieuses
  const getRandomSize = () => Math.floor(Math.random() * 40) + 60; // Entre 60 et 100px
  const getRandomRotation = () => Math.floor(Math.random() * 30);
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const getRandomStrokeWidth = () => Math.random() * 1 + 1.5; // Entre 1.5 et 2.5px
  
  // Styles pour le groupe d'hexagones selon la position
  let groupStyle = {
    position: "relative",
    zIndex: 0,
    margin: "20px 0",
    height: "100px",
    display: "flex",
    alignItems: "center"
  };
  
  if (position === "left") {
    groupStyle.justifyContent = "flex-start";
  } else if (position === "right") {
    groupStyle.justifyContent = "flex-end";
  } else if (position === "center") {
    groupStyle.justifyContent = "center";
  } else if (position === "scattered") {
    groupStyle.justifyContent = "space-around";
  }
  
  // Créer 3 ou 4 hexagones avec des propriétés harmonieuses
  const hexagonCount = Math.random() > 0.5 ? 3 : 4;
  const hexagons = [];
  
  for (let i = 0; i < hexagonCount; i++) {
    hexagons.push({
      size: getRandomSize(),
      color: getRandomColor(),
      strokeWidth: getRandomStrokeWidth(),
      rotation: getRandomRotation()
    });
  }
  
  return (
    <div className={`hexagon-group ${className}`} style={groupStyle}>
      {hexagons.map((hexagon, index) => (
        <Hexagon
          key={index}
          size={hexagon.size}
          color={hexagon.color}
          strokeWidth={hexagon.strokeWidth}
          rotation={hexagon.rotation}
        />
      ))}
    </div>
  );
}

export default HexagonGroup;