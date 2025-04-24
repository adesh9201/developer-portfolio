import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="30 June - 1 September 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            ROCK IT Solutions
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Two Months Tranee
          </h6>
          <p>•  Built foundational understanding of Kotlin syntax and object-oriented programming concepts.</p>
          <p>• Developed small-scale Android applications using Kotlin in Android Studio.</p>
          <p>• Worked on real-time mini projects and implemented key concepts like RecyclerView, Intents, and Activities.</p>
          <p>• Designed and developed a basic calculator app using Kotlin and Android Studio.</p>
          <p>• Built a language translator app using Kotlin and integrated Google Translate API (or ML Kit).</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025 - Current"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          HKK Entertainment (Pvt.) Limited, Noida, India 
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Software Developer Intern
          </h6>

          <p>• Developed a real-time digital display system using JavaScript and HTML5, reducing content update latency by 80%. </p>
          <p>•  Integrated MongoDB APIs into backend services with a team of 5, achieving 99.9% uptime.</p>
          <p>• Designed, developed, and tested RESTful API endpoints for content modules, reducing deployment and bug incidents by 30%.</p>
      
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
