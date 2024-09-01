import "../styles/Projects.css";
import { useEffect, useRef } from "react";
import wattendance from "../assets/wattendance.png";
import btb from "../assets/breakingthebinary.jpeg";
import timely from "../assets/timely.png";

type proj = {
  title: string;
  description: string;
  img: string;
  skills: string[];
  links: { name: string; url: string }[];
};

const projects = [
  {
    title: "Wattendance",
    description:
      "A facial recognition system that automatically records attendance for the University of Waterloo’s SE 2028 class.",
    img: wattendance,
    skills: ["ReactJS", "TypeScript", "OpenCV", "Python", "NodeJS", "MySQL"],
    links: [
      { name: "Github", url: "https://github.com/yam101/wattendance" },
      {
        name: "Live Site",
        url: "http://wattendance.s3-website.us-east-2.amazonaws.com",
      },
    ],
  },
  {
    title: "Breaking the Binary 🏅",
    description:
      "A visual novel/fixed shooter arcade game illustrating women's struggles in the technology industry. Won Best Video Game Hack at Technova 2023.",
    img: btb,
    skills: ["JavaScript", "HTML", "CSS", "p5.js", "Figma"],
    links: [
      {
        name: "Devpost",
        url: "https://devpost.com/software/breaking-the-binary",
      },
    ],
  },
  {
    title: "Timely",
    description:
      "A full-stack web app built to streamline the process of booking meeting rooms across a high school campus.",
    img: timely,
    skills: ["JavaScript", "HTML", "CSS", "Java", "php"],
    links: [{ name: "Github", url: "https://github.com/yam101/timely" }],
  },
];
const ProjectCard = ({ project }: { project: proj }) => (
  <div className="projects-card">
    <div className="project-text">
      <div className="project-header">
        <h2>{project.title}</h2>
        <div className="links">
          {project.links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <p>{project.description}</p>
      <div className="skills">
        {project.skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>

    <img src={project.img} />
  </div>
);

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!projectRef.current) return;

      const { clientX, clientY } = event;
      projectRef.current.style.setProperty("--x", `${clientX}px`);
      projectRef.current.style.setProperty("--y", `${clientY}px`);
      projectRef.current.style.setProperty("--opacity", "1");
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div ref={projectRef} className="projects-container">
      <div className="gradient"></div>
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="projects-footer">
        <p>Yasmin Motahhary</p>
        <i className="bx bx-copyright"></i>
        <p>2024</p>
      </div>
    </div>
  );
}
