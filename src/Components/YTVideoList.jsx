import React from "react";
import { useApiContext } from "../Context/ApiContext";

const YTVideoList = () => {
  const { YTVideos } = useApiContext();

  // Handle error message
  if (typeof YTVideos === "string") {
    return <p className="text-red-500">{YTVideos}</p>;
  }

  // Handle empty state
  if (!YTVideos || YTVideos.length === 0) {
    return <p>No videos found.</p>;
  }

  return (
    <div className="p-4">
      <h2 className="font-bold text-xl mb-4">YouTube Videos</h2>
      <ul className="space-y-4">
        {YTVideos.map((video) => (
          <li key={video.videoId} className="flex flex-col">
            <iframe
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              allowFullScreen
            ></iframe>
            <h3 className="font-semibold mt-2">{video.title}</h3>
            <p className="text-sm text-gray-400">{video.channelTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YTVideoList;
