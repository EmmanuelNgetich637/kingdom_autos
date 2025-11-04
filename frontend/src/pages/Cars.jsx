import { Link } from "react-router-dom";
import { carsData } from "../data/carsData";

export default function Cars() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-gold text-uppercase">
        Our Car Collection
      </h2>
      <div className="row g-4">
        {carsData.map((car) => (
          <div key={car.id} className="col-md-4 col-sm-6">
            <div className="card h-100 overflow-hidden">
              <div className="position-relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="card-img-top"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/400x250")}
                />
                <span
                  className={`position-absolute top-0 end-0 m-2 badge rounded-pill ${
                    car.available ? "bg-success" : "bg-danger"
                  }`}
                >
                  {car.available ? "Available" : "Sold Out"}
                </span>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold mb-2">{car.name}</h5>
                  <p className="text-secondary mb-3">{car.description}</p>
                </div>
                <div>
                  <p className="fw-bold fs-5 mb-3 text-gold">
                    KSh {car.price.toLocaleString()}
                  </p>
                  <Link
                    to={`/cars/${car.id}`}
                    className="btn btn-outline-light w-100 rounded-pill fw-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 