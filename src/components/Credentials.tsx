import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Credentials() {
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
        className="mt-40 flex flex-col md:flex-row md:items-start p-8 text-white max-w-[62em]"
      >
        {/* Left Column */}
        <div>
          <div className="flex items-center space-x-2 text-accent text-lg mb-4">
            <div className="flex flex-grow justify-end">
              <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
            </div>

            <span className="text-accent text-xl">04.</span>
            <h2 className="text-2xl font-bold">Credentials</h2>
          </div>
          {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:flex justify-end gap-8 */}
          <div>
            <ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:flex lg:flex-wrap justify-end gap-8">
                {/* Icons and Text */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center items-center flex flex-col"
                >
                  <a
                    href="https://drive.google.com/file/d/1jvtq6Nztp-KE9lwAlHzYhtiDq1RTvnE_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="./flowerworkCertificate.png"
                      alt="Flowework Certificate"
                      className="w-56 h-32 rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <p className="mt-2 text-sm max-w-[12em]">
                    FlowerWork Internship
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center items-center flex flex-col"
                >
                  <a
                    href="https://certificates.cs50.io/e434c454-d200-4ccd-a308-ce32fb560d22.png?size=letter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="./cs50x.png"
                      alt="CS50X Certification"
                      className="w-56 h-32 rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <p className="mt-2 text-sm max-w-[12em]">
                    CS50X`s Introduction to Computer Science
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center items-center flex flex-col"
                >
                  <a
                    href="https://certificates.cs50.io/0608492f-e1b9-4169-8e36-c37a61101a3d.png?size=letter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="./cs50w.png"
                      alt="CS50W Certification"
                      className="w-56 h-32 rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <p className="mt-2 text-sm max-w-[12em]">
                    CS50W Web Programming with Python and JavaScript
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center items-center flex flex-col"
                >
                  <a
                    href="https://certificates.mooc.fi/validate/oobzghj02cd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="java1.png"
                      alt="Java Programming I Certification"
                      className="w-56 h-32 rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <p className="mt-2 text-sm max-w-[12em]">
                    Java Programming I
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-center items-center flex flex-col"
                >
                  <a
                    href="https://certificates.mooc.fi/validate/imyojopasc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.img
                      src="java2.png"
                      alt="Java Programming II Certification"
                      className="w-56 h-32 rounded-md"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                  <p className="mt-2 text-sm max-w-[12em]">
                    Java Programming II
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: iconsVisible ? 1 : 0,
                    scale: iconsVisible ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-center items-center flex flex-col"
                >
                  <motion.img
                    src="top.png"
                    alt="The Odin Project Certification"
                    className="w-56 h-32 rounded-md border border-gray-600"
                    transition={{ duration: 0.3 }}
                  />
                  <p className="mt-2 text-sm max-w-[16em]">
                    The Odin Project - Full Stack Web Development Curriculum
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    (No Link Available)
                  </p>
                </motion.div>
              </div>
            </ul>
          </div>
        </div>
      </motion.section>
    </>
  );
}
