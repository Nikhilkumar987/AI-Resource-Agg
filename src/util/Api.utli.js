// utils/GenerateRoadMap.js
import axios from "axios";

const API_KEY = ""

export async function GenerateRoadMap(topic, level) {
  if (!API_KEY) {
    throw new Error("Missing OpenAI API key in .env");
  }

  const endpoint = "https://api.openai.com/v1/chat/completions";
  const userLevel = level || "beginner";

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Give a topic-wise roadmap including subtopics. Only headings,and some subtopic no explanations give fixed answer each time 10 headings max and 3 subtopics per heading. " ,
      },
      {
        role: "user",
        content: `I want to learn ${topic}. Give me the topic-wise roadmap. I am at ${userLevel} level.`,
      },
    ],
    temperature: 0.7,
    max_tokens: 100,
  };

  try {
    const aiResponse = await axios.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return aiResponse.data.choices[0].message.content;
  } catch (error) {
    if (error.response) {
      console.error("OpenAI API Error:", error.response.data);
    } else {
      console.error("Error in getting the roadmap:", error.message);
    }
    return null;
  }
}
