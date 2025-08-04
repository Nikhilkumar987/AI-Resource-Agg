import React, { useEffect } from "react";
import { useApiContext } from "../Context/ApiContext";
import { FetchProjects } from "../util/Projects.util.js";
import { useFormContext } from "../Context/Context.jsx";

const Projectlist = () => {
  const { response, setProjects, projects } = useApiContext();
  const { level, topic} = useFormContext();

  useEffect(() => {
    const fetchData = async () => {
      if (!response || !level) return;

      const cacheKey = `projects-${response}-${level}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        // Use cached results
        setProjects(JSON.parse(cached));
        return;
      }

      // Otherwise call API
      const ideas = await FetchProjects(response, level);
      if (ideas) {
        // Clean and split ideas into a list
        const cleaned = ideas
          .split(/\d+\.\s+/) // split by numbered list
          .map((item) => item.trim())
          .filter((item) => item);

        setProjects(cleaned);
        localStorage.setItem(cacheKey, JSON.stringify(cleaned));
      }
    };

    // Fetch only if no projects in state
    if (!projects || projects.length === 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, level]); // only runs again if topic or level changes

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
        Projects related to: <span className="text-indigo-400">{topic.toUpperCase()}</span>
      </h2>
      {projects && projects.length > 0 ? (
        <ul className="space-y-2">
          {projects.map((proj, i) => (
            <li
              key={i}
              className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition"
            >
              {proj}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">Loading projects...</p>
      )}
    </div>
  );
};

export default Projectlist;
