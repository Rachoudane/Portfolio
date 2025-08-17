import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  SiWindows,
  SiMicrosoft,
} from "react-icons/si";
import {
  FaTools,
  FaLaptop,
  FaTabletAlt,
  FaPrint,
  FaCalculator,
  FaRuler,
  FaPencilAlt,
  FaCamera,
} from "react-icons/fa";
import {
  MdEmail,
  MdBusiness,
} from "react-icons/md";

// Composant pour un outil individuel
function ToolItem({ icon, title, description }) {
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

function Toolstack() {
  const tools = [
    {
      icon: <SiWindows />,
      title: "Windows",
      description: "Système d'exploitation principal"
    },
    {
      icon: <SiMicrosoft />,
      title: "Microsoft Office",
      description: "Suite bureautique complète"
    },
    {
      icon: <FaLaptop />,
      title: "Ordinateur Portable",
      description: "Station de travail mobile"
    },
    {
      icon: <FaTabletAlt />,
      title: "Tablette Graphique",
      description: "Dessin numérique et précision"
    },
    {
      icon: <FaPrint />,
      title: "Imprimante",
      description: "Impression plans et documents"
    },
    {
      icon: <FaCalculator />,
      title: "Calculatrice",
      description: "Calculs techniques et mesures"
    },
    {
      icon: <FaRuler />,
      title: "Outils de Mesure",
      description: "Mètres, règles, équerres"
    },
    {
      icon: <FaPencilAlt />,
      title: "Matériel de Dessin",
      description: "Crayons, feutres, papier technique"
    },
    {
      icon: <FaCamera />,
      title: "Appareil Photo",
      description: "Documentation et portfolio"
    },
    {
      icon: <FaTools />,
      title: "Outils de Chantier",
      description: "Équipement de terrain"
    },
    {
      icon: <MdEmail />,
      title: "Communication",
      description: "Email et messagerie client"
    },
    {
      icon: <MdBusiness />,
      title: "Gestion de Projet",
      description: "Planification et suivi"
    }
  ];

  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {tools.map((tool, index) => (
          <ToolItem
            key={index}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Toolstack;
