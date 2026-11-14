import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import API from '../api/axios';

export default function OrderPage() {
  const { addToCart } = useCart();
  const [menu, setMenu] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch data from FastAPI when the page loads
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await API.get('/menu');
        
        // Flatten the categories+dishes array into a single list of dishes
        const allDishes = res.data.flatMap(cat => 
          cat.dishes.map(d => ({ ...d, category: cat.category }))
        );
        
        setMenu(allDishes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu:", error);
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  // Get unique categories for the filter buttons
  const categories = ['ALL', ...new Set(menu.map(item => item.category))];

  // Filter logic
  const filteredItems = menu.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          (item.description && item.description.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Helper to format image URLs
  const getImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith('http')) return url; // External URL
    return `http://127.0.0.1:8000${url}`; // Local uploaded file
  };

  if (loading) return <div style={{ paddingTop: '150px', textAlign: 'center', color: 'var(--ivory)' }}>Loading menu...</div>;

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div className="container">
        
        <div className="order-page-header">
          <h1 className="section-title">Online Bestellen</h1>
          <p className="section-subtitle">Lieferung & Abholung in Oldenburg</p>
          
          <div className="search-bar-wrap">
            <input 
              type="text" 
              placeholder="Suchen Sie nach Gerichten..." 
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <div className="category-pills">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`cat-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-list-grid">
          {filteredItems.length === 0 ? (
            <p style={{ color: 'var(--ivory-dim)', textAlign: 'center', gridColumn: '1 / -1' }}>Keine Gerichte gefunden.</p>
          ) : (
            filteredItems.map(item => (
              <div className="menu-list-item" key={item.id}>
                
                {/* Display Image if exists */}
                {item.image_url && (
                  <img 
                    src={getImageUrl(item.image_url)} 
                    alt={item.name} 
                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.2rem' }} 
                  />
                )}

                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">€{item.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="menu-item-desc">{item.description}</p>
                </div>
                <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                  + Hinzufügen
                </button>
              </div>
            ))
          )}
        </div>

        {/* Allergens Footer */}
        <div className="allergens-info">
          <p><strong>Allergene:</strong> 1: Getreideprodukte (glutenhaltig) – 2: Krustentiere – 3: Eier – 4: Fisch – 5: Erdnüsse – 6: Sojabohnen – 7: Milch – 8: Schalenfrüchte – 9: Sellerie – 10: Senf – 11: Sesamsamen – 12: Schwefeldioxid – 13: Lupinen – 14: Weichtiere</p>
        </div>

      </div>
    </main>
  );
}