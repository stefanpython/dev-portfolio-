import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="about-me-container flex flex-col md:flex-row items-center md:items-start p-8 text-white max-w-[60em]"
    >
      {/* Left Column */}
      <div className="md:w-2/3">
        <div className="flex items-center space-x-2 text-accent text-lg mb-4">
          <span className="text-accent text-xl">01.</span>
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
        </div>

        <div>
          <p className="mb-4">
            I am a web developer with extensive experience across a range of
            technologies, including <span className="text-accent">React</span>,{" "}
            <span className="text-accent">JavaScript</span>,{" "}
            <span className="text-accent">HTML</span>,{" "}
            <span className="text-accent">CSS</span>,{" "}
            <span className="text-accent">MongoDB Atlas</span>,{" "}
            <span className="text-accent">Mongoose</span>,{" "}
            <span className="text-accent">Node.js</span>,{" "}
            <span className="text-accent">Express</span>, and others. I am also
            adept at working with <span className="text-accent">Linux</span>,
            which enhances my flexibility with different operating systems.
          </p>

          <p className="my-4">
            Recently, I completed a{" "}
            <span className="text-accent">3-month internship</span> at{" "}
            <span className="text-accent">FlowerWork</span>, where I gained
            hands-on experience in real-world projects and further enhanced my
            development skills.
          </p>

          <p className="my-4">
            My academic achievements include completing{" "}
            <span className="text-accent">Harvard's CS50x</span> and{" "}
            <span className="text-accent">CS50w</span> courses, which provided
            me with a robust understanding of computer science principles and{" "}
            web development. Additionally, I have finalized{" "}
            <span className="text-accent">The Odin Project</span>, a rigorous{" "}
            <span className="text-accent">Full-Stack Development</span>{" "}
            curriculum, and recently completed{" "}
            <span className="text-accent">Java Programming 1 and 2</span>{" "}
            through <span className="text-accent">Helsinki University</span>’s
            online platform.
          </p>

          <p>
            I am passionate about embracing new challenges and believe my
            diverse <span className="text-accent">skill set</span> and
            experience would make a significant contribution to any team.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/3 md:mt-0 md:pl-8">
        {/* Parent motion.div to manage hover state */}
        <motion.div
          className="relative"
          whileHover={{
            translateX: -8,
            translateY: -8,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Border element */}
          <motion.div
            className="absolute top-0 left-0 -right-3 md:-right-6 -inset-4 border-2 border-accent rounded-lg"
            initial={{ opacity: 1, x: 0, y: 0 }}
            whileHover={{ opacity: 0, x: 8, y: 8 }}
            transition={{ duration: 0.3 }}
            style={{ zIndex: 1 }}
          />

          {/* Image element with filter effect */}
          <motion.img
            src="./me.jpg"
            alt="Stefan Andrei"
            className="max-w-[280px] rounded-md mt-10 relative z-10"
            initial={{ x: 0, y: 0 }}
            whileHover={{ filter: "none", x: -8, y: -8 }}
            transition={{ duration: 0.3 }}
            style={{
              zIndex: 2,
              filter: "sepia(100%)",
              transition: "filter 0.3s ease",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
