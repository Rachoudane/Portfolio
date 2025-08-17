import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlineEnvironment } from "react-icons/ai";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      setAlertType("danger");
      setAlertMessage("Veuillez remplir tous les champs obligatoires.");
      setShowAlert(true);
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertType("danger");
      setAlertMessage("Veuillez entrer une adresse email valide.");
      setShowAlert(true);
      return;
    }

    setIsLoading(true);

    try {
      // Configuration EmailJS (vous devrez configurer votre compte EmailJS)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "Nouveau message depuis le portfolio",
        message: formData.message,
        to_name: "Maëlle Barrois Legrand"
      };

      // Vérifier si EmailJS est configuré
      const isEmailJSConfigured = emailjsConfig.serviceId !== 'YOUR_SERVICE_ID' && 
                                  emailjsConfig.templateId !== 'YOUR_TEMPLATE_ID' && 
                                  emailjsConfig.publicKey !== 'YOUR_PUBLIC_KEY';

      if (isEmailJSConfigured) {
        // Envoi réel avec EmailJS
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId, 
          templateParams,
          emailjsConfig.publicKey
        );
      } else {
        // Simulation d'envoi pour la démo (quand EmailJS n'est pas encore configuré)
        console.log("EmailJS non configuré. Données du formulaire:", templateParams);
        console.log("Pour activer l'envoi d'emails, configurez EmailJS dans src/config/emailjs.js");
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      
      setAlertType("success");
      setAlertMessage("Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.");
      setShowAlert(true);
      
      // Réinitialiser le formulaire
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setAlertType("danger");
      setAlertMessage("Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement par email.");
      setShowAlert(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Contactez-moi</strong>
            </h1>
            <p style={{ textAlign: "justify" }}>
              N'hésitez pas à me contacter pour discuter de vos projets, 
              collaborations ou simplement pour échanger sur le design et la créativité.
            </p>
          </Col>
        </Row>

        <Row className="contact-content">
          <Col md={6} className="contact-info">
            <h3 className="contact-title">
              <strong className="purple">Informations de Contact</strong>
            </h3>
            
            <div className="contact-item">
              <AiOutlineMail className="contact-icon" />
              <div>
                <h5>Email</h5>
                <p>mbldesigner59@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <AiOutlineEnvironment className="contact-icon" />
              <div>
                <h5>Localisation</h5>
                <p>France - Travail à distance possible</p>
              </div>
            </div>
          </Col>

          <Col md={6} className="contact-form">
            <h3 className="contact-title">
              <strong className="purple">Envoyez-moi un Message</strong>
            </h3>

            {showAlert && (
              <Alert 
                variant={alertType} 
                onClose={() => setShowAlert(false)} 
                dismissible
              >
                {alertMessage}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nom *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}

                      placeholder="Votre nom"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@example.com"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Sujet</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message..."
                  required
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="contact-submit-btn"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le Message"
                )}
              </Button>


            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;