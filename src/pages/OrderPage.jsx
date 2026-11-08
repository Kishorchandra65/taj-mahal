import { useState } from 'react';
import { useCart } from '../context/CartContext';

// Categories matching the screenshot exactly
const categories = [
  'ALL', 'ALC.FREI GETRÄNKE', 'BEILAGEN', 'DESSERTS', 
  'HAUPTGERICHTE', 'LASSI / JOGHURTGETRÄNKE', 'MITTAGSTISCH', 'VORSPEISEN'
];

// Dummy data based on the screenshot and Oldenburg menu
const menuItems = [
  { id: '4', name: 'Aloo Veg. Tikki T', price: 6.50, category: 'VORSPEISEN', desc: 'Potatoes and vegetables, vegetarian meatballs in yogurt-sweet and sour sauce', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80' },
  { id: '5', name: 'Samosa', price: 6.50, category: 'VORSPEISEN', desc: 'Filled dumplings with potatoes and vegetables', image: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?auto=format&fit=crop&w=300&q=80' },
  { id: '6', name: 'Vegetable Pakora', price: 6.50, category: 'VORSPEISEN', desc: 'Verschiedenes Gemüse mit Indischen Gewürzen', image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=300&q=80' },
  { id: '37', name: 'Butter-Chicken (Chicken Makhni)', price: 17.90, category: 'HAUPTGERICHTE', desc: 'Mild', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=300&q=80' },
  { id: '95', name: 'Nan', price: 3.50, category: 'BEILAGEN', desc: 'Traditionelles indisches Fladenbrot', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=300&q=80' },
  { id: '116', name: 'Kheer', price: 6.00, category: 'DESSERTS', desc: 'Milchreis mit Cashewnüssen, Mandeln, Rosinen', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=300&q=80' },
];

export default function OrderPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  // Filter logic
  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Header & Search */}
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

        {/* Category Pills */}
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

        {/* Menu List */}
        <div className="menu-list-grid">
          {filteredItems.length === 0 ? (
            <p style={{ color: 'var(--ivory-dim)', textAlign: 'center', gridColumn: '1 / -1' }}>Keine Gerichte gefunden.</p>
          ) : (
            filteredItems.map(item => (
              <div className="menu-list-item" key={item.id}>
                <div className="menu-item-info">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <span className="menu-item-price">€{item.price.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <p className="menu-item-desc">{item.desc}</p>
                  {item.image && (
                    <img src={item.image} alt={item.name} className="menu-item-thumb" />
                  )}
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