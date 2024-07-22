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
    features: ["a", "b", "c"],
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
    tech: ["NextJS", "TypeScript", "Tailwind"],
    features: ["d", "e", "f"],
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
    tech: ["React", "Tailwind", "TypeScript", "Express JS ", "MongoDB"],
    features: ["d", "e", "f"],
    responsibilities: [
      "Implemented the User Interface",
      "Integrated the CRUD api developed by the backend developer",
    ],
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
    tech: ["React", "Tailwind", "TypeScript", "ExpressJS", "SQLite"],
    features: ["a", "b", "c"],
    links: {
      code: "https://github.com/Sanjero20/dash-scheduler",
      live: "https://dash-scheduler.onrender.com/",
    },
  },
];

export const HIGHLIGHTED_PROJECT = [PROJECTS[0], PROJECTS[1]];
