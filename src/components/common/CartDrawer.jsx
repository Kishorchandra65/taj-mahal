import { useState } from 'react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { 
    cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, 
    cartTotal, clearCart, isOrderSuccess, setIsOrderSuccess 
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState('razorpay'); // 'razorpay' or 'cod'

  const handleCheckout = (e) => {
    e.preventDefault();
    
    if (paymentMethod === 'razorpay') {
      // Here we will later trigger the Razorpay popup via FastAPI
      alert("Razorpay Popup will open here.");
      clearCart();
    } else {
      // COD Flow
      clearCart();
    }
  };

  return (
    <>
      <div className={`cart-backdrop ${isCartOpen || isOrderSuccess ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      
      {/* CART DRAWER */}
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Ihre Bestellung</h3>
          <button onClick={() => setIsCartOpen(false)} className="cart-close">✕</button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-cart">Ihr Warenkorb ist leer. Fügen Sie einige königliche Gerichte hinzu!</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.cartItemId}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>€{item.price.toFixed(2).replace('.', ',')}</p>
                  <div className="cart-qty">
                    <button onClick={() => updateQuantity(item.cartItemId, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartItemId, 1)}>+</button>
                  </div>
                </div>
                <button className="cart-remove" onClick={() => removeFromCart(item.cartItemId)}>✕</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Gesamt:</span>
              <span>€{cartTotal.toFixed(2).replace('.', ',')}</span>
            </div>
            
            <form onSubmit={handleCheckout} className="checkout-form">
              <input type="text" placeholder="Vollständiger Name" required />
              <input type="text" placeholder="Lieferadresse" required />
              <input type="tel" placeholder="Telefonnummer" required />
              
              {/* Payment Method Selector */}
              <div className="payment-methods">
                <label className={`payment-option ${paymentMethod === 'razorpay' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="razorpay" 
                    checked={paymentMethod === 'razorpay'} 
                    onChange={() => setPaymentMethod('razorpay')} 
                  />
                  <span>Kartenzahlung (Razorpay)</span>
                </label>
                <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cod" 
                    checked={paymentMethod === 'cod'} 
                    onChange={() => setPaymentMethod('cod')} 
                  />
                  <span>Barzahlung bei Lieferung (COD)</span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                {paymentMethod === 'razorpay' ? 'Jetzt Bezahlen' : 'Bestellung Aufgeben'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* SUCCESS MODAL */}
      <div className={`success-modal ${isOrderSuccess ? 'open' : ''}`}>
        <div className="success-content">
          <div className="success-icon">✓</div>
          <h2>Bestellung Bestätigt!</h2>
          <p>Vielen Dank, dass Sie sich für Taj Mahal entschieden haben. Ihr königliches Festmahl wird zubereitet und ist bald bei Ihnen.</p>
          <button className="btn btn-primary" onClick={() => setIsOrderSuccess(false)} style={{ width: '100%' }}>
            Weiter Einkaufen
          </button>
        </div>
      </div>
    </>
  );
}