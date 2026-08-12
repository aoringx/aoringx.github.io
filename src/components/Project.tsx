import armed from "../assets/images/armed.jpeg";
import bettersleep from "../assets/images/bettersleep.png";
import brain from "../assets/images/brain.png";
import classifier from "../assets/images/classifier.png";
import evie from "../assets/images/evie.png";
import lockedown from "../assets/images/lockedown.jpeg";
import processor from "../assets/images/processor.png";
import projectPlaceholder from "../assets/images/project-placeholder.svg";
import bakepedia from "../assets/images/bakepedia.png";
import workoutTimer from "../assets/images/timer.png";
import vip from "../assets/images/vip.png";
import yoshi from "../assets/images/yoshi.png";
import "../assets/styles/Project.scss";

type ProjectItem = {
  title: string;
  date: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
};

const projects: ProjectItem[] = [
  {
    title: "Better Sleep",
    date: "July 2026 - Present",
    description:
      "Developed a native iOS sleeping companion combining customizable guided breathing with abient noise, helping users relax and transition into sleep. (Worked for me...)",
    url: "https://github.com/aoringx/BetterSleep",
    image: bettersleep,
    imageAlt: "BetterSleep project placeholder",
  },
  {
    title: "Workout Timer",
    date: "July 2026 - Present",
    description:
      "Built a SwiftUI workout timer for calisthenics and breaking, featuring customizable exercises and routines with set, rep, and rest-interval tracking.",
    url: "https://github.com/aoringx/WorkoutTimer",
    image: workoutTimer,
    imageAlt: "WorkoutTimer project placeholder",
  },
  {
    title: "Bakepedia",
    date: "July 2026 - Present",
    description:
      "Developed a FastAPI-based baking recipe crawler that extracts ingredients, instructions, and tips from recipe webpages, uses an LLM to organize and validate the content, and presents it through a clean interface with Microsoft Word export.",
    url: "https://github.com/aoringx/RecipeR",
    image: bakepedia,
    imageAlt: "Bakepedia project placeholder",
  },
  {
    title: "SLR Agent",
    date: "Jun 2026 - Present",
    description:
      "Built a research automation tool that streamlines systematic literature reviews by collecting paper metadata, enriching results with abstracts, and organizing full-paper context for deeper analysis.",
    url: "https://github.com/aoringx/SLRAgent",
    image: projectPlaceholder,
    imageAlt: "SLR Agent project placeholder",
  },
  {
    title: "Vocabulary Reader",
    date: "Jun 2026",
    description:
      "Built a local study tool that turns vocabulary lists into clean audio review material, making it easier to practice definitions through repeatable listening sessions.",
    url: "https://github.com/aoringx/VocabReader",
    image: projectPlaceholder,
    imageAlt: "Vocabulary Reader project placeholder",
  },
  {
    title: "Site-Invariant Brain Age Estimator",
    date: "Jan 2026 - Apr 2026",
    description:
      "Developed a robust Python machine learning pipeline utilizing Domain-Adversarial Training and deep ensembles to accurately predict chronological brain age from structural MRI scans across 64 different scanner configurations.",
    url: "https://github.com/aoringx/eecs545-brain-mri",
    image: brain,
    imageAlt: "Site-Invariant Brain Age Estimator thumbnail",
  },
  {
    title: "Superscalar Processor Design",
    date: "Mar 2026 - Apr 2026",
    description:
      "Designed a 2-way superscalar, out-of-order RISC processor in SystemVerilog, optimizing its architecture with an advanced branch predictor and set-associative instruction cache to successfully reduce average CPI from 2.06 to 1.60.",
    url: "https://aaronxiong.com/",
    image: processor,
    imageAlt: "Superscalar Processor Design thumbnail",
  },
  {
    title: "Armed",
    date: "Oct 2025 - Dec 2025",
    description:
      "Designed an auto-aiming embedded system for a projectile launcher using an STM32 MCU, developing the interrupt-driven firmware, custom 3D-printed mounts, and wireless multimodal haptic feedback mechanisms.",
    url: "https://github.com/AoringX/Armed",
    image: armed,
    imageAlt: "Armed project thumbnail",
  },
  {
    title: "VIP Partners Website",
    date: "Jan 2025 - Dec 2025",
    description:
      "Developed and deployed a HIPAA-compliant, mobile-friendly, Full-stack web platform with React and Flask, providing Nurse Health Coaching, Educational Content, and Personalized Community Resources for pregnant people and infant caregivers.",
    url: "https://aaronxiong.com/",
    image: vip,
    imageAlt: "VIP Partners Website thumbnail",
  },
  {
    title: "LockeDown",
    date: "Sep 2025",
    description:
      "Developed a full-stack posture and productivity monitoring platform using React, FastAPI, and YOLOv8 computer vision accelerated by MemryX, integrating the Gemini LLM for session analysis and gamified user dashboards.",
    url: "https://github.com/aoringx/LockeDown",
    image: lockedown,
    imageAlt: "LockeDown project thumbnail",
  },
  {
    title: "Fake News Classifier",
    date: "Sep 2024 - Dec 2024",
    description:
      "Designed a C++ Naive Bayes machine learning classifier to identify misinformation across 12,000+ articles, building a custom NLP preprocessing pipeline with Text Normalization, N-gram Modeling, and Word Stemming to improve model accuracy from 62% to 83.8%.",
    url: "https://github.com/AoringX/298-MLClassifier",
    image: classifier,
    imageAlt: "Fake News Classifier thumbnail",
  },
  {
    title: "EVie",
    date: "Jan 2024 - Apr 2024",
    description:
      "Co-developed a C++ Geographic Information System for electric vehicles that integrated OpenStreetMap and live weather data, utilizing A* Search and TSP algorithms to optimize navigation routes and rank in the top 15 of 91 submissions.",
    url: "https://github.com/aoringx/297-EVie",
    image: evie,
    imageAlt: "EVie project thumbnail",
  },
  {
    title: "Super Yoshi",
    date: "Jan 2024 - Apr 2024",
    description:
      "Engineered a voice-controlled 2D platformer game in Embedded C on a DE1-SoC FPGA, utilizing finite state machines and double-buffered VGA integration to deliver a seamless, 60 FPS hands-free gaming experience.",
    url: "https://github.com/AoringX/243-SuperYoshi",
    image: yoshi,
    imageAlt: "Super Yoshi project thumbnail",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt={project.imageAlt}
              />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p className="date">{project.date}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
