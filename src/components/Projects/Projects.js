import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import {
  FaHome,
  FaBuilding,
  FaTheaterMasks,
  FaCalendarAlt,
  FaEye
} from "react-icons/fa";

function Projects() {
  const navigate = useNavigate();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>d'Architecture d'Intérieur
        </h1>
        <p style={{ color: "white", textAlign: "center", fontSize: "1.2em", marginBottom: "50px" }}>
          Découvrez mes réalisations dans différents domaines de l'aménagement d'espace.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={6} lg={3} style={{ marginBottom: "30px" }}>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%"
              }}
              className="project-category-card"
              onClick={() => navigate('/realizations')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.backgroundColor = "rgba(139, 115, 85, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <FaHome style={{ fontSize: "4em", color: "#8B7355", marginBottom: "20px" }} />
              <h3 style={{ color: "white", marginBottom: "15px" }}>Résidentiel</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}>
                Aménagement d'appartements, maisons et espaces de vie personnalisés
              </p>
            </div>
          </Col>

          <Col md={6} lg={3} style={{ marginBottom: "30px" }}>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%"
              }}
              className="project-category-card"
              onClick={() => navigate('/realizations')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.backgroundColor = "rgba(139, 115, 85, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <FaBuilding style={{ fontSize: "4em", color: "#A0845C", marginBottom: "20px" }} />
              <h3 style={{ color: "white", marginBottom: "15px" }}>Commercial</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}>
                Boutiques, restaurants et espaces professionnels attractifs
              </p>
            </div>
          </Col>

          <Col md={6} lg={3} style={{ marginBottom: "30px" }}>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%"
              }}
              className="project-category-card"
              onClick={() => navigate('/realizations')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.backgroundColor = "rgba(139, 115, 85, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <FaTheaterMasks style={{ fontSize: "4em", color: "#D4B896", marginBottom: "20px" }} />
              <h3 style={{ color: "white", marginBottom: "15px" }}>Scénographie</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}>
                Expositions, événements culturels et installations artistiques
              </p>
            </div>
          </Col>

          <Col md={6} lg={3} style={{ marginBottom: "30px" }}>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                padding: "40px 30px",
                borderRadius: "20px",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                height: "100%"
              }}
              className="project-category-card"
              onClick={() => navigate('/realizations')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.backgroundColor = "rgba(139, 115, 85, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <FaCalendarAlt style={{ fontSize: "4em", color: "#F5F1E8", marginBottom: "20px" }} />
              <h3 style={{ color: "white", marginBottom: "15px" }}>Événementiel</h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6" }}>
                Mariages, réceptions et décoration d'événements spéciaux
              </p>
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            <button
              onClick={() => navigate('/realizations')}
              style={{
                backgroundColor: "#8B7355",
                color: "white",
                border: "none",
                padding: "15px 40px",
                borderRadius: "30px",
                fontSize: "1.3em",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 20px rgba(139, 115, 85, 0.3)"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#6B5B47";
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 12px 25px rgba(139, 115, 85, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#8B7355";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 20px rgba(139, 115, 85, 0.3)";
              }}
            >
              <FaEye style={{ marginRight: "12px" }} />
              Voir Toutes Mes Réalisations
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
