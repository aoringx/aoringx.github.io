import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ProfilePicture from "../assets/images/pfp.jpeg";
import SchoolIcon from "@mui/icons-material/School";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={ProfilePicture}
            alt="Avatar"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/AoringX"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://scholar.google.com/citations?user=g9trRJMAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              <SchoolIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-xiong-um"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:aaaronx@umich.edu" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
          </div>
          <h1>Aaron Xiong</h1>
          <p>Computer Science Researcher</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/AoringX"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-xiong-um/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a href="mailto:aaaronx@umich.edu" target="_blank" rel="noreferrer">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
