import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-container flex flex-col md:flex-row items-center md:items-start p-8 text-white max-w-[60em]">
      {/* Left Column */}
      <div className="md:w-2/3">
        <div className="flex items-center space-x-2 text-accent text-lg mb-4">
          <span className="text-accent text-xl">01.</span>
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="flex-grow border-t border-gray-700"></div>
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
      <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
        <div className="relative">
          <img
            src="./me.jpg"
            alt="Stefan Andrei"
            className="max-w-[300px] h-auto rounded-md"
          />
          <div className="absolute inset-0 border-2 border-accent transform translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
