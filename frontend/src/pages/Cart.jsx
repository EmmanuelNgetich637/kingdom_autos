import React from "react";
import { Container, Button, Table } from "react-bootstrap";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h3>Your cart is empty 🛒</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4 fw-bold">Your Shopping Cart</h2>

      <Table bordered hover responsive className="align-middle">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price (KSh)</th>
            <th>Subtotal (KSh)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toLocaleString()}</td>
              <td>{(item.price * item.quantity).toLocaleString()}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <h4>Total: <strong>KSh {getTotalPrice().toLocaleString()}</strong></h4>
        <Button variant="warning" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
