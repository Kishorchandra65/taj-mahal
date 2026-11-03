import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 45, suffix: '+', label: 'Years of Legacy' },
  { target: 60, suffix: '+', label: 'Royal Recipes' },
  { target: 500, suffix: 'K+', label: 'Guests Served' },
  { target: 5, suffix: '★', label: 'Star Experiences' },
];

export default function Stats() {
  const ref = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          stats.forEach((s, i) => {
            let cur = 0;
            const step = Math.ceil(s.target / 50);
            const t = setInterval(() => {
              cur += step;
              if (cur >= s.target) {
                cur = s.target;
                clearInterval(t);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[i] = cur;
                return next;
              });
            }, 25);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">
                {counts[i]}
                <span>{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}