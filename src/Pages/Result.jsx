import React from "react";
import TopicResult from "../Components/TopicResult";
import ResourceList from "../Components/ResourceList";
import YTcomponents from "../Components/YTcomponents";
import YTVideoList from "../Components/YTVideoList";

const Result = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Roadmap Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Your Personalized Learning Roadmap
          </h1>

          <div className="overflow-y-auto max-h-[60vh] custom-scrollbar pr-2">
            <TopicResult />
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Additional Resources</h2>
          <p className="text-gray-400">
            Explore curated articles, YouTube videos, and blogs to deepen your
            understanding of this topic.
          </p>

          <div className="mt-6">
            <ResourceList />
          </div>
        </div>

        {/* YouTube Section */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">YouTube Videos</h2>
          
          {/* This component fetches videos whenever `response` changes */}
          <YTcomponents />
          
          {/* This component displays the list */}
          <YTVideoList />
        </div>
      </div>
    </div>
  );
};

export default Result;
