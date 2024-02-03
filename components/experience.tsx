"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Experience");
    }
  }, [inView, timeOfLastClick]);
  return (
    <section ref={ref} id="experience" className="mb-28">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={experience.title}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05",
                textAlign: "left",
                padding: "1.3 rem 2 rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              visible={true}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-gray-700">
                {experience.description}
              </p>
              <p className="!mt-1 !font-normal italic text-gray-700">
                {experience.skillsUsed}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
