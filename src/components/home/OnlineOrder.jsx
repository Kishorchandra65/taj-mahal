import { useState } from 'react';
import { useCart } from '../../context/CartContext';

// Dummy data matching the Oldenburg menu structure
const dummyMenu = [
  { 
    id: '31', name: 'Murg Malai', price: 17.90, category: 'Tandoori', 
    description: 'Kipfilet in knoflook-yoghurt marinade, op salade',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=500&q=80',
    customizations: []
  },
  { 
    id: '37', name: 'Butter-Chicken (Chicken Makhni)', price: 17.90, category: 'Geflügel', 
    description: 'Mild',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80',
    customizations: [
      { id: 'spice1', name: 'Extra Pittig (Scharf)', price: 0.00 },
      { id: 'extra1', name: 'Extra Rijst', price: 4.50 },
    ]
  },
  { 
    id: '44', name: 'Chicken Madras', price: 17.90, category: 'Geflügel', 
    description: 'Scharf',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=80',
    customizations: [
      { id: 'spice2', name: 'Extra Pittig (Sehr Scharf)', price: 0.00 },
    ]
  },
  { 
    id: '73a', name: 'Mattar Paneer', price: 14.90, category: 'Vegetarisch', 
    description: 'Mittelscharf',
    image: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?auto=format&fit=crop&w=500&q=80',
    customizations: []
  },
  { 
    id: '85', name: 'Chicken Biriani', price: 17.90, category: 'Birianis', 
    description: 'Basmati rijst uit Punjab met cashewnoten, amandelen en rozijnen, geserveerd met yoghurtsaus',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80',
    customizations: [
      { id: 'extra2', name: 'Extra Raita', price: 4.50 },
    ]
  },
];

export default function OnlineOrder() {
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCustomizations, setSelectedCustomizations] = useState([]);
  const [note, setNote] = useState('');

  const handleOpenCustomize = (item) => {
    setSelectedItem(item);
    setSelectedCustomizations([]);
    setNote('');
  };

  const handleCustomizationToggle = (custom) => {
    setSelectedCustomizations(prev => 
      prev.find(c => c.id === custom.id) 
        ? prev.filter(c => c.id !== custom.id)
        : [...prev, custom]
    );
  };

  const handleAddToCart = () => {
    addToCart({
      ...selectedItem,
      customizations: selectedCustomizations,
      note: note
    });
    setSelectedItem(null);
  };

  return (
    <section className="online-order-section" id="order">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Online Bestellen</span>
          <h2 className="section-title">Ons Menu</h2>
        </div>

        <div className="order-grid">
          {dummyMenu.map((item) => (
            <div className="order-card" key={item.id}>
              <img src={item.image} alt={item.name} className="order-img" />
              <div className="order-info">
                <span className="order-cat">{item.category}</span>
                <h3 className="order-title">{item.name}</h3>
                <p className="order-desc" style={{ fontSize: '0.8rem', color: 'var(--ivory-dim)', marginBottom: '0.5rem' }}>{item.description}</p>
                <div className="order-bottom">
                  <span className="order-price">€{item.price.toFixed(2)}</span>
                  <button className="btn btn-secondary add-btn" onClick={() => handleOpenCustomize(item)}>
                    + Toevoegen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CUSTOMIZATION MODAL (Dutch) */}
      {selectedItem && (
        <div className="custom-modal-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="custom-modal" onClick={e => e.stopPropagation()}>
            <div className="custom-header">
              <h3>{selectedItem.name}</h3>
              <button onClick={() => setSelectedItem(null)}>✕</button>
            </div>
            
            <div className="custom-body">
              {selectedItem.customizations && selectedItem.customizations.length > 0 && (
                <>
                  <h4>Pas je gerecht aan</h4>
                  {selectedItem.customizations.map(c => (
                    <label key={c.id} className="custom-option">
                      <input 
                        type="checkbox" 
                        checked={selectedCustomizations.some(sc => sc.id === c.id)}
                        onChange={() => handleCustomizationToggle(c)}
                      />
                      <span>{c.name}</span>
                      <span className="custom-price">+€{c.price.toFixed(2)}</span>
                    </label>
                  ))}
                </>
              )}

              <h4 style={{ marginTop: '1.5rem' }}>Speciale Instructies</h4>
              <textarea 
                className="custom-note" 
                placeholder="bijv. Geen ui, extra saus..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <div className="custom-footer">
              <button className="btn btn-primary" onClick={handleAddToCart} style={{ width: '100%' }}>
                Toevoegen - €{(selectedItem.price + selectedCustomizations.reduce((s, c) => s + c.price, 0)).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}