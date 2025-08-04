import React from "react";
import { Mail, Github, Linkedin, Globe } from "lucide-react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <p className="text-center text-gray-300">
          Let's connect! You can reach me on any of these platforms:
        </p>

        <div className="space-y-3">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <Mail className="w-5 h-5" />
            <span>Email: nkydv28@gmail.com</span>
          </a>

          <a
            href="https://github.com/Nikhilkumar987"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-kumar-b8663a258/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://portfolio-yr82.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
          >
            <Globe className="w-5 h-5" />
            <span>Portfolio Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
