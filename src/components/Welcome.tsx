import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="welcome-container pl-4 pr-4">
      <motion.p
        className="text-accent pb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="welcome-name font-semibold text-4xl sm:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Stefan Andrei.
      </motion.h1>

      <motion.div
        className="max-w-[700px] pb-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <h1 className="font-semibold text-4xl sm:text-6xl lg:text-7xl">
          I develop robust and innovative solutions for the web.
        </h1>
      </motion.div>

      <motion.div
        className="max-w-[500px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
      >
        <p>
          I am a software developer specializing in both front-end and back-end
          development. Currently, I am focused on expanding my skills and
          building innovative web solutions.
        </p>
      </motion.div>
    </div>
  );
}
