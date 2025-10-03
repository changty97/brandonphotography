import React from "react";

const featured = [
  "https://picsum.photos/id/1005/1200/600",
  "https://picsum.photos/id/1011/1200/600",
  "https://picsum.photos/id/1021/1200/600"
];

const gallery = [
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1018/800/500",
  "https://picsum.photos/id/1025/800/500",
  "https://picsum.photos/id/1031/800/500"
];

export default function HeroGallery() {
  return (
    <section>
      <h2>Featured Photography</h2>
      <div className="featured-gallery">
        {featured.map((src, i) => (
          <img key={i} src={src} alt={`Featured ${i}`} className="featured-photo" />
        ))}
      </div>

      <h2>More of Our Work</h2>
      <div className="gallery">
        {gallery.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Gallery ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
