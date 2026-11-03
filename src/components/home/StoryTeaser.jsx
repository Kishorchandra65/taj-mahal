export default function StoryTeaser() {
  return (
    <section className="story-section" id="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85"
              alt="Taj Mahal Heritage"
              className="story-img"
              loading="lazy"
            />
            <div className="story-img-overlay">
              <h4>45+</h4>
              <p>Years of Legacy</p>
            </div>
          </div>

          <div className="story-content">
            <h2>
              A Tradition of Taste.<br />
              <span className="gold-text">A Legacy of Warmth.</span>
            </h2>
            <p>
              Taj Mahal Tandoori Restaurant began with a simple vision: to bring the grandeur of royal Indian dining 
              to our city. For over four decades, we have remained a family-owned establishment, dedicated to the slow, 
              deliberate cooking methods of our ancestors.
            </p>
            <p>
              Every dish that leaves our kitchen tells a story of meticulous preparation—from the 
              overnight marination of our meats to the precise blend of hand-pounded spices.
            </p>
            <a href="#reserve" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Read Our Full Story →</a>
          </div>
        </div>
      </div>
    </section>
  );
}