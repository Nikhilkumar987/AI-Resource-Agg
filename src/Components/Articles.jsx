import React, { useEffect, useRef } from "react";
import { useApiContext } from "../Context/ApiContext";
import { fetchArticleList } from "../util/ArticelList.util.js";
import { useFormContext } from "../Context/Context";

const Articles = () => {
  const { response, articleList, setArticleList } = useApiContext();
  const { topic } = useFormContext();
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchArticlesForSubtopics = async () => {
      if (!response || hasFetched.current || typeof response !== "string") return;
      hasFetched.current = true;

      // Split roadmap text into subtopics (by line or bullet)
      const subtopics = response
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line && !line.toLowerCase().includes("roadmap"));

      const allArticles = {};

      for (const sub of subtopics) {
        const subtopic = sub.replace(/^\d+[\.\-\)]\s*/, "");
        const cacheKey = `articles-${subtopic}`;

        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          allArticles[subtopic] = JSON.parse(cached);
          continue;
        }

        const result = await fetchArticleList(subtopic);
        allArticles[subtopic] = result || "No articles found";
        localStorage.setItem(cacheKey, JSON.stringify(result));
      }

      setArticleList(allArticles);
    };

    if (!articleList) {
      fetchArticlesForSubtopics();
    }
  }, [response, articleList, setArticleList]);

  // Convert URLs in text to clickable links
  const renderWithLinks = (text) => {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300 transition"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  if (!articleList) {
    return (
      <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Articles related to: {topic.toUpperCase()}</h2>
        <p className="mt-4">Loading articles...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">
        Articles related to: <span className="text-indigo-400">{topic.toUpperCase()}</span>
      </h2>
      {Object.entries(articleList).map(([sub, content]) => (
        <div key={sub} className="mb-6">
          <h3 className="text-lg font-semibold text-yellow-400">{sub}</h3>
          <div className="mt-2 whitespace-pre-wrap">{renderWithLinks(content)}</div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
