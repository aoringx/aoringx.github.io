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
  "LLM",
  "vLLM",
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
  "Swift",
  "Git",
];

const labelsThird = [
  "PCB Design and Fabrication",
  "C/C++",
  "SystemVerilog",
  "Verilog",
  "ARMv7",
  "STM32",
  "ESP32",
  "FPGA",
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
          . <br></br>My research interests lie in ML-driven systems with a focus
          on building efficient, portable, and user-centered computer devices.{" "}
          <br></br>I'm currently working as a student researcher in the{" "}
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
          signals from microphone arrays to perform speaker diarization and
          audio analysis. <br></br>Outside of academics, I enjoy freestyle
          hip-hop dancing, swimming, and calisthenics. I also love to cook and
          bake.
        </p>

        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />
            <h3>Machine Learning & AI</h3>
            <p>
              Implemented machine learning systems for medical imaging analysis,
              curated high-quality training datasets, benchmarked leading LLMs,
              and built LLM inference applications for workflow automation.
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
            <h3>Software Development</h3>
            <p>
              Developed full-stack web platforms and iOS/desktop applications
              that integrate AI-assisted workflows, leveraging databases, web
              APIs, and LLMs to deliver seamless, intelligent user experiences.
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
              Designed and fabricated custom laser-cut PCBs for wearable
              devices, engineered out-of-order CPU architectures, and built
              FPGA-based computing systems.
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
