import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-4 h-20 rounded-xl border-t-2 border-t-accent mt-20">
      <aside className="flex justify-center items-center">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - Created with love by Stefan
            Andrei
          </p>
        </div>
        <div>
          <a
            href="https://github.com/stefanpython"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-gray-600 hover:text-gray-800"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </aside>
    </footer>
  );
}
