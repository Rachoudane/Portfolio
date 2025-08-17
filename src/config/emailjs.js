// Configuration EmailJS
// Pour activer l'envoi d'emails, suivez ces étapes :

// 1. Créez un compte sur https://www.emailjs.com/
// 2. Créez un service email (Gmail, Outlook, etc.)
// 3. Créez un template d'email
// 4. Remplacez les valeurs ci-dessous par vos vraies clés

export const emailjsConfig = {
  // Service ID d'EmailJS
  serviceId: 'service_d4wug6l',
  
  // Template ID d'EmailJS  
  templateId: 'template_e8p8ww6',
  
  // Public Key d'EmailJS
  publicKey: 'RqMF4uFZvKCYDJRKo'
};

// Template d'email recommandé pour EmailJS :
/*
Nouveau message depuis le portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis le portfolio de Maëlle Barrois Legrand
*/

// Variables disponibles dans le template :
// - from_name : Nom de l'expéditeur
// - from_email : Email de l'expéditeur  
// - subject : Sujet du message
// - message : Contenu du message
// - to_name : Nom du destinataire (Maëlle Barrois Legrand)