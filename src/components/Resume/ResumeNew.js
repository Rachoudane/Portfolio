import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineEye } from "react-icons/ai";
import { FaFileAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import HexagonGroup from "../HexagonGroup";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Header Section */}
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 style={{
                fontSize: "2.5em",
                paddingBottom: "20px",
                color: "var(--primary-text)"
              }}>
                Mon <strong className="purple">CV</strong>
              </h1>
              <p style={{
                color: "var(--secondary-text)",
                fontSize: "1.2em",
                marginBottom: "40px"
              }}>
                Découvrez mon parcours professionnel et mes compétences en architecture d'intérieur
              </p>
              {/* Hexagones décoratifs après le titre */}
              <HexagonGroup position="center" />
            </Col>
          </Row>

          {/* CV Preview Section */}
          <Row style={{ justifyContent: "center", marginBottom: "50px" }}>
            <Col md={8}>
              <div style={{
                backgroundColor: "rgba(139, 115, 85, 0.1)",
                padding: "50px",
                borderRadius: "20px",
                textAlign: "center",
                border: "2px dashed var(--medium-brown)"
              }}>
                <FaFileAlt style={{
                  fontSize: "5em",
                  color: "var(--medium-brown)",
                  marginBottom: "30px"
                }} />
                <h3 style={{
                  color: "var(--dark-brown)",
                  marginBottom: "20px"
                }}>
                  CV de Maëlle Barrois-Legrand
                </h3>
                <p style={{
                  color: "var(--secondary-text)",
                  fontSize: "1.1em",
                  marginBottom: "30px",
                  lineHeight: "1.6"
                }}>
                  Mon CV détaillé sera bientôt disponible en téléchargement.
                  En attendant, n'hésitez pas à me contacter directement pour plus d'informations
                  sur mon parcours et mes réalisations.
                </p>

                <div style={{ marginTop: "30px" }}>
                  <Button
                    variant="outline-primary"
                    href="/contact"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "var(--medium-brown)",
                      color: "var(--medium-brown)",
                      padding: "12px 30px",
                      borderRadius: "25px",
                      fontSize: "1.1em",
                      fontWeight: "600",
                      marginRight: "15px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "var(--medium-brown)";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "var(--medium-brown)";
                    }}
                  >
                    <FaEnvelope style={{ marginRight: "8px" }} />
                    Me Contacter
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Hexagones décoratifs entre les sections */}
          <HexagonGroup position="right" />

          {/* Contact Info Section */}
          <Row style={{ justifyContent: "center" }}>
            <Col md={10}>
              <div style={{
                backgroundColor: "rgba(245, 241, 232, 0.8)",
                padding: "40px",
                borderRadius: "20px"
              }}>
                <h4 style={{
                  textAlign: "center",
                  color: "var(--dark-brown)",
                  marginBottom: "30px"
                }}>
                  Informations de Contact
                </h4>
                <Row>
                  <Col md={4} style={{ textAlign: "center", marginBottom: "20px" }}>
                    <FaEnvelope style={{
                      fontSize: "2em",
                      color: "var(--medium-brown)",
                      marginBottom: "15px"
                    }} />
                    <h6 style={{ color: "var(--dark-brown)" }}>Email</h6>
                    <p style={{ color: "var(--secondary-text)" }}>
                      mbldesigner59@gmail.com
                    </p>
                  </Col>
                  <Col md={4} style={{ textAlign: "center", marginBottom: "20px" }}>
                    <FaLinkedinIn style={{
                      fontSize: "2em",
                      color: "var(--medium-brown)",
                      marginBottom: "15px"
                    }} />
                    <h6 style={{ color: "var(--dark-brown)" }}>LinkedIn</h6>
                    <p style={{ color: "var(--secondary-text)" }}>
                      <a
                        href="https://fr.linkedin.com/in/maelle-barroislegrand"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--medium-brown)", textDecoration: "none" }}
                      >
                        Maëlle Barrois-Legrand
                      </a>
                    </p>
                  </Col>
                  <Col md={4} style={{ textAlign: "center", marginBottom: "20px" }}>
                    <AiOutlineEye style={{
                      fontSize: "2em",
                      color: "var(--medium-brown)",
                      marginBottom: "15px"
                    }} />
                    <h6 style={{ color: "var(--dark-brown)" }}>Portfolio</h6>
                    <p style={{ color: "var(--secondary-text)" }}>
                      Consultez mes réalisations
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
