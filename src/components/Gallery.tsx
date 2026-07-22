import React from "react";
import "../assets/styles/Gallery.scss";
import photo1 from "../assets/images/gallery/1.jpeg";
import photo2 from "../assets/images/gallery/2.jpeg";
import photo3 from "../assets/images/gallery/3.jpeg";
import photo4 from "../assets/images/gallery/4.jpeg";

const images = [
  { src: photo1, alt: "Swimmer diving into an outdoor pool" },
  { src: photo2, alt: "Swimmer practicing butterfly stroke underwater" },
  { src: photo3, alt: "Breakdancer performing in a dance circle" },
  { src: photo4, alt: "Person holding a black cat in a mirror" },
];

function Gallery() {
  return (
    <div id="gallery" className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.src}>
            <img
              className="zoom"
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
