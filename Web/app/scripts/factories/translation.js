angular.module('eva').factory('translation', function () {
    var strings = {};


    strings.english = {

        edit: "Edit",
        settings:"Settings",
        ongoing_challenges:"Current challenges",
        progress:"Progress",
        overview:"Overview",
        challenges:"Challenges",
        challenges_completed:"Completed challenges",
        achievements_all: "All achievements",
        challenge_score_notification: "Difficulty: ",
        accept_challenge: "Accept challenge",
        choose_challenge: "Choose a challenge:",
        welcome_notification: "Welcome ",
        get_challenge: "Look at challenge",
        get_progress: "Look at progress",
        login_alternative_login: "Alternative Login",
        login_facebook_login: "Log in with Facebook",
        login_email: "Email",
        login_password: "Password",
        login_lost_password: "Lost password",
        login_button: "Login",
        login_or: "Or",
        login_successful: "Login successful",
        register: "Register",
        register_personal_info_label: "Personal Info",
        register_first_name: "First Name",
        register_name: "Last Name",
        register_email: "E-mail",
        register_address_label: "Address",
        register_street: "Street",
        register_postal_code: "Postal Code",
        register_city: "City",
        register_account_label: "Account",
        register_sex_male: "Male",
        register_sex_female: "Female",
        register_repeat_password: "Repeat password",
        register_hint_email: "A valid e-mail looks like this: example@mail.be",
        register_hint_password: "Your password has to be between 7 and 128 characters.",
        register_already_exists: "A user is already registered with your e-mail address.",
        register_successful: "Successfully registered",
        register_successful_message: "We already filled in your email address.",
        error: "Error",
        internal_error: "It's not your fault! It's ours.",
        create_account: "Create account",
        action_bar_search: "Search",
        action_bar_share: "Share",
        challenge: "Challenge",
        current_challenge: "Current challenge",
        logout: "Logout",
        grade_omnivore: "Omnivore",
        grade_pescetariar: "Pescetariar (no meat, fish ok)",
        grade_parttime_vegetarian: "Parttime vegetarian (at least 3 times per week vegetarian)",
        grade_vegetarian: "Vegetarian (no meat or fish)",
        grade_vegan: "Vegan (no animal products)"
    };
    strings.dutch = {
        edit: "Pas aan",
        settings:"Instellingen",
        ongoing_challenges:"Lopende uitdagingen",
        progress:"Voortgang",
        overview:"Overzicht",
        challenges:"Uitdagingen",
        challenges_completed:"Voltooide uitdagingen",
        achievements_all: "Alle prestaties",
        challenge_score_notification: "Moeilijkheid: ",
        accept_challenge: "Uitdaging aangaan",
        choose_challenge: "Kies een uitdaging:",
        welcome_notification: "Welkom ",
        get_challenge: "Bekijk uitdaging",
        get_progress: "Bekijk vooruitgang",
        login_alternative_login: "Alternatieve Login",
        login_facebook_login: "Aanmelden met Facebook",
        login_email: "E-mail",
        login_password: "Wachtwoord",
        login_lost_password: "Wachtwoord vergeten?",
        login_button: "Aanmelden",
        login_or: "Of",
        login_successful: "Succesvol aangemeld",
        register: "Registreren",
        register_personal_info_label: "Persoonlijke gegevens",
        register_first_name: "Voornaam",
        register_name: "Achternaam",
        register_email: "E-mail",
        register_address_label: "Adres",
        register_street: "Straat",
        register_postal_code: "Postcode",
        register_city: "Plaats",
        register_account_label: "Account",
        register_sex_male: "Man",
        register_sex_female: "Vrouw",
        register_repeat_password: "Herhaal wachtwoord",
        register_hint_email: "Een e-mailadres ziet er zo uit: voorbeeld@mail.be",
        register_hint_password: "Een wachtwoord is minstens 7 karakters en maximum 128.",
        register_already_exists: "Er bestaat al een account met het opgegeven e-mailadres.",
        register_successful: "Succesvol geregistreerd",
        register_successful_message: "We hebben jouw e-mailadres al ingevuld.",
        error: "Fout",
        internal_error: "Er is iets fout gegaan.",
        create_account: "Maak een account",
        action_bar_search: "Zoeken",
        action_bar_share: "Delen",
        challenge: "Uitdaging",
        current_challenge: "Huidige uitdaging",
        logout: "Afmelden",
        grade_omnivore: "Omnivoor",
        grade_pescetariar: "Pescotariër (geen vlees, wel vis)",
        grade_parttime_vegetarian: "Parttime-vegetariër (minstens 3 keer per week vegetarisch)",
        grade_vegetarian: "Vegetariër (geen vlees of vis)",
        grade_vegan: "Veganist (geen dierlijke producten)"
    };
    strings.french = {
        edit: "Editer",
        settings:"Paramètres",
        ongoing_challenges:"Défis en cours",
        progress:"Progrès",
        overview:"Résumé",
        challenges:"Défis",
        challenges_completed:"Défis finis",
        achievements_all: "Acquis",
        challenge_score_notification: "Difficulté: ",
        accept_challenge: "Fait le défi",
        choose_challenge: "Choisi un défi:",
        welcome_notification: "Bienvenu ",
        get_challenge: "Regarde au défi",
        get_progress: "Regarde à l\'amélioration",
        login_alternative_login: "Connexion alternative",
        login_facebook_login: "Se connecter avec Facebook",
        login_email: "Adresse e-mail",
        login_password: "Mot de passe",
        login_lost_password: "Mot de passe oublié?",
        login_button: "Se connecter",
        login_or: "Ou",
        login_successful: "Succès connecter",
        register: "Se faire inscrire",
        register_personal_info_label: "Données personelles",
        register_first_name: "Prénom",
        register_name: "Nom",
        register_email: "Adresse E-mail",
        register_address_label: "Adresse",
        register_street: "Rue",
        register_postal_code: "Code Postale",
        register_city: "City",
        register_account_label: "Compte",
        register_sex_male: "Masculin",
        register_sex_female: "Feminin",
        register_repeat_password: "Répéter mot de passe",
        register_hint_email: "Une adresse e-mail ressemble à ceci: example@mail.be",
        register_hint_password: "Votre mot de passe doit être compris entre 7 et 128 caractères.",
        register_already_exists: "Un compte avec les données spécifiées existe déjà.",
        register_successful: "Succès enregistré",
        register_successful_message: "Nous avons besoin de votre adresse e-mail déjà rempli.",
        error: "Erreur",
        internal_error: "Quelque chose a mal tourné.",
        create_account: "Créer un compte",
        action_bar_search: "Chercher",
        action_bar_share: "Partager",
        challenge: "Défi",
        current_challenge: "Défi actuel",
        logout: "Se déconnecter",
        grade_omnivore: "Omnivore",
        grade_pescetariar: "Pescétarien (pas de viande, poisson est ok)",
        grade_parttime_vegetarian: "Végétarien à temps partiel (au moins 3 fois par semaine un repas végétarien)",
        grade_vegetarian: "Végétarien (pas de viande ou poisson)",
        grade_vegan: "Végan (pas de produits animals)"
    };


    strings.currentlySelected = strings.english;
    strings.getCurrentlySelected = function () {
        return strings.currentlySelected;
    };
    strings.selectEnglish = function () {
        strings.currentlySelected = strings.english;
        console.log(strings.getCurrentlySelected());
    };
    strings.selectDutch = function () {
        strings.currentlySelected = strings.dutch;
        console.log(strings.getCurrentlySelected());
    };
    strings.selectFrench = function () {
        strings.currentlySelected = strings.french;
    };


    return strings;
});
