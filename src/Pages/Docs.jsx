import React from "react";

const Docs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-3xl space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
          <p className="text-gray-300">
            1. Go to the <span className="text-blue-400 font-semibold">GET STARTED</span>page.<br />
            2. Enter a <span className="text-blue-400 font-semibold">topic</span> you want to learn.<br />
            3. Select your <span className="text-blue-400 font-semibold">level</span> (Beginner, Intermediate, Advanced).<br />
            4. Click <span className="text-green-400 font-semibold">Generate</span> to get a roadmap, resources, and project ideas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>AI-generated learning roadmap</li>
            <li>Curated articles, blogs, and YouTube links</li>
            <li>Suggested projects based on your level</li>
            <li>Option to download roadmap as PDF</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Tips</h2>
          <p className="text-gray-300">
            - Make sure your internet connection is active.<br />
            - If you don’t get results, try refining your topic.<br />
            - Refresh the page to clear previous data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Docs;
