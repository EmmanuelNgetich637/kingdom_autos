import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Payment successful via ${paymentMethod.toUpperCase()}!`);
    clearCart();
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>Your cart is empty 🛒</h3>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Checkout</h2>
      <div className="row">
        {/* 🛍️ Order Summary */}
        <div className="col-md-6 mb-4">
          <h4 className="fw-semibold">Order Summary</h4>
          <ul className="list-group">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name} (x{item.quantity})
                <span>KSh {item.price * item.quantity}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>KSh {total.toLocaleString()}</span>
            </li>
          </ul>
        </div>

        {/* 💳 Payment Section */}
        <div className="col-md-6">
          <h4 className="fw-semibold">Payment Details</h4>
          <form onSubmit={handleCheckout}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your delivery address"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="mpesa">M-Pesa</option>
                <option value="card">Credit/Debit Card</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </div>

            {paymentMethod === "mpesa" && (
              <div className="mb-3">
                <label className="form-label fw-semibold">M-Pesa Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="07XXXXXXXX"
                  required
                />
              </div>
            )}

            {paymentMethod === "card" && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Expiry</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <button type="submit" className="btn btn-success w-100 mt-3">
              Confirm & Pay KSh {total.toLocaleString()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
