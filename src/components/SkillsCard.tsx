import aws from "../assets/aws.png";
import azure from "../assets/azure.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import git from "../assets/git.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import reactjs from "../assets/reactjs.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";

const languages = [
  { name: "C", img: c },
  { name: "C++", img: cpp },
  { name: "Python", img: python },
  { name: "HTML", img: html },
  { name: "JavaScript", img: javascript },
  { name: "TypeScript", img: typescript },
  { name: "CSS", img: css },
  { name: "Java", img: java },
  { name: "SQL", img: sql },
];

const frameworks = [
  { name: "ReactJS", img: reactjs },
  { name: "Tailwind", img: tailwind },
  { name: "Next.js", img: nextjs },
  { name: "Node.js", img: nodejs },
];

const tools = [
  { name: "Git", img: git },
  { name: "Figma", img: figma },
  { name: "AWS", img: aws },
  { name: "Azure", img: azure },
  { name: "MySQL", img: mysql },
];

export default function SkillsCard({ skill }: { skill: string }) {
  const items =
    skill === "languages"
      ? languages
      : skill === "frameworks"
      ? frameworks
      : skill === "tools"
      ? tools
      : [];

  return (
    <div className="skill-container">
      {items.map((item) => (
        <div key={item.name} className="card">
          <div className="circle">
            <img src={item.img} className="logo" />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
