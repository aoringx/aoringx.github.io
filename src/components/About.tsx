import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/About.scss";

const labelsFirst = ["Python", "ML", "NLP", "PyTorch", "Numpy", "Pandas"];

const labelsSecond = [
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Flask",
  "Typescript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Python",
  "Git",
  "Docker",
];

const labelsThird = [
  "ARMv7",
  "STM32",
  "FPGA",
  "Embedded C",
  "Arduino",
  "Verilog",
  "NIOS II",
];

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About</h1>
        <p className="about">
          Welcome to my home page! <br></br>I am a junior undergraduate student
          majoring in{" "}
          <a
            href="https://cse.engin.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Computer Science
          </a>{" "}
          with a minor in{" "}
          <a
            href="https://ece.engin.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Electrical Engineering
          </a>{" "}
          at{" "}
          <a
            href="https://ece.engin.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the University of Michigan
          </a>
          . <br></br> My research interest lies in Machine Learning and its
          applications to Natural Language Processing and computer systems, and
          I currently work as a student researcher at{" "}
          <a
            href="https://launch.eecs.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the LAUNCH Lab
          </a>
          , led by Professor{" "}
          <a
            href="https://web.eecs.umich.edu/~wangluxy/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Lu Wang
          </a>
          . I am also passionate about designing user-centered embedded systems
          and exploring novel designs for computer architectures. <br></br>{" "}
          Outside of academics, I'm known as Bboy Opamp. I also enjoy swimming,
          snowboarding, badminton, and tennis.
        </p>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Large Language Model Training</h3>
            <p>
              I parsed competitive-level coding problems, evaluated LLM
              performances against contestants, and created an open-source
              benchmark for LLM training.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full-stack Web Development</h3>
            <p>
              I have developed full-stack web applications with modern libraries
              and frameworks. I also have experience with incorporating LLM
              responses, video conferencing, secure data storage and geospatial
              mapping, etc.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>Embedded System Design</h3>
            <p>
              I designed embedded systems on FPGA boards and STM32
              microcontrollers, and I am familiar with interfacing various
              sensors and output peripherals. I also programmed autonomous
              Arduino robots.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
