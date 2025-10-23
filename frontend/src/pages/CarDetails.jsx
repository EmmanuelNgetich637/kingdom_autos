import { useParams, Link } from "react-router-dom";
import { carsData } from "../data/carsData";

function CarDetails() {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="text-center mt-5">
        <h2>Car not found</h2>
        <Link to="/cars" className="btn btn-secondary mt-3">
          Back to Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={car.image}
            alt={car.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h2>{car.name}</h2>
          <p className="lead">{car.price}</p>
          <p>{car.description}</p>
          <Link to="/cars" className="btn btn-outline-primary mt-3">
            Back to Cars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
