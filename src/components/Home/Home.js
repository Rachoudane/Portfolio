import React, { useState } from "react";
import { Container, Row, Col, Card, Carousel, Modal, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profileImg from "../../Assets/IMG_6026.jpg";
import Particle from "../Particle";
import Type from "./Type";
import {
  FaHome,
  FaBuilding,
  FaTheaterMasks,
  FaCalendarAlt,
  FaArrowRight,
  FaEnvelope,
  FaEye,
  FaLightbulb,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaHeart,
  FaPalette,
  FaMapMarkerAlt,
  FaCalendar,
  FaRuler,
  FaTimes,
  FaPlay,
  FaImage
} from "react-icons/fa";

// Modal de détail avec carousel (copié depuis Realizations.js)
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal
      show={!!project}
      onHide={onClose}
      size="xl"
      centered
      style={{ zIndex: 1050 }}
    >
      <Modal.Header
        closeButton
        style={{
          backgroundColor: "var(--light-beige)",
          borderBottom: "1px solid var(--warm-beige)"
        }}
      >
        <Modal.Title style={{ color: "var(--dark-brown)", fontSize: "1.8em" }}>
          {project.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: "var(--light-beige)", padding: "0" }}>
        <Row style={{ margin: "0" }}>
          {/* Carousel Section */}
          <Col md={7} style={{ padding: "0" }}>
            {project.media && project.media.length > 0 && (
              <Carousel
                interval={null}
                indicators={true}
                controls={true}
                style={{ borderRadius: "0" }}
              >
                {project.media.map((media, index) => (
                  <Carousel.Item key={index}>
                    <div style={{
                      height: "400px",
                      background: media.url,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative"
                    }}>
                      {/* Icône pour différencier image/vidéo */}
                      <div style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "20px",
                        fontSize: "0.9em"
                      }}>
                        {media.type === "video" ? (
                          <><FaPlay style={{ marginRight: "5px" }} /> Vidéo</>
                        ) : (
                          <><FaImage style={{ marginRight: "5px" }} /> Photo</>
                        )}
                      </div>

                      {/* Placeholder content */}
                      <div style={{
                        fontSize: "4em",
                        color: "rgba(255, 255, 255, 0.7)"
                      }}>
                        {project.icon}
                      </div>
                    </div>
                    <Carousel.Caption style={{
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      borderRadius: "10px",
                      padding: "10px 15px"
                    }}>
                      <p style={{ margin: "0", fontSize: "1em" }}>{media.caption}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>

          {/* Details Section */}
          <Col md={5} style={{ padding: "30px" }}>
            <div style={{ marginBottom: "25px" }}>
              <Badge
                className="custom-badge"
                style={{
                  backgroundColor: "var(--medium-brown) !important",
                  color: "white !important",
                  fontSize: "0.9em",
                  marginBottom: "15px",
                  border: "none"
                }}
              >
                {project.category}
              </Badge>

              <div style={{ marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ color: "var(--secondary-text)" }}>
                    <FaMapMarkerAlt style={{ marginRight: "8px", color: "var(--medium-brown)" }} />
                    {project.location}
                  </span>
                  <span style={{ color: "var(--secondary-text)" }}>
                    <FaCalendar style={{ marginRight: "8px", color: "var(--medium-brown)" }} />
                    {project.year}
                  </span>
                </div>
                {project.surface && (
                  <div style={{ color: "var(--secondary-text)" }}>
                    <FaRuler style={{ marginRight: "8px", color: "var(--medium-brown)" }} />
                    {project.surface}
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginBottom: "25px" }}>
              <h5 style={{ color: "var(--dark-brown)", marginBottom: "15px" }}>Description</h5>
              <p style={{
                color: "var(--secondary-text)",
                lineHeight: "1.6",
                fontSize: "1em"
              }}>
                {project.fullDescription}
              </p>
            </div>

            {project.details && (
              <div>
                <h5 style={{ color: "var(--dark-brown)", marginBottom: "15px" }}>Détails du projet</h5>

                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "var(--medium-brown)" }}>Client :</strong>
                  <span style={{ color: "var(--secondary-text)", marginLeft: "10px" }}>
                    {project.details.client}
                  </span>
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "var(--medium-brown)" }}>Budget :</strong>
                  <span style={{ color: "var(--secondary-text)", marginLeft: "10px" }}>
                    {project.details.budget}
                  </span>
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <strong style={{ color: "var(--medium-brown)" }}>Durée :</strong>
                  <span style={{ color: "var(--secondary-text)", marginLeft: "10px" }}>
                    {project.details.duree}
                  </span>
                </div>

                {project.details.defis && (
                  <div style={{ marginBottom: "15px" }}>
                    <strong style={{ color: "var(--medium-brown)" }}>Défis relevés :</strong>
                    <ul style={{ color: "var(--secondary-text)", marginTop: "8px", paddingLeft: "20px" }}>
                      {project.details.defis.map((defi, index) => (
                        <li key={index} style={{ marginBottom: "5px" }}>{defi}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.details.materiaux && (
                  <div>
                    <strong style={{ color: "var(--medium-brown)" }}>Matériaux utilisés :</strong>
                    <ul style={{ color: "var(--secondary-text)", marginTop: "8px", paddingLeft: "20px" }}>
                      {project.details.materiaux.map((materiau, index) => (
                        <li key={index} style={{ marginBottom: "5px" }}>{materiau}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer style={{
        backgroundColor: "var(--light-beige)",
        borderTop: "1px solid var(--warm-beige)",
        justifyContent: "center"
      }}>
        <button
          onClick={onClose}
          style={{
            backgroundColor: "var(--medium-brown)",
            border: "none",
            padding: "10px 30px",
            borderRadius: "25px",
            fontSize: "1.1em",
            color: "white",
            cursor: "pointer"
          }}
        >
          <FaTimes style={{ marginRight: "8px" }} />
          Fermer
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function Home() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const services = [
    {
      icon: <FaHome />,
      title: "Résidentiel",
      description: "Aménagement d'intérieur pour votre maison",
      color: "#8B7355"
    },
    {
      icon: <FaBuilding />,
      title: "Commercial", 
      description: "Espaces professionnels et boutiques",
      color: "#A0845C"
    },
    {
      icon: <FaTheaterMasks />,
      title: "Scénographie",
      description: "Créations artistiques et expositions",
      color: "#6B5B47"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Événementiel",
      description: "Décoration pour vos événements",
      color: "#D4B896"
    }
  ];

  const testimonials = [
    {
      text: "MBL Designer a transformé notre salon en un espace chaleureux et moderne. Un travail exceptionnel !",
      author: "Sophie M.",
      project: "Appartement Lyon",
      rating: 5
    },
    {
      text: "Professionnalisme et créativité au rendez-vous. Notre boutique attire maintenant beaucoup plus de clients.",
      author: "Pierre L.",
      project: "Boutique Paris",
      rating: 5
    },
    {
      text: "Une écoute parfaite de nos besoins et un résultat qui dépasse nos attentes. Merci !",
      author: "Marie D.",
      project: "Maison Bordeaux",
      rating: 5
    }
  ];

  // Données complètes des projets (les 3 premiers de la page réalisations)
  const fullProjects = [
    {
      id: 1,
      title: "Appartement Moderne Lyon",
      category: "Résidentiel",
      description: "Rénovation complète d'un appartement de 85m² avec optimisation des espaces et création d'une cuisine ouverte.",
      fullDescription: "Ce projet consistait en la rénovation complète d'un appartement lyonnais des années 70. L'objectif était de moderniser l'espace tout en conservant le charme de l'ancien. Nous avons ouvert la cuisine sur le salon, créé une suite parentale et optimisé les rangements. Le défi principal était de créer une circulation fluide entre les espaces tout en maximisant la luminosité naturelle.",
      location: "Lyon",
      year: "2024",
      surface: "85m²",
      icon: <FaHome />,
      gradient: "var(--medium-brown), var(--light-brown)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #8B7355, #A0845C)",
          caption: "Salon avec cuisine ouverte - Vue d'ensemble"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #A0845C, #D4B896)",
          caption: "Cuisine moderne avec îlot central"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #6B5B47, #8B7355)",
          caption: "Suite parentale avec dressing intégré"
        }
      ],
      details: {
        client: "Famille Martin",
        budget: "45 000€",
        duree: "3 mois",
        defis: ["Optimisation de l'espace", "Création d'une cuisine ouverte", "Amélioration de la luminosité"],
        materiaux: ["Parquet chêne massif", "Plan de travail quartz", "Peintures écologiques"]
      }
    },
    {
      id: 2,
      title: "Boutique de Mode",
      category: "Commercial",
      description: "Aménagement d'une boutique de prêt-à-porter avec création d'un parcours client optimisé.",
      fullDescription: "Conception complète d'une boutique de mode féminine de 120m². Focus sur l'expérience client avec des espaces d'essayage confortables, un éclairage valorisant et une circulation fluide. L'objectif était de créer une atmosphère chaleureuse et moderne qui met en valeur les produits tout en offrant une expérience shopping mémorable.",
      location: "Paris",
      year: "2023",
      surface: "120m²",
      icon: <FaBuilding />,
      gradient: "var(--dark-brown), var(--medium-brown)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #6B5B47, #8B7355)",
          caption: "Vitrine et entrée de la boutique"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #8B7355, #A0845C)",
          caption: "Espace de vente principal avec présentoirs"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #A0845C, #D4B896)",
          caption: "Cabines d'essayage avec éclairage LED"
        },
        {
          type: "video",
          url: "linear-gradient(135deg, #D4B896, #F5F1E8)",
          caption: "Visite virtuelle de la boutique"
        }
      ],
      details: {
        client: "Boutique Élégance",
        budget: "75 000€",
        duree: "4 mois",
        defis: ["Optimisation du parcours client", "Éclairage valorisant", "Acoustique"],
        materiaux: ["Parquet stratifié", "Miroirs sur mesure", "Éclairage LED", "Mobilier design"]
      }
    },
    {
      id: 3,
      title: "Exposition 'Lumières d'Automne'",
      category: "Scénographie",
      description: "Scénographie d'une exposition temporaire sur le thème des saisons avec jeux de lumières immersifs.",
      fullDescription: "Création d'un parcours scénographique pour une exposition temporaire. Utilisation de matériaux naturels, jeux de lumières et ambiances sonores pour immerger le visiteur dans l'univers automnal. Le défi était de créer une expérience immersive qui guide le visiteur à travers les différentes saisons.",
      location: "Musée de Grenoble",
      year: "2023",
      icon: <FaTheaterMasks />,
      gradient: "var(--light-brown), var(--warm-beige)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #D4B896, #F5F1E8)",
          caption: "Entrée de l'exposition avec éclairage d'ambiance"
        },
        {
          type: "video",
          url: "linear-gradient(135deg, #F5F1E8, #D4B896)",
          caption: "Parcours immersif avec jeux de lumières"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #A0845C, #D4B896)",
          caption: "Installation interactive centrale"
        }
      ],
      details: {
        client: "Musée de Grenoble",
        budget: "25 000€",
        duree: "2 mois",
        defis: ["Création d'ambiances immersives", "Intégration technologique", "Parcours visiteur fluide"],
        materiaux: ["Éclairage LED programmable", "Matériaux naturels", "Système sonore", "Projections vidéo"]
      }
    }
  ];

  const portfolioHighlights = fullProjects.map(project => ({
    id: project.id,
    title: project.title.replace(" Lyon", "").replace("Exposition ", "Exposition "),
    location: project.location,
    image: project.media[0].url,
    category: project.category
  }));

  return (
    <div>
      {/* Hero Section */}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <Row style={{ alignItems: "center", minHeight: "100vh", paddingTop: "100px" }}>
            <Col md={6}>
            
              <h1 style={{ fontSize: "3.5em", marginBottom: "30px", color: "var(--primary-text)" }}>
                Créons ensemble votre{" "}
                <strong className="purple">espace de rêve</strong>
              </h1>

              <p style={{ 
                fontSize: "1.3em", 
                color: "var(--secondary-text)", 
                lineHeight: "1.7",
                marginBottom: "40px"
              }}>
                Architecte d'intérieur passionnée, je donne vie à vos projets avec créativité 
                et expertise. Chaque espace raconte une histoire unique.
              </p>

              <div style={{
                marginBottom: "30px",
                fontSize: "1.2em",
                color: "var(--medium-brown)",
                fontWeight: "500"
              }}>
                <span style={{ marginRight: "15px",fontSize: "1.5em", color: "var(--medium-brown)",fontWeight: "500"}}>Je suis votre future</span>
                <Type />
              </div>

              <div style={{ 
                display: "flex", 
                gap: "20px", 
                alignItems: "center",
                marginBottom: "30px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <FaAward style={{ color: "#8B7355", fontSize: "1.5em" }} />
                  <span style={{ color: "var(--secondary-text)" }}>3 ans d'expérience</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <FaHeart style={{ color: "#8B7355", fontSize: "1.5em" }} />
                  <span style={{ color: "var(--secondary-text)" }}>25+ projets réalisés</span>
                </div>
              </div>
            </Col>

            <Col md={6} style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={profileImg}
                  alt="MBL Designer"
                  className="img-fluid"
                  style={{ 
                    maxHeight: "600px",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(139, 115, 85, 0.3)"
                  }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  backgroundColor: "rgba(139, 115, 85, 0.9)",
                  color: "white",
                  padding: "15px 20px",
                  borderRadius: "15px",
                  backdropFilter: "blur(10px)"
                }}>
                  <FaPalette style={{ marginRight: "10px" }} />
                  <strong>MBL Designer</strong>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Portfolio Highlights Carousel */}
      <Container fluid style={{ backgroundColor: "rgba(245, 241, 232, 0.3)", padding: "80px 0" }}>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "2.8em", color: "var(--primary-text)", marginBottom: "20px" }}>
                Mes <strong className="purple">Réalisations Phares</strong>
              </h2>
              <p style={{ fontSize: "1.2em", color: "var(--secondary-text)", maxWidth: "600px", margin: "0 auto" }}>
                Découvrez quelques-uns de mes projets les plus marquants
              </p>
            </Col>
          </Row>
          
          <Carousel 
            interval={4000} 
            indicators={true}
            controls={true}
            style={{ borderRadius: "20px", overflow: "hidden" }}
          >
            {portfolioHighlights.map((project, index) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    height: "400px",
                    background: project.image,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    const fullProject = fullProjects.find(p => p.id === project.id);
                    setSelectedProject(fullProject);
                  }}
                >
                  <div style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    color: "white",
                    padding: "40px",
                    textAlign: "left"
                  }}>
                    <h3 style={{ fontSize: "2.5em", marginBottom: "10px" }}>{project.title}</h3>
                    <p style={{ fontSize: "1.3em", marginBottom: "10px" }}>
                      <FaHome style={{ marginRight: "10px" }} />
                      {project.location}
                    </p>
                    <span style={{
                      backgroundColor: "rgba(139, 115, 85, 0.8)",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontSize: "1em"
                    }}>
                      {project.category}
                    </span>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
          <Row style={{ marginTop: "40px" }}>
            <Col md={12} style={{ textAlign: "center" }}>
              <button
                onClick={() => navigate('/realizations')}
                style={{
                  backgroundColor: "#8B7355",
                  color: "white",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  fontSize: "1.2em",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#6B5B47";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#8B7355";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <FaEye style={{ marginRight: "10px" }} />
                Voir Toutes Mes Réalisations
              </button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Services Section */}
      <Container fluid style={{ padding: "80px 0" }}>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "2.8em", color: "var(--primary-text)", marginBottom: "20px" }}>
                Mes <strong className="purple">Domaines d'Expertise</strong>
              </h2>
              <p style={{ fontSize: "1.2em", color: "var(--secondary-text)", maxWidth: "700px", margin: "0 auto" }}>
                De l'aménagement résidentiel à la scénographie, je vous accompagne dans tous vos projets
              </p>
            </Col>
          </Row>
          <Row>
            {services.map((service, index) => (
              <Col md={6} lg={3} key={index} style={{ marginBottom: "30px" }}>
                <Card
                  style={{
                    height: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "none",
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    boxShadow: "0 5px 15px rgba(139, 115, 85, 0.1)"
                  }}
                  onClick={() => navigate('/services')}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(139, 115, 85, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 5px 15px rgba(139, 115, 85, 0.1)";
                  }}
                >
                  <Card.Body style={{ padding: "40px", textAlign: "center" }}>
                    <div style={{
                      fontSize: "4em",
                      color: service.color,
                      marginBottom: "25px",
                      transition: "all 0.3s ease"
                    }}>
                      {service.icon}
                    </div>
                    <h4 style={{
                      color: "var(--dark-brown)",
                      marginBottom: "20px",
                      fontSize: "1.4em",
                      fontWeight: "bold"
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      color: "var(--secondary-text)",
                      fontSize: "1.1em",
                      lineHeight: "1.6"
                    }}>
                      {service.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col md={12} style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                onClick={() => navigate('/services')}
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #8B7355",
                  color: "#8B7355",
                  padding: "15px 35px",
                  borderRadius: "25px",
                  fontSize: "1.2em",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#8B7355";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#8B7355";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Découvrir Toutes Mes Prestations <FaArrowRight style={{ marginLeft: "10px" }} />
              </button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Testimonials Section */}
      <Container fluid style={{ backgroundColor: "rgba(139, 115, 85, 0.05)", padding: "80px 0" }}>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2 style={{ fontSize: "2.8em", color: "var(--primary-text)", marginBottom: "20px" }}>
                Ce que disent mes <strong className="purple">clients</strong>
              </h2>
              <p style={{ fontSize: "1.2em", color: "var(--secondary-text)" }}>
                Leurs témoignages sont ma plus belle récompense
              </p>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col md={4} key={index} style={{ marginBottom: "30px" }}>
                <Card style={{
                  height: "100%",
                  backgroundColor: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "20px",
                  boxShadow: "0 10px 25px rgba(139, 115, 85, 0.1)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(139, 115, 85, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(139, 115, 85, 0.1)";
                }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <div style={{ marginBottom: "20px" }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} style={{ color: "#FFD700", fontSize: "1.2em", marginRight: "5px" }} />
                      ))}
                    </div>
                    <FaQuoteLeft style={{
                      color: "var(--medium-brown)",
                      fontSize: "2em",
                      marginBottom: "20px"
                    }} />
                    <p style={{
                      fontSize: "1.1em",
                      color: "var(--secondary-text)",
                      lineHeight: "1.6",
                      fontStyle: "italic",
                      marginBottom: "25px"
                    }}>
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h5 style={{ color: "var(--primary-text)", marginBottom: "5px" }}>
                        {testimonial.author}
                      </h5>
                      <small style={{ color: "var(--medium-brown)" }}>
                        {testimonial.project}
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* Call to Action Section */}
      <Container fluid style={{ backgroundColor: "rgba(139, 115, 85, 0.1)", padding: "100px 0" }}>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <FaLightbulb style={{
                fontSize: "5em",
                color: "var(--medium-brown)",
                marginBottom: "30px"
              }} />
              <h2 style={{
                fontSize: "3em",
                color: "var(--primary-text)",
                marginBottom: "25px",
                fontWeight: "bold"
              }}>
                Prêt à donner vie à votre <strong className="purple">projet</strong> ?
              </h2>
              <p style={{
                fontSize: "1.3em",
                color: "var(--secondary-text)",
                maxWidth: "800px",
                margin: "0 auto 50px auto",
                lineHeight: "1.7"
              }}>
                Contactez-moi dès aujourd'hui pour un premier échange gratuit.
                Ensemble, nous créerons l'espace de vos rêves !
              </p>
              <div style={{ display: "flex", gap: "25px", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => navigate('/contact')}
                  style={{
                    backgroundColor: "#8B7355",
                    color: "white",
                    border: "none",
                    padding: "20px 40px",
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
                  <FaEnvelope style={{ marginRight: "12px" }} />
                  Contactez-moi
                </button>
                <button
                  onClick={() => navigate('/about')}
                  style={{
                    backgroundColor: "transparent",
                    border: "3px solid #8B7355",
                    color: "#8B7355",
                    padding: "20px 40px",
                    borderRadius: "30px",
                    fontSize: "1.3em",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#8B7355";
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#8B7355";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <FaHeart style={{ marginRight: "12px" }} />
                  En savoir plus
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Home;
