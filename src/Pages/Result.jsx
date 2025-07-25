import React from 'react';
import TopicResult from '../Components/TopicResult';

const Result = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Your Personalized Learning Roadmap
        </h1>
        <div className="overflow-y-auto max-h-[70vh] custom-scrollbar">
          <TopicResult />
        </div>
      </div>
    </div>
  );
};

export default Result;
