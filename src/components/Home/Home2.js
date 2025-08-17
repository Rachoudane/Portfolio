import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Jeune diplômée de 25 ans en design d'espace, je suis passionnée par la création 
              et la conception d'environnements uniques… 🏛️
              <br />
              <br />Je maîtrise les logiciels de design comme
              <i>
                <b className="purple"> AutoCAD, SketchUp, Layout et Enscape. </b>
              </i>
              <br />
              <br />
              Mes domaines d'expertise incluent &nbsp;
              <i>
                <b className="purple">l'Architecture d'Intérieur, la Scénographie </b> et
                le{" "}
                <b className="purple">
                  Consulting en aménagement d'espace.
                </b>
              </i>
              <br />
              <br />
              J'utilise également des outils graphiques comme
              <b className="purple"> Photoshop et Procreate</b> pour
              <i>
                <b className="purple">
                  {" "}
                  le dessin numérique et la visualisation
                </b>
              </i>
              &nbsp; de mes projets.
              <br />
              <br />
              En avril 2025, je lance mon <b className="purple">auto-entreprise MBL Designer</b> !
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://fr.linkedin.com/in/maelle-barroislegrand"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/barrois_designer"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
