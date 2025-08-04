import React, { useState } from "react";
import Articles from "./Articles";
import Projectlist from "./Projectlist";


const ResourceList = () => {
  const [activeTab, setActiveTab] = useState("articles");

  const tabs = [
    { id: "articles", label: "Articles" },
    { id: "projects", label: "projects" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Resources</h1>

      {/* Tab Buttons */}
      <div className="flex space-x-4 border-b border-gray-700 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 font-medium text-lg rounded-t-lg transition ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-900 shadow-lg rounded-xl p-6 min-h-[300px] text-white">
        {activeTab === "articles" && <Articles />}
        
        {activeTab === "projects" && (
          <div>

            <Projectlist/>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceList;
