import axios from "axios";

// Use an environment variable for security
const YT_API_KEY = '';

export async function fetchYouTubeVideos(topic) {
  if (!YT_API_KEY) {
    console.error("YouTube API key is missing");
    return null;
  }

  const endpoint = "https://www.googleapis.com/youtube/v3/search";

  const payload = {
    part: "snippet",
    q: topic,
    type: "video",
    maxResults: 10,
    key: YT_API_KEY,
  };

  try {
    const response = await axios.get(endpoint, { params: payload });

    // Map response data into a cleaner format
    return response.data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.id.videoId,
      channelTitle: item.snippet.channelTitle,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error(
      "Error fetching videos from YouTube API:",
      error.response?.data || error.message
    );
    return null;
  }
}
