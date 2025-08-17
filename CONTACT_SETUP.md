# Configuration de la Page de Contact

La page de contact est maintenant fonctionnelle ! Voici comment configurer l'envoi d'emails.

## 🚀 Fonctionnalités Actuelles

✅ **Page de contact complète** avec formulaire
✅ **Validation des champs** (nom, email, message)
✅ **Design responsive** adapté au thème du portfolio
✅ **Feedback utilisateur** avec messages de succès/erreur
✅ **État de chargement** pendant l'envoi
✅ **Prêt pour EmailJS** (service d'envoi d'emails)

## 📧 Configuration EmailJS (Optionnelle)

Pour recevoir les emails directement dans votre boîte mail :

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit

### 2. Configurer un service email
- Dans le dashboard EmailJS, allez dans "Email Services"
- Ajoutez votre service email (Gmail, Outlook, etc.)
- Notez votre **Service ID**

### 3. Créer un template d'email
- Allez dans "Email Templates"
- Créez un nouveau template avec ce contenu :

```
Sujet: Nouveau message depuis le portfolio - {{subject}}

Bonjour Maëlle,

Vous avez reçu un nouveau message depuis votre portfolio :

De: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé automatiquement depuis votre portfolio
```

- Notez votre **Template ID**

### 4. Obtenir votre clé publique
- Allez dans "Account" > "General"
- Copiez votre **Public Key**

### 5. Configurer le portfolio
Modifiez le fichier `src/config/emailjs.js` :

```javascript
export const emailjsConfig = {
  serviceId: 'votre_service_id',      // Remplacez par votre Service ID
  templateId: 'votre_template_id',    // Remplacez par votre Template ID  
  publicKey: 'votre_public_key'       // Remplacez par votre Public Key
};
```

## 🎯 Mode Actuel

**Sans configuration EmailJS :** Le formulaire fonctionne en mode démo
- Les données sont affichées dans la console du navigateur
- L'utilisateur voit un message de succès
- Aucun email n'est envoyé

**Avec configuration EmailJS :** Envoi d'emails réels
- Les messages sont envoyés directement dans votre boîte mail
- Notification automatique des nouveaux contacts

## 📱 Informations de Contact Affichées

- **Email :** mbldesigner59@gmail.com
- **Localisation :** France - Travail à distance possible

Pour modifier ces informations, éditez le fichier :
`src/components/Contact/Contact.js` (lignes 133, 141)

## 🎨 Personnalisation

Le design de la page de contact utilise les couleurs du thème :
- **Couleur principale :** #E1C699 (doré)
- **Couleur de fond :** #4a3d2a (marron)
- **Effets hover** et animations inclus

Les styles se trouvent dans `src/style.css` (section "Contact Page Styles").