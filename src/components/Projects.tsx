import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const projects = [
    {
      title: "Odinbook",
      image: "./odinbook.png",
      link: "https://project1.com",
    },
    {
      title: "Ecomm Express",
      image: "./ecom.png",
      link: "https://project2.com",
    },
    {
      title: "VMDB Movie App",
      image: "./movie.png",
      link: "https://project3.com",
    },

    {
      title: "Invoice Management System",
      image: "./invoice.png",
      link: "https://project3.com",
    },

    {
      title: "Chat App",
      image: "./chat.png",
      link: "https://project3.com",
    },

    {
      title: "Infinity Market",
      image: "./infinity.png",
      link: "https://project3.com",
    },
    {
      title: "Pomodoro",
      image: "./pomodoro.png",
      link: "https://project3.com",
    },

    {
      title: "Culinary Crafts",
      image: "./food.png",
      link: "https://project3.com",
    },
    // Add more projects as needed
  ];

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
      className="mt-40 flex flex-col md:flex-row justify-between items-center md:items-start p-8 text-white max-w-[60em]"
    >
      {/* Left Column */}
      <div className="md:w-2/3">
        <div className="flex items-center space-x-2 text-accent text-lg mb-4">
          <span className="text-accent text-xl">03.</span>
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-bold rounded-lg"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {project.title}
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="mt-8 md:w-1/3 flex flex-col justify-center items-center md:mt-32">
        <motion.a
          href="#"
          className="text-lg font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          &#xbb; More Here &#xab;
        </motion.a>
      </div>
    </motion.section>
  );
}
