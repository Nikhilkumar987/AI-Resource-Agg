// utils/GenerateRoadMap.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;

export async function GenerateRoadMap(topic,level) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "Give a topic-wise roadmap including subtopics. Only headings, no explanations.",
      },
      {
        role: "user",
        content: `I want to learn ${topic}. Give me the topic-wise roadmap i am at ${level}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 600,
  };

  try {
    const aiResponse = await axios.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    const result = aiResponse.data.choices[0].message.content;
    return result;
  } catch (error) {
    console.error("Error in getting the roadmap", error.message);
    return null;
  }
}
