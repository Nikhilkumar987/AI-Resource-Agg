import React, { useEffect } from 'react';
import { useFormContext } from '../Context/Context';
import { useApiContext } from '../Context/ApiContext';
import { GenerateRoadMap } from '../util/Api.utli';
import { jsPDF } from 'jspdf';

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

  // Function to download as PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const content = `Roadmap for: ${topic}\n\n${response || ""}`;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(content, 10, 10); // add text to PDF
    doc.save(`roadmap_${topic}.pdf`);
  };

  return (
    <div className="relative p-4">
      <h2 className="text-xl font-semibold">Roadmap for: {topic}</h2>
      <pre className="whitespace-pre-wrap mt-4 text-blue-800">
        {response || "Loading roadmap..."}
      </pre>

      {/* Download button fixed at bottom right */}
      {response && (
        <button
          onClick={handleDownloadPDF}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-lg transition"
        >
          Download PDF
        </button>
      )}
    </div>
  );
};

export default TopicResult;
