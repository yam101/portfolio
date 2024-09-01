import "../styles/About.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Card from "./SkillsCard";

type exp = {
  title: string;
  company: string;
  date: string;
  duration: string;
  description: string;
};

const experiences = [
  {
    title: "Software Quality Analyst",
    company: "i4i Labs",
    date: "May 2024",
    duration: "4 months",
    description:
      "Conducted 30+ test cases per day to test SPL software for top pharmaceutical companies (Pfizer, AstraZeneca)",
  },
  {
    title: "Web Developer",
    company: "Electrium Mobility",
    date: "Jan 2024",
    duration: "8 months",
    description:
      "Currently developing an e-commerce shop for electric vehicles, using React, Next.js, and Node.js",
  },
  {
    title: "Software Engineering (BSE)",
    company: "University of Waterloo",
    date: "Sep 2023",
    duration: "12 months",
    description:
      "AI Specialization. Relevant Courses: Programming Principles, Data Abstraction and Implementation",
  },
];

const ExperienceCard = ({ experience }: { experience: exp }) => (
  <div className="experience-card">
    <div className="marker"></div>
    <div className="content">
      <div className="title-container">
        <h4 className="date">{experience.date}</h4>
        <h4 className="company">{experience.company}</h4>
        <p>{experience.title}</p>
        <p>{experience.duration}</p>
      </div>
      <p className="description">{experience.description}</p>
    </div>
  </div>
);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      if (!aboutRef.current) return;

      const { clientX, clientY } = event;
      aboutRef.current.style.setProperty("--x", `${clientX}px`);
      aboutRef.current.style.setProperty("--y", `${clientY}px`);
      aboutRef.current.style.setProperty("--opacity", "1");
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div ref={aboutRef} className="main-container">
      <div className="gradient"></div>

      <div className="about-container">
        <h2>About</h2>
        <p>
          👋 Hi! I'm Yasmin, a second year Software Engineering student at the
          University of Waterloo. My goal is to create a positive impact on the
          people around me, whether it be through designing, creating, or
          innovating.
        </p>
        <p>
          ✨ I'm passionate about web development, and in the future I want to
          delve more into AI, game development, and cybersecurity. I'm always
          open to learning and exploring new opportunities!
        </p>
        <p>
          📚 In my free time, I enjoy reading, playing video games, or
          rewatching my favourite Netflix shows. I'm also getting into
          photography these days, check out some pictures
          <Link className="link" to="/photos">
            here
          </Link>
          .
        </p>

        <h3>Languages</h3>
        <Card skill="languages" />

        <h3>Frameworks/Libraries</h3>
        <Card skill="frameworks" />

        <h3>Tools</h3>
        <Card skill="tools" />
      </div>

      <div className="timeline-container">
        <h2>Timeline</h2>
        <div className="line"></div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>

      <div className="footer">
        <p>Yasmin Motahhary</p>
        <i className="bx bx-copyright"></i>
        <p>2024</p>
      </div>
    </div>
  );
}
