import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">

            <div className="project">
                {/* <a href="https://github.com/AoringX/100-TheHive" target="_blank" rel="noreferrer"><img src={} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://github.com/AoringX/100-TheHive" target="_blank" rel="noreferrer"><h2>The Hivebot</h2></a>
                <p>Designed an Arduino-based autonomous robot that can parse CSV blueprints, communicate with serial ports through PySerial, and collaboratively perform transportation tasks on a grid.</p>
            </div>
            
            <div className="project">
                {/* <a href="https://github.com/AoringX/298-MLClassifier" target="_blank" rel="noreferrer"><img src={} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://github.com/AoringX/298-MLClassifier" target="_blank" rel="noreferrer"><h2>Fake News Classifier</h2></a>
                <p>Implemented a Naive Bayes Classifier in C++ to identify misinformation in news articles using a training dataset of 12,000+ articles. Created a preprocessing pipeline with text normalization, N-gram modeling, and Word Stemming to reach an accuracy of 83.8%. </p>
            </div>
            
            <div className="project">
                {/* <a href="" target="_blank" rel="noreferrer"><img src={} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://github.com/AoringX" target="_blank" rel="noreferrer"><h2>EVie</h2></a>
                <p>Developed a Geographic Information System in C++ for electric vehicle users across multiple regions by extracting real-world map data from StreetsDatabase and OpenStreetMapDatabase.</p>
            </div>
            
            <div className="project">
                {/* <a href="https://github.com/AoringX/243-SuperYoshi" target="_blank" rel="noreferrer"><img src={} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://github.com/AoringX/243-SuperYoshi" target="_blank" rel="noreferrer"><h2>Super Yoshi</h2></a>
                <p>Created a voice-controlled 2D plaformer Game in Embedded C on a DE1-SoC FPGA board with double-buffered VGA display and PS/2 keyboard controls.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;