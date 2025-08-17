# 🔧 Solution : Erreur Gmail API avec EmailJS

## ❌ Erreur Rencontrée
`412 Gmail_API : request had insufficient authentication scopes.`

Cette erreur est courante avec EmailJS et Gmail à cause des nouvelles politiques de sécurité de Google.

---

## ✅ **Solution 1 : Mot de Passe d'Application Gmail (Recommandée)**

### **Étape 1 : Activer la Vérification en 2 Étapes**
1. Allez sur [myaccount.google.com](https://myaccount.google.com)
2. Cliquez sur "Sécurité" dans le menu de gauche
3. Trouvez "Vérification en 2 étapes" et cliquez "Commencer"
4. Suivez les instructions pour activer la 2FA

### **Étape 2 : Créer un Mot de Passe d'Application**
1. Retournez dans "Sécurité"
2. Cliquez sur "Mots de passe des applications" (apparaît après activation 2FA)
3. Sélectionnez "Autre (nom personnalisé)"
4. Tapez "EmailJS Portfolio"
5. **Copiez le mot de passe généré** (16 caractères, ex: `abcd efgh ijkl mnop`)

### **Étape 3 : Configuration Manuelle dans EmailJS**
1. Dans EmailJS, allez dans "Email Services"
2. Cliquez "Add New Service"
3. **NE PAS choisir "Gmail"**, choisissez "Other" ou "Custom SMTP"
4. Utilisez ces paramètres :
   - **Service Name** : Gmail MBL
   - **SMTP Server** : `smtp.gmail.com`
   - **Port** : `587`
   - **Username** : `mbldesigner59@gmail.com`
   - **Password** : Le mot de passe d'application (pas votre mot de passe Gmail normal)
   - **Secure** : TLS

---

## ✅ **Solution 2 : Utiliser Outlook (Plus Simple)**

Si Gmail continue à poser problème :

1. **Créez un compte Outlook** : `mbldesigner@outlook.com`
2. **Dans EmailJS** : Choisissez "Outlook" (fonctionne mieux)
3. **Redirigez** les emails Outlook vers Gmail si nécessaire

---

## ✅ **Solution 3 : Service Email Dédié**

Créez un email spécifiquement pour le portfolio :
- `contact.mbldesigner@gmail.com`
- `portfolio.maelle@gmail.com`
- Ou utilisez un autre fournisseur (Yahoo, ProtonMail, etc.)

---

## 🔄 **Solution Temporaire Déjà Ajoutée**

En attendant la configuration EmailJS, j'ai ajouté un **lien mailto de secours** :
- Si l'envoi automatique échoue
- L'utilisateur peut cliquer sur "Cliquez ici pour ouvrir votre client email"
- Cela pré-remplit un email avec toutes les informations du formulaire

---

## 📋 **Étapes Suivantes Recommandées**

1. **Essayez la Solution 1** (mot de passe d'application Gmail)
2. **Si ça ne marche pas**, essayez la Solution 2 (Outlook)
3. **En dernier recours**, créez un email dédié

---

## 🎯 **Test de la Configuration**

Une fois configuré :
1. Modifiez `src/config/emailjs.js` avec vos vraies clés
2. Testez l'envoi depuis le formulaire
3. Vérifiez la réception dans votre boîte mail

---

## 💡 **Pourquoi Cette Erreur ?**

Google a renforcé la sécurité de Gmail API :
- Les connexions OAuth simples sont limitées
- Les mots de passe d'application sont plus sécurisés
- EmailJS doit utiliser des méthodes d'authentification plus strictes

**La solution du mot de passe d'application est la plus fiable !**