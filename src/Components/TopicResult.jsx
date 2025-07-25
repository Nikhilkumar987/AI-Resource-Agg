import React, { useEffect } from 'react';
import { useFormContext } from '../Context/Context';
import { useApiContext } from '../Context/ApiContext';
import { GenerateRoadMap } from '../util/Api.utli';

const TopicResult = () => {
  const { topic, level } = useFormContext();
  const { response, setResponse } = useApiContext();

  useEffect(() => {
    const fetchRoadmap = async () => {
      const roadmap = await GenerateRoadMap(topic, level);
      if (roadmap) {
        setResponse(roadmap);
      } else {
        setResponse("Error fetching roadmap. Try again.");
      }
    };

    if (topic) fetchRoadmap();
  }, [topic, level, setResponse]);

  if (!topic) {
    return <div className="p-4">Please choose a topic to generate a roadmap.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Roadmap for: {topic}</h2>
      <pre className="whitespace-pre-wrap mt-4 text-blue-800">
        {response || "Loading roadmap..."}
      </pre>
    </div>
  );
};

export default TopicResult;
