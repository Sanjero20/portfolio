export interface ProjectType {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  tech: string[];
  features: string[];
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
    tech: [],
    features: ["d", "e", "f"],
    links: {
      code: "https://github.com/Sanjero20/geo-trainer",
      live: "https://geo-trainer-ph.vercel.app/",
    },
  },
];
