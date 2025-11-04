import { useCart } from "../context/CartContext";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Container className="mt-5 text-center">
        <h3>Your cart is empty 🛒</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Your Shopping Cart</h2>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>Ksh {item.price}</td>
              <td>Ksh {item.price * item.quantity}</td>
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
        <h4>Total: Ksh {total.toLocaleString()}</h4>
        <div>
          <Button variant="warning" className="me-2" onClick={clearCart}>
            Clear Cart
          </Button>
          <Button variant="success" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
