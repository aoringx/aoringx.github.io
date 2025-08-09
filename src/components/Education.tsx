import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Education.scss'

function Timeline() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#0300caff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">University of Michigan</h3>
            <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI, USA</h4>
            <p>
              Faculty of Applied Science and Engineering, Department of Electrical and Computer Engineering, Bachelor of Applied Science in Computer Engineering <br></br>
              Cumulative GPA: 3.85/4
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: '#0300caff', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">University of Toronto</h3>
            <h4 className="vertical-timeline-element-subtitle">Toronto, ON, Canada</h4>
            <p>
              College of Engineering, Department of Electrical Engineering and Computer Science, Bachelor of Science in Engineering in Computer Science and Minor in Electrical Engineering <br></br>
              Cumulative GPA: 3.972/4
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;