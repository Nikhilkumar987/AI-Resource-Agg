import React, { useEffect } from 'react';
import { useFormContext } from '../Context/Context';
import { useApiContext } from '../Context/ApiContext';
import { GenerateRoadMap } from '../util/Api.utli.js'

const TopicResult = () => {
  const { topic ,level} = useFormContext();
  const { setResponse } = useApiContext();

  useEffect(() => {
    const fetchRoadmap = async () => {
      const roadmap = await GenerateRoadMap(topic,level);
      if (roadmap) {
        setResponse(roadmap);
      }
    };

    if (topic) fetchRoadmap();
  }, [topic, setResponse,level]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Roadmap for: {topic}</h2>
      {/* You can render response here if needed */}
    </div>
  );
};

export default TopicResult;
