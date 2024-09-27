import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Variants for animation
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  // Variants for the Resume button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.5 },
    },
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar bg-base-100 border-b border-gray-700">
        <div className="flex-1">
          <a
            href="/"
            className="btn btn-ghost text-xl border border-accent rounded-full"
          >
            SA
          </a>
        </div>
        <div className="flex-none lg:hidden md:hidden">
          <button onClick={toggleMenu} className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="nav-links hidden md:flex lg:flex pr-8">
          <ul className="menu menu-horizontal px-1 items-center ">
            {["About", "Skills", "Projects", "Credentials", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={item}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                  custom={index}
                >
                  <a href="" className="hover:text-accent">
                    <span className="text-accent">{`0${index + 1}.`}</span>{" "}
                    {item}
                  </a>
                </motion.li>
              )
            )}
            <motion.a
              href="https://flowcv.com/resume/g0gns4d4cc"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-sm btn-outline border border-accent text-accent text-xs
             transform transition-transform duration-300 hover:scale-110 
             hover:origin-right hover:bg-transparent hover:text-accent hover:border-accent hover:shadow-md hover:shadow-accent/100"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              Resume
            </motion.a>
          </ul>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-base-300 transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 text-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="nav-links flex flex-col items-center mt-16 space-y-4">
          {["About", "Skills", "Projects", "Credentials", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                href=""
                className="text-lg hover:text-accent"
                onClick={toggleMenu}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
                custom={index}
              >
                <span className="text-accent">{`0${index + 1}.`}</span> {item}
              </motion.a>
            )
          )}
          <motion.a
            href="https://flowcv.com/resume/g0gns4d4cc"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-sm btn-outline border border-accent text-accent text-xs
             transform transition-transform duration-300 hover:scale-110 
             hover:origin-right hover:bg-transparent hover:text-accent hover:border-accent hover:shadow-md hover:shadow-accent/100"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </div>
  );
}
