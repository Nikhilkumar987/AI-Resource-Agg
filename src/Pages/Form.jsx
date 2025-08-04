import React from 'react';
import { useFormContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { level, setLevel, topic, setTopic } = useFormContext();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (level && topic.trim()) {
      navigate('/topicresult');
    } else {
      alert("Please fill out both fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Level") setLevel(value);
    else if (name === "TopicName") setTopic(value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md text-white border border-white/20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Level</h2>

        <form onSubmit={handleForm} className="space-y-6">
          <div>
            <label htmlFor="TopicName" className="block mb-2 text-sm font-medium">
              Topic:
            </label>
            <input
              type="text"
              name="TopicName"
              id="TopicName"
              value={topic}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., JavaScript, ML, Docker"
            />

            <label htmlFor="Level" className="block mt-4 mb-2 text-sm font-medium">
              Current Level:
            </label>
            <select
              id="Level"
              name="Level"
              value={level}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm text-black border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">-- Select --</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 
                bg-purple-600 hover:bg-purple-700 text-white"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
