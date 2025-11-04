import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-gold fs-4 text-uppercase" to="/">
          Kingdom Autos
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cars">Cars</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/spareparts">Spare Parts</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item position-relative">
              <Link className="btn btn-outline-light btn-sm rounded-pill px-3 py-2" to="/cart">
                🛒 Cart
                {totalItems > 0 && (
                  <span className="badge bg-success position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 