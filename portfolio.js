/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen
const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section
const illustration = {
  animated: true 
};

const greeting = {
  username: "Michele Menzione",
  title: "Ciao, sono Michele Menzione",
  subTitle: emoji(
    "DevOps Engineer & System Administrator 🚀. Progetto infrastrutture resilienti, automatizzo pipeline CI/CD e gestisco ambienti Cloud Azure complessi."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Michibit",
  linkedin: "https://www.linkedin.com/in/michele-menzione-534580268/",
  gmail: "menzione.m@gmail.com",
  display: true 
};

// Skills Section
const skillsSection = {
  title: "Competenze Tecniche",
  subTitle:
    "Full Stack DevOps con focus su High Availability, Security e Automation 🔧",
  skills: [
    emoji("☁️ Gestione infrastrutture Cloud (Azure) e Ibride"),
    emoji("🐳 Containerizzazione (Docker) e Orchestrazione (Kubernetes)"),
    emoji("🔄 Pipeline CI/CD avanzate (GitLab CI, GitHub Actions)"),
    emoji("⚙️ Infrastructure as Code e Configuration Management (Ansible, Terraform)")
  ],

  softwareSkills: [
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-dharmachakra" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true 
};

// Education Section
const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Università degli studi di Salerno (Unisa)",
      logo: require("./assets/images/Unisalogo.png"),
      subHeader: "Laurea Triennale in Informatica",
      duration: "Settembre 2021 - Marzo 2024",
      descBullets: [
        "Tesi sperimentale su architetture Cloud",
        "Focus su Sistemi Distribuiti e Sicurezza delle Reti"
      ]
    }
  ]
};

// Top Skills - Proficiency
const techStack = {
  viewSkillBars: true, 
  experience: [
    { Stack: "SysAdmin (Linux/Win)", progressPercentage: "90%" },
    { Stack: "Cloud Azure", progressPercentage: "85%" },
    { Stack: "Scripting (Py/Bash)", progressPercentage: "85%" },
    { Stack: "Kubernetes & Docker", progressPercentage: "75%" },
    { Stack: "CI/CD Automation", progressPercentage: "80%" }
  ],
  displayCodersrank: false 
};

// Work experience section
const workExperiences = {
  display: true, 
  experience: [
    {
      role: "DevOps & System Engineer",
      company: "System Management S.p.A.",
      companylogo: require("./assets/images/sysmanagement_logo.jpg"), 
      date: "Giugno 2023 - Presente",
      desc: "Gestione end-to-end dell'infrastruttura aziendale e dei clienti.",
      descBullets: [
        "Amministrazione domini Active Directory ibridi",
        "Implementazione pipeline di deploy automatico",
        "Monitoraggio proattivo dei sistemi e Incident Response",
        "Migrazione servizi verso architetture Cloud-native"
      ]
    },
    {
      role: "R&D Engineer",
      company: "System Management S.p.A.",
      companylogo: require("./assets/images/sysmanagement_logo.jpg"), 
      date: "Gennaio 2023 - Giugno 2023",
      desc: "Ricerca applicata su nuove tecnologie di automazione.",
      descBullets: [
        "Sviluppo script Python per automazione task ripetitivi",
        "Proof of Concept per integrazione sistemi legacy-cloud"
      ]
    }
  ]
};

/* IMPORTANTE: Ho attivato questa sezione. Mostra i tuoi repo GitHub reali. */
const openSource = {
  showGithubProfile: "true", 
  display: true 
};

// Big Projects
const bigProjects = {
  title: "Progetti in Evidenza",
  subtitle: "Architetture e soluzioni deployate",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "K8s Multi-Cloud Cluster",
      projectDesc: "Cluster Kubernetes in alta disponibilità distribuito geograficamente per garantire disaster recovery e scalabilità automatica.",
      footerLink: [
        {
          name: "Vedi su GitHub",
          url: "https://github.com/Michibit" // Inserisci il link al repo specifico se esiste
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Enterprise CI/CD Pipeline",
      projectDesc: "Pipeline completa per il ciclo di vita del software: dai test automatici (Unit/Integration) al deploy in produzione su container.",
      footerLink: [
        {
          name: "Vedi su GitHub",
          url: "https://github.com/Michibit"
        }
      ]
    }
  ],
  display: true 
};

// Achievement Section
const achievementSection = {
  title: emoji("Certificazioni 🏆"),
  subtitle: "Validazione continua delle competenze",
  achievementsCards: [
    {
      title: "Azure Administrator Associate",
      subtitle: "Certificazione Microsoft AZ-104. Comprova competenze avanzate su gestione identità, governance, storage e reti virtuali in ambiente Azure.",
      image: require("./assets/images/azure-administrator-associate.png"),
      imageAlt: "Azure Admin Logo",
      footerLink: [
        {
          name: "Verifica Credenziale",
          url: "https://learn.microsoft.com/api/credentials/share/it-it/MicheleMenzione-8223/D155D2D9EE7D95EE?sharingId=88BCFBE49FFCADE0"
        }
      ]
    }
  ],
  display: true 
};

// Sezioni disabilitate per pulizia (riattivale quando hai contenuti specifici)
const blogSection = { display: false, blogs: [] };
const talkSection = { display: false, talks: [] };
const podcastSection = { display: false, podcast: [] };

const resumeSection = {
  title: "Curriculum Vitae",
  subtitle: "Visualizza il mio percorso completo in formato PDF",
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  display: true 
};

const contactInfo = {
  title: emoji("Contattami 📬"),
  subtitle: "Disponibile per consulenze su Cloud Architecture e DevOps.",
  number: "",
  email_address: "menzione.m@gmail.com"
};

const twitterDetails = {
  userName: "twitter", 
  display: false 
};

const isHireable = true; 

export {
  illustration, greeting, socialMediaLinks, splashScreen, skillsSection,
  educationInfo, techStack, workExperiences, openSource, bigProjects,
  achievementSection, blogSection, talkSection, podcastSection,
  contactInfo, twitterDetails, isHireable, resumeSection
};
