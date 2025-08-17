import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaCode, FaPalette, FaLightbulb, FaHeart } from "react-icons/fa";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Col md={10}>
        <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "center" }}>
          Ma <strong className="purple">Passion</strong> au Quotidien
        </h1>

        <div style={{
          backgroundColor: "rgba(139, 115, 85, 0.1)",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center"
        }}>
          <Row>
            <Col md={3} sm={6} style={{ marginBottom: "30px" }}>
              <FaLightbulb style={{ fontSize: "3em", color: "var(--medium-brown)", marginBottom: "15px" }} />
              <h4 style={{ color: "var(--dark-brown)" }}>Créativité</h4>
              <p style={{ color: "var(--secondary-text)" }}>
                Chaque jour, je développe de nouvelles idées pour transformer vos espaces
              </p>
            </Col>
            <Col md={3} sm={6} style={{ marginBottom: "30px" }}>
              <FaPalette style={{ fontSize: "3em", color: "var(--medium-brown)", marginBottom: "15px" }} />
              <h4 style={{ color: "var(--dark-brown)" }}>Design</h4>
              <p style={{ color: "var(--secondary-text)" }}>
                Je conçois des aménagements uniques qui reflètent votre personnalité
              </p>
            </Col>
            <Col md={3} sm={6} style={{ marginBottom: "30px" }}>
              <FaCode style={{ fontSize: "3em", color: "var(--medium-brown)", marginBottom: "15px" }} />
              <h4 style={{ color: "var(--dark-brown)" }}>Innovation</h4>
              <p style={{ color: "var(--secondary-text)" }}>
                J'intègre les dernières tendances et technologies dans mes projets
              </p>
            </Col>
            <Col md={3} sm={6} style={{ marginBottom: "30px" }}>
              <FaHeart style={{ fontSize: "3em", color: "var(--medium-brown)", marginBottom: "15px" }} />
              <h4 style={{ color: "var(--dark-brown)" }}>Passion</h4>
              <p style={{ color: "var(--secondary-text)" }}>
                L'architecture d'intérieur est ma passion, visible dans chaque détail
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default Github;
