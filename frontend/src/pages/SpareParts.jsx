import React from "react";
import { useCart } from "../context/CartContext";
import partsData from "../data/partsData";

function SpareParts() {
  const { addToCart } = useCart(); // ✅ Use the context

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4 fw-bold">Spare Parts Store</h2>

      <div className="row">
        {partsData.map((part) => (
          <div key={part.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={part.image || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={part.name}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{part.name}</h5>
                <p className="text-muted small">{part.category}</p>
                <p>{part.description}</p>
                <p className="fw-bold mb-1">
                  KSh {part.price.toLocaleString()}
                </p>
                <span
                  className={`badge ${
                    part.stock > 0 ? "bg-success" : "bg-danger"
                  }`}
                >
                  {part.stock > 0
                    ? `In Stock (${part.stock})`
                    : "Out of Stock"}
                </span>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-primary w-100"
                  disabled={part.stock <= 0}
                  onClick={() => addToCart(part)} // ✅ Adds item to cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpareParts;
