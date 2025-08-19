import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import HexagonGroup from "../HexagonGroup";
import { 
  FaHome, 
  FaBuilding, 
  FaTheaterMasks, 
  FaCalendarAlt, 
  FaPalette, 
  FaRuler,
  FaLightbulb,
  FaUsers,
  FaCamera,
  FaArrowRight
} from "react-icons/fa";
import { MdDesignServices, MdArchitecture } from "react-icons/md";

// Composant pour une prestation individuelle
function ServiceCard({ icon, title, description, features, price }) {
  return (
    <Col md={6} lg={4} style={{ marginBottom: "30px" }}>
      <Card style={{ 
        height: "100%", 
        backgroundColor: "rgba(245, 241, 232, 0.95)",
        border: "1px solid var(--warm-beige)",
        borderRadius: "20px",
        transition: "all 0.3s ease"
      }}
      className="service-card"
      >
        <Card.Body style={{ padding: "30px", textAlign: "center" }}>
          <div style={{ 
            fontSize: "3.5em", 
            color: "var(--medium-brown)", 
            marginBottom: "20px" 
          }}>
            {icon}
          </div>
          
          <h3 style={{ 
            color: "var(--dark-brown)", 
            marginBottom: "15px",
            fontSize: "1.4em",
            fontWeight: "600"
          }}>
            {title}
          </h3>
          
          <p style={{ 
            color: "var(--secondary-text)", 
            fontSize: "1em",
            lineHeight: "1.5",
            marginBottom: "20px"
          }}>
            {description}
          </p>
          
          <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <h5 style={{ color: "var(--medium-brown)", marginBottom: "10px" }}>
              Inclus :
            </h5>
            <ul style={{ 
              listStyle: "none", 
              paddingLeft: "0",
              color: "var(--secondary-text)"
            }}>
              {features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  <FaArrowRight style={{ 
                    color: "var(--medium-brown)", 
                    marginRight: "8px",
                    fontSize: "0.8em"
                  }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{ 
            backgroundColor: "rgba(139, 115, 85, 0.1)",
            padding: "15px",
            borderRadius: "10px",
            marginTop: "auto"
          }}>
            <p style={{ 
              color: "var(--medium-brown)", 
              fontSize: "1.1em",
              fontWeight: "600",
              margin: "0"
            }}>
              {price}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaHome />,
      title: "Aménagement Résidentiel",
      description: "Transformation complète ou partielle de votre intérieur pour créer un espace de vie qui vous ressemble.",
      features: [
        "Étude des besoins et contraintes",
        "Conseils personalisés",
        "Plans 2D et visualisations 3D",
        "Sélection mobilier et matériaux",
        "Suivi de chantier"
      ],
      price: "À partir de 80€"
    },
    {
      icon: <FaBuilding />,
      title: "Espaces Commerciaux",
      description: "Conception d'espaces professionnels optimisés pour votre activité et l'expérience client.",
      features: [
        "Étude des besoins et contraintes",
        "Optimisation des flux",
        "Plans 2D et visualisations 3D",
        "Identité visuelle spatiale",
        "Respect des normes"
      ],
      price: "Sur devis personnalisé"
    },
    {
      icon: <FaTheaterMasks />,
      title: "Scénographie",
      description: "Création d'univers immersifs pour théâtres, expositions et événements culturels.",
      features: [
        "Étude des besoins et contraintes",
        "Conception artistique",
        "Décors sur mesure",
        "Éclairage scénique",
        "Plans 2D et visualisations 3D"
      ],
      price: "Sur devis personnalisé"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Événementiel",
      description: "Aménagement temporaire pour vos événements privés ou professionnels.",
      features: [
        "Étude des besoins et contraintes",
        "Thématisation sur mesure",
        "Décoration éphémère",
        "Mobilier événementiel",
        "Montage/démontage"
      ],
      price: "Sur devis personnalisé"
    },
    {
      icon: <FaPalette />,
      title: "Conseil en Décoration",
      description: "Accompagnement personnalisé pour harmoniser votre décoration existante.",
      features: [
        "Étude des besoins et contraintes",
        "Conseils couleurs et matières",
        "Shopping list personnalisée",
        "Mise en scène des espaces",
        "Suivi à distance possible"
      ],
      price: "À partir de 50€"
    }
  ];

  return (
    <Container fluid className="services-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <h1 style={{ 
              fontSize: "2.5em", 
              paddingBottom: "20px",
              color: "var(--primary-text)"
            }}>
              Mes <strong className="purple">Prestations</strong>
            </h1>
            <p style={{ 
              fontSize: "1.2em", 
              color: "var(--secondary-text)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}>
              De la conception à la réalisation, je vous accompagne dans tous vos projets d'aménagement 
              et de décoration. Chaque prestation est adaptée à vos besoins et votre budget.
            </p>
            {/* Hexagones décoratifs après le titre */}
            <HexagonGroup position="center" />
          </Col>
        </Row>

        {/* Services Grid */}
        <Row style={{ justifyContent: "center" }}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
            />
          ))}
        </Row>

        {/* Hexagones décoratifs avant la section CTA */}
        <HexagonGroup position="scattered" />

        {/* Call to Action */}
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={8} style={{ textAlign: "center" }}>
            <div style={{
              backgroundColor: "rgba(139, 115, 85, 0.1)",
              padding: "40px",
              borderRadius: "20px",
              border: "2px solid var(--light-brown)",
              position: "relative",
              zIndex: 10
            }}>
              <FaLightbulb style={{ 
                fontSize: "3em", 
                color: "var(--medium-brown)", 
                marginBottom: "20px" 
              }} />
              <h3 style={{ 
                color: "var(--dark-brown)", 
                marginBottom: "15px" 
              }}>
                Créons ensemble l'espace de vos rêves !
              </h3>
              <p style={{ 
                color: "var(--secondary-text)", 
                fontSize: "1.1em",
                marginBottom: "25px"
              }}>
                Discutons ensemble de votre projet ! Je vous propose un premier échange gratuit 
                pour comprendre vos besoins et vous présenter ma démarche.
              </p>
              <Button
                onClick={() => navigate('/contact')}
                style={{
                  backgroundColor: "var(--medium-brown)",
                  borderColor: "var(--medium-brown)",
                  color: "white",
                  padding: "12px 30px",
                  borderRadius: "25px",
                  fontSize: "1.1em",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  border: "none",
                  position: "relative",
                  zIndex: 20,
                  cursor: "pointer"
                }}
                className="cta-button"
              >
                Contactez-moi
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
