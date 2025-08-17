<h2 align="center">
  Portfolio MBL Designer<br/>
  Site Web Professionnel d'Architecture d'Intérieur
</h2>

<br/>

<center>

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) &nbsp;
[![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) &nbsp;

</center>

## À Propos

Portfolio professionnel de Maëlle Barrois-Legrand (MBL Designer), architecte d'intérieur spécialisée dans l'aménagement résidentiel, commercial, la scénographie et l'événementiel.

## Construit Avec

Ce portfolio présente les réalisations, services et compétences de MBL Designer dans le domaine de l'architecture d'intérieur.<br/>

## Technologies Utilisées

- React.js
- Node.js
- CSS3
- React-Bootstrap
- EmailJS (pour le formulaire de contact)
- React Router

## Fonctionnalités

**📖 Site Multi-Pages**
- Page d'accueil avec carousel interactif
- À propos avec présentation personnelle
- Services détaillés par domaine
- Réalisations avec modals et carousel d'images
- Formulaire de contact fonctionnel

**🎨 Design Personnalisé**
- Thème beige/brown cohérent
- Animations fluides et modernes
- Interface utilisateur intuitive

**📱 Entièrement Responsive**
- Optimisé pour mobile, tablette et desktop
- Navigation adaptative

## Installation et Configuration

### Prérequis
- Node.js installé sur votre machine
- Git pour cloner le repository

### 🛠 Instructions d'Installation

1. **Cloner le repository :**
   ```bash
   git clone [URL_DU_REPO]
   cd Portfolio
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer en mode développement :**
   ```bash
   npm start
   ```

Le site s'ouvre automatiquement sur [http://localhost:3000](http://localhost:3000)

### 📧 Configuration du Formulaire de Contact

Pour activer l'envoi d'emails via le formulaire de contact :

1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurez vos paramètres dans `src/config/emailjs.js`
3. Suivez le guide détaillé dans `EMAILJS_CONFIGURED.md`

## Structure du Projet

```
src/
├── components/
│   ├── Home/          # Page d'accueil
│   ├── About/         # Page à propos
│   ├── Services/      # Page services
│   ├── Realizations/  # Page réalisations
│   ├── Contact/       # Page contact
│   └── ...
├── Assets/            # Images et ressources
└── config/            # Configuration EmailJS
```

## Personnalisation

Pour personnaliser le contenu :

1. **Informations personnelles :** Modifiez `src/components/About/AboutCard.js`
2. **Services :** Éditez `src/components/Services/Services.js`
3. **Réalisations :** Ajoutez vos projets dans `src/components/Realizations/Realizations.js`
4. **Contact :** Configurez vos informations dans `src/components/Contact/Contact.js`

## 🎨 Thème de Couleurs

Le site utilise une palette beige/brown définie dans `src/style.css` :
- Beige clair : #F5F1E8
- Beige chaud : #E8DCC6
- Marron moyen : #8B7355
- Marron foncé : #6B5B47

---

**© 2024 MBL Designer - Maëlle Barrois-Legrand**
