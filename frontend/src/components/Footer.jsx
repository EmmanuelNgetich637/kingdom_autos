export default function Footer() {
  return (
    <footer className="footer mt-auto py-4 text-center">
      <div className="container">
        <h5 className="fw-bold text-gold mb-2">Kingdom Autos</h5>
        <p className="small text-muted mb-3">
          Driving excellence. Built for performance. Designed for royalty.
        </p>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Twitter</a>
        </div>
        <p className="text-secondary small mb-0">
          &copy; {new Date().getFullYear()} Kingdom Autos. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
 