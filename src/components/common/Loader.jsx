export default function Loader() {
  return (
    <div className="global-loader" style={{ background: '#4a0e0e' }}> 
      <div className="loader-inner">
        {/* Big, square logo merging into the burgundy */}
        <img 
          src="/tajlogo.png" 
          alt="Taj Mahal Tandoori Restaurant" 
          style={{ width: '280px', height: 'auto', margin: '0 auto 2rem', display: 'block' }} 
        />
        <div className="loader-progress-track">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}