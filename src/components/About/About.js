import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import HexagonGroup from "../HexagonGroup";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profileImg from "../../Assets/IMG_6026.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Introduction Section */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              À propos de <strong className="purple">MBL Designer</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={profileImg} alt="MBL Designer" className="img-fluid" style={{ borderRadius: "15px", boxShadow: "0 8px 20px rgba(139, 115, 85, 0.3)" }} />
          </Col>
        </Row>

        {/* Hexagones décoratifs entre les sections */}
        <HexagonGroup position="right" />

        {/* Professional Skills Section */}
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
              Mes <strong className="purple">Compétences</strong>
            </h1>
            <Techstack />
          </Col>
        </Row>

        {/* Hexagones décoratifs entre les sections */}
        <HexagonGroup position="left" />

        {/* Tools & Equipment Section */}
        <Row style={{ justifyContent: "center", paddingTop: "70px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "30px" }}>
              <strong className="purple">Outils</strong> & Équipements
            </h1>
            <Toolstack />
          </Col>
        </Row>
        
        {/* Hexagones décoratifs à la fin de la page */}
        <HexagonGroup position="scattered" />
      </Container>
    </Container>
  );
}

export default About;
