import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Carousel, Modal } from "react-bootstrap";
import Particle from "../Particle";
import HexagonGroup from "../HexagonGroup";
import {
  FaHome,
  FaBuilding,
  FaTheaterMasks,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCalendar,
  FaRuler,
  FaTimes,
  FaPlay,
  FaImage
} from "react-icons/fa";

// Composant pour une réalisation individuelle
function RealizationCard({ project, onClick }) {
  return (
    <Col md={6} lg={4} style={{ marginBottom: "30px" }}>
      <Card style={{ 
        height: "100%", 
        backgroundColor: "rgba(245, 241, 232, 0.95)",
        border: "1px solid var(--warm-beige)",
        borderRadius: "15px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        overflow: "hidden"
      }}
      className="realization-card"
      onClick={() => onClick(project)}
      >
        {/* Image placeholder */}
        <div style={{
          height: "200px",
          background: `linear-gradient(135deg, ${project.gradient})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4em",
          color: "rgba(255, 255, 255, 0.8)"
        }}>
          {project.icon}
        </div>
        
        <Card.Body style={{ padding: "25px" }}>
          <div style={{ marginBottom: "15px" }}>
            <Badge
              className="custom-badge"
              style={{
                backgroundColor: "var(--medium-brown) !important",
                color: "white !important",
                fontSize: "0.8em",
                marginBottom: "10px",
                border: "none"
              }}
            >
              {project.category}
            </Badge>
          </div>
          
          <h4 style={{ 
            color: "var(--dark-brown)", 
            marginBottom: "10px",
            fontSize: "1.3em",
            fontWeight: "600"
          }}>
            {project.title}
          </h4>
          
          <p style={{ 
            color: "var(--secondary-text)", 
            fontSize: "0.95em",
            lineHeight: "1.4",
            marginBottom: "15px"
          }}>
            {project.description}
          </p>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            fontSize: "0.85em",
            color: "var(--secondary-text)"
          }}>
            <span>
              <FaMapMarkerAlt style={{ marginRight: "5px" }} />
              {project.location}
            </span>
            <span>
              <FaCalendar style={{ marginRight: "5px" }} />
              {project.year}
            </span>
          </div>
          
          {project.surface && (
            <div style={{ 
              marginTop: "10px",
              fontSize: "0.85em",
              color: "var(--secondary-text)"
            }}>
              <FaRuler style={{ marginRight: "5px" }} />
              {project.surface}
            </div>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

// Modal de détail avec carousel
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
        <Button
          onClick={onClose}
          style={{
            backgroundColor: "var(--medium-brown)",
            border: "none",
            padding: "10px 30px",
            borderRadius: "25px",
            fontSize: "1.1em"
          }}
        >
          <FaTimes style={{ marginRight: "8px" }} />
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function Realizations() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("Tous");

  const projects = [
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
    },
    {
      id: 4,
      title: "Mariage Champêtre",
      category: "Événementiel",
      description: "Décoration complète d'un mariage en extérieur avec thématique champêtre et naturelle.",
      fullDescription: "Organisation de la décoration pour un mariage de 150 invités. Création d'ambiances avec des matériaux naturels, guirlandes lumineuses et compositions florales champêtres. L'objectif était de créer une atmosphère romantique et authentique en harmonie avec le cadre historique du château.",
      location: "Château de Versailles",
      year: "2024",
      icon: <FaCalendarAlt />,
      gradient: "var(--warm-beige), var(--light-beige)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #F5F1E8, #D4B896)",
          caption: "Cérémonie en extérieur avec arche florale"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #D4B896, #A0845C)",
          caption: "Tables de réception avec centres floraux"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #A0845C, #8B7355)",
          caption: "Éclairage d'ambiance pour la soirée"
        },
        {
          type: "video",
          url: "linear-gradient(135deg, #8B7355, #6B5B47)",
          caption: "Timelapse de l'installation complète"
        }
      ],
      details: {
        client: "Famille Dubois",
        budget: "15 000€",
        duree: "1 mois de préparation",
        defis: ["Décoration extérieure résistante", "Coordination avec 150 invités", "Éclairage nocturne"],
        materiaux: ["Fleurs de saison", "Bois naturel", "Guirlandes LED", "Tissus lin et dentelle"]
      }
    },
    {
      id: 5,
      title: "Loft Industriel",
      category: "Résidentiel",
      description: "Transformation d'un ancien atelier en loft familial avec conservation de l'esprit industriel.",
      fullDescription: "Réhabilitation d'un ancien atelier de 200m² en loft familial. Conservation des éléments industriels (poutres, briques) tout en créant des espaces de vie chaleureux et fonctionnels. Le défi était de concilier l'authenticité industrielle avec le confort moderne d'une maison familiale.",
      location: "Lille",
      year: "2023",
      surface: "200m²",
      icon: <FaHome />,
      gradient: "var(--deep-brown), var(--dark-brown)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #6B5B47, #8B7355)",
          caption: "Salon principal avec poutres apparentes"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #8B7355, #A0845C)",
          caption: "Cuisine ouverte style industriel"
        },
        {
          type: "video",
          url: "linear-gradient(135deg, #A0845C, #D4B896)",
          caption: "Visite complète du loft rénové"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #D4B896, #F5F1E8)",
          caption: "Mezzanine avec espace bureau"
        }
      ],
      details: {
        client: "Famille Moreau",
        budget: "85 000€",
        duree: "6 mois",
        defis: ["Conservation éléments industriels", "Isolation thermique", "Création espaces familiaux"],
        materiaux: ["Acier brut", "Brique apparente", "Béton ciré", "Bois massif"]
      }
    },
    {
      id: 6,
      title: "Restaurant Gastronomique",
      category: "Commercial",
      description: "Aménagement d'un restaurant haut de gamme avec création d'ambiances intimistes.",
      fullDescription: "Conception complète d'un restaurant gastronomique 50 couverts. Création d'ambiances feutrées avec éclairage sur mesure, matériaux nobles et acoustique travaillée. L'objectif était de créer une expérience culinaire exceptionnelle dans un cadre raffiné et chaleureux.",
      location: "Bordeaux",
      year: "2024",
      surface: "180m²",
      icon: <FaBuilding />,
      gradient: "var(--medium-brown), var(--warm-beige)",
      media: [
        {
          type: "image",
          url: "linear-gradient(135deg, #8B7355, #A0845C)",
          caption: "Salle principale avec éclairage d'ambiance"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #A0845C, #D4B896)",
          caption: "Bar et espace cocktails"
        },
        {
          type: "video",
          url: "linear-gradient(135deg, #D4B896, #F5F1E8)",
          caption: "Ambiance nocturne du restaurant"
        },
        {
          type: "image",
          url: "linear-gradient(135deg, #F5F1E8, #8B7355)",
          caption: "Cuisine ouverte visible depuis la salle"
        }
      ],
      details: {
        client: "Restaurant Le Gourmet",
        budget: "120 000€",
        duree: "5 mois",
        defis: ["Acoustique optimisée", "Éclairage d'ambiance", "Circulation service"],
        materiaux: ["Velours haut de gamme", "Bois noble", "Éclairage LED sur mesure", "Pierre naturelle"]
      }
    }
  ];

  const categories = ["Tous", "Résidentiel", "Commercial", "Scénographie", "Événementiel"];

  const filteredProjects = filter === "Tous"
    ? projects
    : projects.filter(project => project.category === filter);



  return (
    <Container fluid className="realizations-section">
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
              Mes <strong className="purple">Réalisations</strong>
            </h1>
            <p style={{ 
              fontSize: "1.2em", 
              color: "var(--secondary-text)",
              maxWidth: "800px",
              margin: "0 auto 30px auto",
              lineHeight: "1.6"
            }}>
              Découvrez une sélection de mes projets récents, de l'aménagement résidentiel 
              à la scénographie, en passant par les espaces commerciaux.
            </p>
            {/* Hexagones décoratifs après le titre */}
            <HexagonGroup position="center" />
          </Col>
        </Row>

        {/* Filter Buttons */}
        <Row style={{ justifyContent: "center", marginBottom: "40px" }}>
          <Col md={12} style={{ textAlign: "center" }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                style={{
                  backgroundColor: filter === category ? "var(--medium-brown)" : "transparent",
                  color: filter === category ? "white" : "var(--medium-brown)",
                  border: `2px solid var(--medium-brown)`,
                  borderRadius: "25px",
                  margin: "5px",
                  padding: "8px 20px",
                  fontWeight: "600",
                  transition: "all 0.3s ease"
                }}
                className="filter-btn"
              >
                {category}
              </Button>
            ))}
          </Col>
        </Row>

        {/* Hexagones décoratifs avant la grille de projets */}
        <HexagonGroup position="right" />

        {/* Projects Grid */}
        <Row style={{ justifyContent: "center" }}>
          {filteredProjects.map((project) => (
            <RealizationCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </Row>

        {/* Hexagones décoratifs avant les statistiques */}
        <HexagonGroup position="scattered" />

        {/* Stats Section */}
        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={10}>
            <div style={{ 
              backgroundColor: "rgba(139, 115, 85, 0.1)",
              padding: "40px",
              borderRadius: "20px",
              textAlign: "center"
            }}>
              <Row>
                <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                  <h3 style={{ color: "var(--medium-brown)", fontSize: "2.5em" }}>25+</h3>
                  <p style={{ color: "var(--secondary-text)" }}>Projets réalisés</p>
                </Col>
                <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                  <h3 style={{ color: "var(--medium-brown)", fontSize: "2.5em" }}>100%</h3>
                  <p style={{ color: "var(--secondary-text)" }}>Clients satisfaits</p>
                </Col>
                <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                  <h3 style={{ color: "var(--medium-brown)", fontSize: "2.5em" }}>3</h3>
                  <p style={{ color: "var(--secondary-text)" }}>Années d'expérience</p>
                </Col>
                <Col md={3} sm={6} style={{ marginBottom: "20px" }}>
                  <h3 style={{ color: "var(--medium-brown)", fontSize: "2.5em" }}>4</h3>
                  <p style={{ color: "var(--secondary-text)" }}>Domaines d'expertise</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </Container>
  );
}

export default Realizations;
