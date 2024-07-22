export interface ProjectType {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  tech: string[];
  features: string[];
  responsibilities?: string[]; // for project collaborations
  links: {
    code: string;
    live: string;
  };
}

export const PROJECTS: ProjectType[] = [
  {
    title: "Job Tracker",
    description:
      "A full stack web application for monitoring job application status and interview schedules",
    imgSrc: "/job-tracker.png",
    imgAlt: "job tracker",
    tech: ["React", "Tailwind", "TypeScript", "ExpressJS", "PostgreSQL"],
    features: [
      "Manage account information and data",
      "User authentication using JWT Tokens",
      "Add/Update/Delete job applications details",
      "Edit interview schedules dates",
      "Graphs and statistics about job statuses",
    ],
    links: {
      code: "https://github.com/Sanjero20/job-tracker",
      live: "https://job-tracker-0zfp.onrender.com/",
    },
  },
  {
    title: "Geo Trainer PH",
    description:
      "An interactive learning platform for memorizing the geolocation of the Philippines",
    imgSrc: "/geo-trainer-ph.png",
    imgAlt: "geo trainer",
    tech: ["NextJS", "TypeScript", "Tailwind", "Leaflet"],
    features: [
      "Hightlight a specific region of the map",
      "Check provice name by hovering through the map",
      "Time-based interactive map quiz",
    ],
    links: {
      code: "https://github.com/Sanjero20/geo-trainer",
      live: "https://geo-trainer-ph.vercel.app/",
    },
  },
  {
    title: "Mini Message Board",
    description: "A simple application for sending messages online",
    imgSrc: "/message-board.png",
    imgAlt: "message board",
    tech: ["React", "Tailwind", "TypeScript", "Express JS", "MongoDB"],
    features: ["Send messages with or without a username."],
    links: {
      code: "https://github.com/Sanjero20/mini-message-board",
      live: "https://mini-message-board-bsor.onrender.com/",
    },
  },
];

export const COLLAB_PROJECTS: ProjectType[] = [
  {
    title: "Dash Scheduler",
    description:
      "A system for managing faculty schedules to avoid conflicting room utilizations",
    imgSrc: "/dash-scheduler.png",
    imgAlt: "dash scheduler",
    tech: [
      "React",
      "Tailwind",
      "Zustand",
      "React-Query",
      "TypeScript",
      "ExpressJS",
      "SQLite",
    ],
    features: [
      "Admin panel for managing faculty accounts",
      "Highlight conflicting schedules based on room utilization",
      "Printable schedules for each faculty or class sections",
    ],
    responsibilities: [
      "Implemented the user interface.",
      "Integrated the CRUD api developed by the backend developer.",
      "Transform an excel document to HTML tables format.",
    ],
    links: {
      code: "https://github.com/Sanjero20/dash-scheduler",
      live: "https://dash-scheduler.onrender.com/",
    },
  },
];

export const HIGHLIGHTED_PROJECT = [PROJECTS[0], PROJECTS[1]];

export const ALL_PROJECTS = [...PROJECTS, ...COLLAB_PROJECTS];
