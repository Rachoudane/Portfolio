import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiAutodesk,
  SiAdobe,
  SiSketchup,
} from "react-icons/si";
import {
  FaHome,
  FaCamera,
  FaBuilding,
  FaCouch,
  FaPalette,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdArchitecture,
  Md3DRotation,
  MdColorLens,
} from "react-icons/md";

// Composant pour une compétence individuelle
function SkillItem({ icon, title, description }) {
  return (
    <Col xs={6} md={4} lg={3} style={{ marginBottom: "30px" }}>
      <div style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "rgba(245, 241, 232, 0.8)",
        borderRadius: "15px",
        border: "1px solid var(--warm-beige)",
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      className="skill-item"
      >
        <div style={{
          fontSize: "3em",
          color: "var(--medium-brown)",
          marginBottom: "15px"
        }}>
          {icon}
        </div>
        <h5 style={{
          color: "var(--dark-brown)",
          marginBottom: "8px",
          fontSize: "1.1em",
          fontWeight: "600"
        }}>
          {title}
        </h5>
        <p style={{
          color: "var(--secondary-text)",
          fontSize: "0.9em",
          margin: "0",
          lineHeight: "1.4"
        }}>
          {description}
        </p>
      </div>
    </Col>
  );
}

function Techstack() {
  const skills = [
    {
      icon: <SiAutodesk />,
      title: "AutoCAD",
      description: "Plans techniques et dessins d'architecture"
    },
    {
      icon: <SiSketchup />,
      title: "SketchUp",
      description: "Modélisation 3D et visualisation"
    },
    {
      icon: <SiAdobe />,
      title: "Suite Adobe",
      description: "Photoshop, Illustrator, InDesign"
    },
    {
      icon: <Md3DRotation />,
      title: "Modélisation 3D",
      description: "Création de modèles tridimensionnels"
    },
    {
      icon: <MdArchitecture />,
      title: "Architecture d'Intérieur",
      description: "Conception et aménagement d'espaces"
    },
    {
      icon: <MdDesignServices />,
      title: "Design d'Espace",
      description: "Création d'environnements fonctionnels"
    },
    {
      icon: <FaHome />,
      title: "Résidentiel",
      description: "Aménagement de maisons et appartements"
    },
    {
      icon: <FaBuilding />,
      title: "Commercial",
      description: "Espaces professionnels et commerciaux"
    },
    {
      icon: <FaCouch />,
      title: "Mobilier",
      description: "Sélection et agencement du mobilier"
    },
    {
      icon: <MdColorLens />,
      title: "Colorimétrie",
      description: "Théorie et harmonie des couleurs"
    },
    {
      icon: <FaPalette />,
      title: "Décoration",
      description: "Choix des matériaux et finitions"
    },
    {
      icon: <FaCamera />,
      title: "Photographie",
      description: "Mise en valeur des espaces créés"
    }
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Techstack;
