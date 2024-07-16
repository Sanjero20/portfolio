interface ProjectType {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  codeURL: string;
  liveURL: string;
  tech: string[];
}

export const PROJECTS: ProjectType[] = [
  {
    title: "Job Tracker",
    description:
      "A full stack web application for monitoring job application status and interview schedules",
    imgSrc: "/job-tracker.png",
    imgAlt: "job tracker",
    codeURL: "",
    liveURL: "",
    tech: [],
  },
  {
    title: "Geo Trainer PH",
    description:
      "An interactive learning platform for memorizing the geolocation of the Philippines",
    imgSrc: "/geo-trainer-ph.png",
    imgAlt: "geo trainer",
    codeURL: "",
    liveURL: "",
    tech: [],
  },
];
