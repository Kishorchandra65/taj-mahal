import { galleryStream } from '../../data/products';

export default function PhotoStream() {
  const items = [...galleryStream, ...galleryStream];
  return (
    <section className="photo-stream-section" id="stream">
      <div className="photo-stream-header">
        <span className="photo-stream-eyebrow">
          ✦ VISUAL GALLERY • SIGNATURE DISHES & ROYAL AMBIANCE • SCROLL ✦
        </span>
      </div>
      <div className="photo-stream-track">
        {items.map((item, i) => (
          <div className="stream-card" key={i}>
            <img src={item.image} alt={item.name} loading="lazy" />
            <div className="stream-card-overlay">
              <span className="stream-card-name">{item.name}</span>
              <span className="stream-card-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}