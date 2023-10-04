import React from 'react';

const YouTube: React.FC<{ videoId: string }> = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        className='video-ytb'
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