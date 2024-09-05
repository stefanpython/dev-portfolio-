import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIconsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-48 flex flex-col md:flex-row md:items-start p-8 text-white max-w-[62em]"
      >
        {/* Left Column */}
        <div>
          <div className="flex items-center space-x-2 text-accent text-lg mb-4">
            <div className="flex flex-grow justify-end">
              <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
            </div>

            <span className="text-accent text-xl">02.</span>
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>

          <div>
            <ul>
              <motion.div
                className="skills-icons grid grid-cols-3 sm:flex sm:flex-wrap gap-8 flex-grow justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: iconsVisible ? 1 : 0,
                  y: iconsVisible ? 0 : 20,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {[
                  {
                    icon: "devicon-javascript-plain colored",
                    label: "JavaScript",
                  },
                  {
                    icon: "devicon-typescript-plain colored",
                    label: "TypeScript",
                  },
                  { icon: "devicon-react-plain colored", label: "React" },
                  {
                    icon: "devicon-reactrouter-plain-wordmark colored",
                    label: "React Router",
                  },
                  {
                    icon: "devicon-visualstudio-plain colored",
                    label: "Visual Studio",
                  },
                  {
                    icon: "devicon-npm-original-wordmark colored",
                    label: "NPM",
                  },
                  {
                    icon: "devicon-html5-plain-wordmark colored",
                    label: "Html5",
                  },
                  { icon: "devicon-nodejs-plain colored", label: "NodeJS" },
                  {
                    icon: "devicon-express-original-wordmark",
                    label: "Express",
                  },
                  {
                    icon: "devicon-mongodb-plain-wordmark colored",
                    label: "mongoDB",
                  },
                  {
                    icon: "devicon-css3-plain-wordmark colored",
                    label: "CSS3",
                  },
                  {
                    icon: "devicon-tailwindcss-original colored",
                    label: "TailwindCSS",
                  },
                  { icon: "devicon-postman-plain colored", label: "Postman" },
                  { icon: "devicon-vite-original colored", label: "Vite" },
                  { icon: "devicon-vitest-plain colored", label: "Vitest" },
                  {
                    icon: "devicon-bootstrap-plain colored",
                    label: "Bootstrap",
                  },
                  {
                    icon: "devicon-reactbootstrap-original colored",
                    label: "Reactbootstrap",
                  },
                  { icon: "devicon-github-plain colored", label: "Github" },
                  { icon: "devicon-firebase-plain colored", label: "Firebase" },
                  { icon: "devicon-linux-plain colored", label: "Linux" },
                  { icon: "devicon-webpack-plain colored", label: "Webpack" },
                  { icon: "devicon-json-plain colored", label: "JSON" },
                  {
                    icon: "devicon-mongoose-original-wordmark colored",
                    label: "Mongoose",
                  },
                  {
                    icon: "devicon-railway-original-wordmark",
                    label: "Railway",
                  },
                  { icon: "devicon-java-plain colored", label: "Java" },
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: iconsVisible ? 1 : 0,
                      scale: iconsVisible ? 1 : 0.8,
                    }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <i className={skill.icon}></i>
                    <p className="ml-1">{skill.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </ul>
          </div>
        </div>
      </motion.section>
    </>
  );
}
