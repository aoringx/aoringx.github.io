import React from "react";
import brain from "../assets/images/brain.png";
import processor from "../assets/images/processor.png";
import armed from "../assets/images/armed.jpeg";
import vip from "../assets/images/vip.png";
import classifier from "../assets/images/classifier.png";
import evie from "../assets/images/evie.png";
import lockedown from "../assets/images/lockedown.jpeg";
import yoshi from "../assets/images/yoshi.png";
import projectPlaceholder from "../assets/images/project-placeholder.svg";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://github.com/aoringx/SLRAgent" target="_blank" rel="noreferrer">
            <img
              src={projectPlaceholder}
              className="zoom"
              alt="SLR Agent project placeholder"
              width="100%"
            />
          </a>
          <a href="https://github.com/aoringx/SLRAgent" target="_blank" rel="noreferrer">
            <h2>SLR Agent</h2>
          </a>
          <p className="date">Jun 2026 - Present</p>
          <p>
            Built a research automation tool that streamlines systematic
            literature reviews by collecting paper metadata, enriching results
            with abstracts, and organizing full-paper context for deeper
            analysis.
          </p>
        </div>

        <div className="project">
          <a href="https://github.com/aoringx/VocabReader" target="_blank" rel="noreferrer">
            <img
              src={projectPlaceholder}
              className="zoom"
              alt="Vocabulary Reader project placeholder"
              width="100%"
            />
          </a>
          <a href="https://github.com/aoringx/VocabReader" target="_blank" rel="noreferrer">
            <h2>Vocabulary Reader</h2>
          </a>
          <p className="date">Jun 2026</p>
          <p>
            Built a local study tool that turns vocabulary lists into clean
            audio review material, making it easier to practice definitions
            through repeatable listening sessions.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/aoringx/eecs545-brain-mri"
            target="_blank"
            rel="noreferrer"
          >
            <img src={brain} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/aoringx/eecs545-brain-mri"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Site-Invariant Brain Age Estimator</h2>
          </a>
          <p className="date">Jan 2026 - Apr 2026</p>
          <p>
            Developed a robust Python machine learning pipeline utilizing
            Domain-Adversarial Training and deep ensembles to accurately predict
            chronological brain age from structural MRI scans across 64
            different scanner configurations.
          </p>
        </div>

        <div className="project">
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <img
              src={processor}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <h2>Superscalar Processor Design</h2>
          </a>
          <p className="date">Mar 2026 - Apr 2026</p>
          <p>
            Designed a 2-way superscalar, out-of-order RISC processor in
            SystemVerilog, optimizing its architecture with an advanced branch
            predictor and set-associative instruction cache to successfully
            reduce average CPI from 2.06 to 1.60.
          </p>
        </div>

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
          <p className="date">Oct 2025 - Dec 2025</p>
          <p>
            Designed an auto-aiming embedded system for a projectile launcher
            using an STM32 MCU, developing the interrupt-driven firmware, custom
            3D-printed mounts, and wireless multimodal haptic feedback
            mechanisms.
          </p>
        </div>

        <div className="project">
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <img src={vip} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://aaronxiong.com/" target="_blank" rel="noreferrer">
            <h2>VIP Partners Website</h2>
          </a>
          <p className="date">Jan 2025 - Dec 2025</p>
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
            <h2>LockeDown</h2>
          </a>
          <p className="date">Sep 2025</p>
          <p>
            Developed a full-stack posture and productivity monitoring platform
            using React, FastAPI, and YOLOv8 computer vision accelerated by
            MemryX, integrating the Gemini LLM for session analysis and gamified
            user dashboards.
          </p>
        </div>

        {/* <div className="project">
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
            <h2>The Hive</h2>
          </a>
          <p className="date">Jan 2025 - Apr 2025</p>
          <p>
            Led software integration for an autonomous construction robot team,
            developing Python path planning, C++ sensor controls, and a
            multi-agent simulation for dynamic task allocation and collision
            avoidance.
          </p>
        </div> */}

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
          <p className="date">Sep 2024 - Dec 2024</p>
          <p>
            Designed a C++ Naive Bayes machine learning classifier to identify
            misinformation across 12,000+ articles, building a custom NLP
            preprocessing pipeline with Text Normalization, N-gram Modeling, and
            Word Stemming to improve model accuracy from 62% to 83.8%.
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
          <p className="date">Jan 2024 - Apr 2024</p>
          <p>
            Co-developed a C++ Geographic Information System for electric
            vehicles that integrated OpenStreetMap and live weather data,
            utilizing A* Search and TSP algorithms to optimize navigation routes
            and rank in the top 15 of 91 submissions.
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
          <p className="date">Jan 2024 - Apr 2024</p>
          <p>
            Engineered a voice-controlled 2D platformer game in Embedded C on a
            DE1-SoC FPGA, utilizing finite state machines and double-buffered
            VGA integration to deliver a seamless, 60 FPS hands-free gaming
            experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
