import axios from "axios";

const OPEN_AI_API_KEY = import.meta.env.VITE_OPEN_AI_API_KEY;

export async function FetchProjects(response, level) {
  const endpoint = "https://api.openai.com/v1/chat/completions";

  if (!OPEN_AI_API_KEY) {
    throw new Error("Missing API key");
  }

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `give me 10 projects to learn the topic`
      },
      {
        role: "user",
        content: `Give me 3 unique project ideas for the topic "${response}". 
                  My skill level in this topic is ${level}. 
                  Only return the project names separated by commas.`
      }
    ],
    temperature: 0.7,
    max_tokens: 100
  };

  try {
    const projectresponse = await axios.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${OPEN_AI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    return projectresponse.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching project ideas:", error.message);
    return null;
  }
}
