import React from 'react';

const YouTube: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        width="738"
        height="415"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTube;