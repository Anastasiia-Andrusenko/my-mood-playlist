// components/YouTubePlayer.js
import React from 'react';
import styles from './YouTubePlayer.module.scss';


const YouTubePlayer = ({ playlistId }) => {
  return (
    <div className={styles.youtubePlayer}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Playlist Player"
      ></iframe>
    </div>
  );
};

export default YouTubePlayer;

