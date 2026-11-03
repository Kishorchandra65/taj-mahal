import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully! Our team will contact you shortly.");
    setIsCartOpen(false);
    // Here you would normally send data to your backend
  };

  return (
    <>
      <div className={`cart-backdrop ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Order</h3>
          <button onClick={() => setIsCartOpen(false)} className="cart-close">✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is currently empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-qty">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-remove" onClick={() => removeFromCart(item.id)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <form onSubmit={handleCheckout} className="checkout-form">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Delivery Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}