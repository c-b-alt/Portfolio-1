import accidentImg from "../assets/Accident_routier.png";
import dashboardImg from "../assets/Dashboard_google.png";
import dashboardImg2 from "../assets/dashboard_perso.png";
import MonkiappImg from "../assets/Monkiapp.png";
import PlayConnectImg from "../assets/Playconnect.png";
import AscendImg from "../assets/Ascend.png";
import AscendgrowthImg from "../assets/Ascend_growth.png";
import BlogeniaImg from "../assets/Blogenia.png";
import SolarcapImg from "../assets/Chapeau.png";
import LARQImg from "../assets/LARQ.png";
import SQLImg from "../assets/SQL.png";
import BDDImg from "../assets/BDD.png";
import BDDLoginImg from "../assets/BDD_Login.png";
export const projectsData = [
    {
        id: 1,
        title: "Analyse Accidents Routiers",
        description: "Analyse approfondie du profil et des comportements à risque des usagers basée sur les données d'accidents de la route.",
        stack: ["Python", "Pandas", "Matplotlib"],
        role: "Data Analyst",
        image: `url(${accidentImg})`,
        link: "https://www.canva.com/design/DAG2UpX8l-Y/O5n4Tqy4WKy0LBxrG-7aYw/view"
    },
    {
        id: 2,
        title: "Dashboard Google Merch Shop",
        description: "Analyse comparative des performances utilisateurs par appareil sur Looker Studio pour optimiser les stratégies UX et marketing.",
        stack: ["Looker Studio", "Google Analytics", "Data Viz"],
        role: "Data Analyst",
        image: `url(${dashboardImg})`,
        link: "https://lookerstudio.google.com/reporting/9af93a97-5763-4a00-a04e-1279285261e3"
    },
    {
        id: 3,
        title: "Dashboard Société de Fournitures de Bureau / E-commerce 📝 (Analyse de la Rentabilité)",
        description: "Analyse de la croissance selon les zones géographiques.",
        stack: ["Looker Studio", "CSV upload", "Google Sheets", "SQLite"],
        role: "Data Analyst",
        image: `url(${dashboardImg2})`,
        link: "https://lookerstudio.google.com/reporting/def5e15d-fa35-4f93-881b-71b152f2658a"
    },
    {
        id: 4,
        title: "Application éducative Monky (anciennement Mochi)",
        description: "Création d'une application éducative gamifiée pour permettre aux étudiants de réviser et d'apprendre de manière interactive tout en réduisant leur stress.",
        stack: ["Cursor", "Github",],
        role: "Gamification",
        image: `url(${MonkiappImg})`,
        link: "https://master.gamification-app.pages.dev/"
    },
    {
        id: 5,
        title: "Création d'un business avec toutes les bases pour le lancer Play Connect",
        description: "Créer un business de A à Z avec une analyse de marché et un business plan complet.",
        stack: ["Canva", "Google Docs",],
        role: "Stratégie d'entreprise",
        image: `url(${PlayConnectImg})`,
        link: "https://www.canva.com/design/DAG57Bufm6k/baH5I3Oc2qi9aTutGcmZgA/view"
    },
    {
        id: 6,
        title: "Création de la stratégie marketing d'un business",
        description: "Déterminer des stratégie marketing pour acquérir des clients.",
        stack: ["Canva", "Google Docs", "Notion"],
        role: "Marketing Stratégique",
        image: `url(${AscendImg})`,
        link: "https://www.canva.com/design/DAGzaqM16dw/yNVNLvrE_gho17SuuNikcg/edit?utm_content=DAGzaqM16dw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        id: 7,
        title: "Création de la stratégie d'aquisition d'un business",
        description: "Détérminer des stratégie pour acquérir des clients en dépensant le moins possible.",
        stack: ["Canva", "Google Docs", "Notion"],
        role: "Growth Hacking",
        image: `url(${AscendgrowthImg})`,
        link: "https://www.canva.com/design/DAG5tt6VOD8/ksmZzZoPwm7D6S6x4PmleA/view"
    },
    {
        id: 8,
        title: "Stratégie de contenu pour un blog",
        description: "Création d'un blog nommé Blogenia avec une stratégie de contenu complète.",
        stack: ["Canva", "Perplexity", "Google IA Studio", "Google Docs",],
        role: "IA générative",
        image: `url(${BlogeniaImg})`,
        link: "https://www.canva.com/design/DAG5biJECqc/ELRr76av2K2fKssEAuZptQ/view"
    },
    {
        id: 9,
        title: "BDD ",
        description: "Création d'un outils interne dédié à l'école pour gérer le des ambassadeurs de l'école.",
        stack: ["Cursor", "Github", "Notion"],
        role: "Business Deep Dive",
        image: `url(${BDDImg})`,
        link: "#",
        gallery: [BDDLoginImg]
    },
    {
        id: 10,
        title: "Projet SQL ",
        description: "Présenter la base de donnée d'une entreprise au choix.",
        stack: ["SQL", "PHP My Admin", "Wamp Server"],
        role: "SQL",
        image: `url(${SQLImg})`,
        link: "https://www.canva.com/design/DAG5KuABhfc/D4BksIuA4b0f6DTG_8Puyg/edit?utm_content=DAG5KuABhfc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
        id: 11,
        title: " Premier projet de l'année(QVMA)",
        description: "Ceci a été mon premier projet de l'année (Qui veut être mon associé ?) sur un chapeau connecté dédié au enfants.",
        stack: ["Lovable", "Trello", "Cursor"],
        role: "Premier projet de l'année",
        image: `url(${SolarcapImg})`,
        link: "https://solar-bob-charge.lovable.app"
    },
    {
        id: 12,
        title: "LARQ",
        description: "Créer un site web pour illustrer le pitch sur la marque choisie qui est LARQ, une bouteille connectée.",
        stack: ["Cursor", "VS code", "Vercel", "pitch"],
        role: "Pitch",
        image: `url(${LARQImg})`,
        link: "https://larqpitch-git-main-maxims-projects-12cd10bc.vercel.app/nos-produits"
    }
];
