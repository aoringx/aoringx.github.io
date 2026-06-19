import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faBrain, faRobot } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/About.scss";

const labelsFirst = [
  "Python",
  "PyTorch",
  "NumPy",
  "Pandas",
  "Machine Learning",
  "Deep Learning",
  "LLMs",
  "NLP",
];

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
  "C/C++",
  "SystemVerilog",
  "ARMv7",
  "STM32",
  "ESP32",
  "FPGA",
  "Embedded Systems",
  "Computer Architecture",
  "Linux",
];

function About() {
  return (
    <div className="container" id="about">
      <div className="skills-container">
        <h1>About</h1>
        <p className="about">
          Welcome to my home page! <br></br>I am a senior undergraduate student
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
            href="https://umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the University of Michigan
          </a>
          . <br></br>My interests lie in novel computer architectures for ML
          optimization and ML-driven embedded systems with a focus on building
          portable and user-centered computer devices. <br></br>I'm currently
          working as a student researcher in the{" "}
          <a
            href="https://theisclab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            ISC Lab
          </a>{" "}
          under Professor{" "}
          <a
            href="https://alansonsample.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Alanson Sample
          </a>
          , and I previously conducted research in the{" "}
          <a
            href="https://launch.eecs.umich.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LAUNCH Lab
          </a>{" "}
          led by Professor{" "}
          <a
            href="https://web.eecs.umich.edu/~wangluxy/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Lu Wang
          </a>
          . My ongoing research work explores embedded systems for processing
          audio signals from microphone arrays to perform sound classification
          and analysis. <br></br>Outside of academics, I am a free-style hip-hop
          dancer, and I also enjoy swimming, badminton, and snowboarding.
        </p>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Machine Learning</h3>
            <p>
              I built Machine Learning systems to process medical imaging data.
              I also curated training datasets, benchmarked leading LLMs, and
              developed ML architectures for domain adversarial training.
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
              I developed full-stack platforms that integrate modern web
              technologies with AI-assisted workflows, utilizing databases,
              APIs, and AI agents to create seamless user experiences.
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
            <h3>Embedded Systems & Computer Architecture</h3>
            <p>
              I designed hardware and embedded systems, ranging from wearable
              devices to out-of-order CPU architectures and FPGA-based compuiter
              systems.
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
