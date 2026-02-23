import React from "react";
import "../assets/styles/Gallery.scss";
import photo1 from "../assets/images/gallery/1.jpeg";
import photo2 from "../assets/images/gallery/2.jpeg";
import photo3 from "../assets/images/gallery/3.jpeg";
import photo4 from "../assets/images/gallery/4.jpeg";
import photo5 from "../assets/images/gallery/5.jpeg";

const images: string[] = [photo1, photo2, photo3, photo4, photo5];

function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img
              className="zoom"
              src={src}
              alt={`Gallery Image ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
