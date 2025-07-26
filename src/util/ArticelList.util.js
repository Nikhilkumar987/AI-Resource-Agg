// src/util/articleList.util.js
import axios from "axios";

const API_KEY = ""

export async function fetchArticleList(topic) {
  if (!API_KEY) {
    throw new Error("API key is not set. Please set it in .env file");
  }

  const endpoint = "https://api.openai.com/v1/chat/completions";

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "provide me a list of articles related to the topic from mdn,w3school,javatpoint,geekforgeeks only."
      },
      {
        role: "user",
        content: `Provide me a list of articles related to ${topic} one article per topic with fresh link and title.`
      }
    ],
    temperature: 0.7,
    max_tokens: 100,
  };

  try {
    const articleResponse = await axios.post(endpoint, payload, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return articleResponse.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching articles:", error.message);
    return null;
  }
}

