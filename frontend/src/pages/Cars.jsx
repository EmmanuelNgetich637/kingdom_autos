import React from "react";
import carsData from "../data/carsData";

function Cars() {
  return (
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">Available Cars</h2>

      <div className="row">
        {carsData.map((car) => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={car.image}
                className="card-img-top"
                alt={car.name}
                onError={(e) => (e.target.src = "https://via.placeholder.com/400x250")}
              />
              <div className="card-body">
                <h5 className="card-title fw-semibold">{car.name}</h5>
                <p className="card-text text-muted small">{car.year}</p>
                <p className="mb-2">{car.description}</p>
                <p className="fw-bold mb-1">KSh {car.price.toLocaleString()}</p>
                <p className="text-secondary small mb-2">
                  {car.mileage} • {car.transmission} • {car.fuelType}
                </p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary w-100">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
