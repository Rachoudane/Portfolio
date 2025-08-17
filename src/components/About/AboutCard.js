import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { FaGraduationCap, FaHeart, FaLightbulb } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Professional Introduction */}
          <div style={{ marginBottom: "30px" }}>
            <p style={{ textAlign: "justify", fontSize: "1.1em", lineHeight: "1.6" }}>
              Bonjour ! Je suis <span className="purple">Maëlle Barrois-Legrand</span>,
              <span className="purple"> architecte d'intérieur</span> passionnée de <span className="purple">25 ans</span>.
              <br /><br />
              Diplômée d'un Master en Architecture d'Intérieur, j'ai à cœur de créer des <strong>espaces qui vous ressemblent</strong>.
              Que ce soit pour un projet résidentiel ou commercial, j'aime transformer vos idées en réalité
              en alliant fonctionnalité et esthétisme.
            </p>
          </div>

          {/* Education & Experience */}
          <Row style={{ marginBottom: "30px" }}>
            <Col md={12}>
              <h5 style={{ color: "var(--medium-brown)", marginBottom: "15px" }}>
                <FaGraduationCap style={{ marginRight: "10px" }} />
                Formation & Parcours
              </h5>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li style={{ marginBottom: "8px" }}>
                  <ImPointRight style={{ color: "var(--medium-brown)", marginRight: "10px" }} />
                  <strong>Master Architecture d'Intérieur</strong> - 2024
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <ImPointRight style={{ color: "var(--medium-brown)", marginRight: "10px" }} />
                  <strong>Bachelor Design d'Espace</strong> - 2022
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <ImPointRight style={{ color: "var(--medium-brown)", marginRight: "10px" }} />
                  Expérience en <strong>conception 3D</strong> et <strong>aménagement d'espaces</strong>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Passions & Interests */}
          <Row style={{ marginBottom: "25px" }}>
            <Col md={12}>
              <h5 style={{ color: "var(--medium-brown)", marginBottom: "15px" }}>
                <FaHeart style={{ marginRight: "10px" }} />
                Passions
              </h5>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li className="about-activity">
                  <ImPointRight /> Dessin numérique & Photographie
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travaux manuels & Bricolage
                </li>
                <li className="about-activity">
                  <ImPointRight /> Tir à l'arc & Natation
                </li>
              </ul>
            </Col>
          </Row>

          {/* Philosophy */}
          <div style={{
            backgroundColor: "rgba(139, 115, 85, 0.1)",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "4px solid var(--medium-brown)",
            marginBottom: "20px"
          }}>
            <h5 style={{ color: "var(--medium-brown)", marginBottom: "15px" }}>
              <FaLightbulb style={{ marginRight: "10px" }} />
              Ma Philosophie
            </h5>
            <p style={{
              fontStyle: "italic",
              fontSize: "1.1em",
              color: "var(--primary-text)",
              marginBottom: "0",
              textAlign: "center"
            }}>
              "J'adore transformer un espace vide en un lieu de vie chaleureux et fonctionnel.
              Chaque projet est une nouvelle aventure créative !"
            </p>
          </div>

          <footer className="blockquote-footer" style={{ textAlign: "center", fontSize: "1.1em" }}>
            MBL Designer
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
