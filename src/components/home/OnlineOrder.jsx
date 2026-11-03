import { useCart } from '../../context/CartContext';

const menuItems = [
  { id: 1, name: 'Royal Butter Chicken', price: 18.00, category: 'Main Course', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Raan-e-Khas', price: 34.00, category: 'Tandoor', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Dum Biryani Nawabi', price: 22.00, category: 'Biryani', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Dal Taj Mahal', price: 14.00, category: 'Vegetarian', image: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Garlic Naan', price: 4.00, category: 'Breads', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'Mango Lassi', price: 6.00, category: 'Beverages', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80' },
];

export default function OnlineOrder() {
  const { addToCart } = useCart();

  return (
    <section className="online-order-section" id="order">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Online Ordering</span>
          <h2 className="section-title">Order to Your Doorstep</h2>
        </div>

        <div className="order-grid">
          {menuItems.map((item) => (
            <div className="order-card" key={item.id}>
              <img src={item.image} alt={item.name} className="order-img" />
              <div className="order-info">
                <span className="order-cat">{item.category}</span>
                <h3 className="order-title">{item.name}</h3>
                <div className="order-bottom">
                  <span className="order-price">${item.price.toFixed(2)}</span>
                  <button className="btn btn-secondary add-btn" onClick={() => addToCart(item)}>
                    + Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}