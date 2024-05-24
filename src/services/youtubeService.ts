// services/youtubeService.js
import axios from 'axios';

const API_KEY = 'AIzaSyBnfAVfFl5Pq6JVk-2ETn_yLG81fSw2yu8';

export const fetchPlaylistItems = async (playlistId) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 200,
        key: API_KEY,
      },
    });
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching playlist items: ", error.response?.data || error.message);
    throw error;
  }
};
