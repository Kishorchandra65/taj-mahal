export default function Loader() {
  return (
    <div className="global-loader"> 
      <div className="loader-inner">
        <img 
          src="/tajlogo.png" 
          alt="Taj Mahal Tandoori Restaurant" 
          style={{ width: '250px', height: 'auto', margin: '0 auto 2rem', display: 'block' }} 
        />
        <div className="loader-progress-track">
          <div className="loader-progress-bar" />
        </div>
      </div>
    </div>
  );
}