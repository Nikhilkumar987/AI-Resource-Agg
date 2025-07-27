import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideos } from '../util/YT.util.js'
import { useApiContext } from '../Context/ApiContext';
import { useFormContext } from '../Context/Context.jsx';

const YTcomponents = () => {
  const { setYTVideos } = useApiContext();
  const {topic,}  = useFormContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      if (topic) {
        setLoading(true);
        const videos = await fetchYouTubeVideos(topic);
        if (videos) {
          setYTVideos(videos);
        } else {
          setYTVideos("Error fetching YouTube videos. Try again.");
        }
        setLoading(false);
      }
    };

    fetchVideos();
  }, [topic, setYTVideos]);

  return loading ? <p>Loading YouTube videos...</p> : null;
};

export default YTcomponents;
