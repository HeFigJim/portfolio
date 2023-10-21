"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineer</span>, I got a job as a
        <span className="font-medium"> frontend Developer</span>, where my
        passion for web development flourished. Watching an idea come to life is
        always the best part as a web developer, but I equally enjoy refactoring
        code and debugging. My core stack is{" "}
        <span className="font-medium">
          React, Tailwind, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript . I am always looking to learn new
        technologies.{" "}
        <span className="font-medium">
          I am currently looking for a full-time position as a software
          developer.
        </span>
      </p>

      <p>
        <span className="italic">When I&#39;m not coding</span>, I enjoy
        watching sports, traveling, eating tacos and exploring the city. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about <span className="font-medium">carpentry</span>.
      </p>
    </motion.section>
  );
}
