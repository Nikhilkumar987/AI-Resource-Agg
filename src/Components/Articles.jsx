import React, { useEffect } from 'react';
import { useApiContext } from '../Context/ApiContext';
import { fetchArticleList } from '../util/ArticelList.util.js';
import { useFormContext } from '../Context/Context';

const Articles = () => {
  const { response, articleList, setArticleList } = useApiContext();
  const { topic } = useFormContext();

  useEffect(() => {
    const fetchArticles = async () => {
      if (!response) {
        setArticleList("Please provide a topic to fetch articles.");
        return;
      }

      const articles = await fetchArticleList(response);
      setArticleList(articles || "Error fetching articles. Try again.");
    };

    fetchArticles();
  }, [response, setArticleList]);

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
          className="text-blue-600 underline"
        >
          {part}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Articles related to: {topic}</h2>
      <div className="whitespace-pre-wrap mt-4 text-blue-800">
        {renderWithLinks(articleList) || "Loading articles..."}
      </div>
    </div>
  );
};

export default Articles;
