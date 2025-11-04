import React from "react";
import partsData from "../data/partsData";

export default function SpareParts() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-gold text-uppercase">
        Spare Parts Store
      </h2>
      <div className="row g-4">
        {partsData.map((part) => (
          <div key={part.id} className="col-md-4 col-sm-6">
            <div className="card h-100 overflow-hidden">
              <div className="position-relative">
                <img
                  src={part.image}
                  className="card-img-top"
                  alt={part.name}
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300")}
                />
                <span
                  className={`position-absolute top-0 end-0 m-2 badge rounded-pill ${
                    part.stock > 0 ? "bg-success" : "bg-danger"
                  }`}
                >
                  {part.stock > 0 ? `In Stock (${part.stock})` : "Out of Stock"}
                </span>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold mb-2">{part.name}</h5>
                  <p className="card-text text-muted small mb-2">{part.category}</p>
                  <p className="text-secondary mb-3">{part.description}</p>
                </div>
                <div>
                  <p className="fw-bold fs-5 mb-3 text-gold">
                    KSh {part.price.toLocaleString()}
                  </p>
                  <button
                    className="btn btn-outline-light w-100 rounded-pill fw-semibold"
                    disabled={part.stock <= 0}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 