import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-4 h-20 rounded-xl border-t-2 border-t-accent mt-20">
      <aside className="flex justify-center items-center space-x-4">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - Created with{" "}
            <span className="text-red-500 text-xl">&hearts;</span> by Stefan
            Andrei | Github profile {"   --->"}
          </p>
        </div>
        <div className="relative">
          <a
            href="https://github.com/stefanpython"
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-gray-600 hover:text-gray-800 flex items-center justify-center"
          >
            <FaGithub className="text-2xl z-10" />

            {/* Animated rotating circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin-slow rounded-full border-[1px] border-accent border-opacity-50 w-8 h-10"></div>
            </div>
          </a>
        </div>
      </aside>
    </footer>
  );
}
