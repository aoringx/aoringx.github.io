import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AoringX" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aaron-xiong-um/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:aaaronx@umich.edu" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;