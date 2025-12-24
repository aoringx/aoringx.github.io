import React from "react";
import armed from "../assets/images/armed.jpeg";
import vip from "../assets/images/vip.png";
import classifier from "../assets/images/classifier.png";
import evie from "../assets/images/evie.png";
import hive from "../assets/images/hive.jpg";
import lockedown from "../assets/images/lockedown.jpeg";
import yoshi from "../assets/images/yoshi.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/AoringX/Armed"
            target="_blank"
            rel="noreferrer"
          >
            <img src={armed} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AoringX/Armed"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Armed</h2>
          </a>
          <p>
            Designed an auto-aim embedded system for a projectile launcher using
            an STM32 Nucleo-L4R5ZI-P MCU, interfacing an IR Camera for target
            detection and providing real-time aim guidance with haptics, LEDs,
            and sound.
          </p>
        </div>

        <div className="project">
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <img src={vip} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <h2>VIP Partners Website</h2>
          </a>
          <p>
            Developed and deployed a HIPAA-compliant, mobile-friendly,
            Full-stack web platform with React and Flask, providing Nurse Health
            Coaching, Educational Content, and Personalized Community Resources
            for pregnant people and infant caregivers.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/aoringx/LockeDown"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={lockedown}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/aoringx/LockeDown"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Lockedown</h2>
          </a>
          <p>
            Created a real-time posture and productivity monitoring platform
            with the YOLOv8m-pose model and OpenCV, integrating MemryX
            accelerators to optimize video inference.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/AoringX/100-TheHive"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hive} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AoringX/100-TheHive"
            target="_blank"
            rel="noreferrer"
          >
            <h2>The Hivebot</h2>
          </a>
          <p>
            Designed an Arduino-based autonomous robot that can parse CSV
            blueprints, communicate with serial ports through PySerial, and
            collaboratively perform transportation tasks on a grid.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/AoringX/298-MLClassifier"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={classifier}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/AoringX/298-MLClassifier"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Fake News Classifier</h2>
          </a>
          <p>
            Implemented a Naive Bayes Classifier in C++ to identify
            misinformation in news articles using a training dataset of 12,000+
            articles. Created a preprocessing pipeline with text normalization,
            N-gram modeling, and Word Stemming to reach an accuracy of 83.8%.{" "}
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/aoringx/297-EVie"
            target="_blank"
            rel="noreferrer"
          >
            <img src={evie} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/aoringx/297-EVie"
            target="_blank"
            rel="noreferrer"
          >
            <h2>EVie</h2>
          </a>
          <p>
            Developed a Geographic Information System in C++ for electric
            vehicle users across multiple regions by extracting real-world map
            data from StreetsDatabase and OpenStreetMapDatabase.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/AoringX/243-SuperYoshi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={yoshi} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/AoringX/243-SuperYoshi"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Super Yoshi</h2>
          </a>
          <p>
            Created a voice-controlled 2D platformer Game in Embedded C on a
            DE1-SoC FPGA board with double-buffered VGA display and PS/2
            keyboard controls.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
