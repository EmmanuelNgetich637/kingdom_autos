import { Link } from "react-router-dom";
import { carsData } from "../data/carsData";

function Cars() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Our Cars</h1>
      <div className="row">
        {carsData.map((car) => (
          <div key={car.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={car.image}
                alt={car.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">{car.price}</p>
                <Link to={`/cars/${car.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
