import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-5 right-5 bg-blue-100 p-2 xl:p-4 rounded-md">
      <a
        href="https://github.com/EvenL94/meme-joke-generator"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:text-black"
      >
        <FaGithub size={30} />
      </a>
    </footer>
  );
};

export default Footer;
