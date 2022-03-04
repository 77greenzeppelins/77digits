import React from 'react';

const ImageHolder = ({ imagesArray }) => {
  return (
    <div className="images-container">
      {imagesArray.map(({ src, label }) => (
        <div key={src} className="image-container">
          <h1 className="image-label">{label}</h1>
          <img className="image-picture" src={src} alt={label} />
        </div>
      ))}
    </div>
  );
};

export default ImageHolder;
