import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBrain , faRobot} from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';

const labelsFirst = [
    "Python",
    "NLP",
    "Gemini",
    "Hugging Face"
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
    "Git"
];

const labelsThird = [
    "Embedded C",
    "Arduino",
    "Verilog",
    "FPGA",
    "NIOS II",
];

function About() {
    return (
    <div className="container" id="about">
        <div className="skills-container">
            <h1>About</h1>
            <p className="about">
                Welcome to my home page! <br></br>
                I am a senior undergraduate student majoring in Computer Science at the University of Michigan. <br></br>
                My research interest is in Machine Learning and Natural Language Processing, and I currently serve as a research assistant at the LAUNCH Lab. 
                I am also passionate about embedded systems and computer security. <br></br>
                I am fluent in C++ and Python, with proficiency in web development. <br></br>
                In my free time, I enjoy swimming, badminton, dancing, and singing.
            </p>

            <div className="skills-grid">

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Large Language Model Evaluation</h3>
                    <p>I parsed competitive-level coding problems, evaluated LLM performances against contestants, and created a open-source benchmark for LLM training.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-stack Web Development</h3>
                    <p>I have developed full-stack web applications with modern libraries and frameworks including React and Flask. I also have experience with incorporating LLM responses, video conferencing, secure data storage and geospatial mapping, etc.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Embeddded Stystem Design</h3>
                    <p>I designed embedded video games on FPGA boards, implementing display, controls, and sound functionalities. I also programmed autonomous Arduino robots</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;