import React from "react";
import Button from '@mui/material/Button';
import '../assets/styles/Resume.scss';

function Resume() {
    const openPDF = () => {
        try {
            window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
        } catch (e) {
            console.error("Failed to open PDF:", e);
        }
    }
    return (
    <div id="resume" className="resume-container items-container">
        <h1>Resume</h1>
        <Button variant="contained" onClick={openPDF}>View My Resume</Button>
    </div>
    );
}

export default Resume;