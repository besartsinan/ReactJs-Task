import { NavLink } from "react-router-dom";
import ErrorImage from "../assets/ErrorImage.png";
const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="text">
          <h1>Page Not Found</h1>
          <p>
            We can't seem to find the page you're looking for. Please check the
            URL for any typos.
          </p>
        </div>
        <div>
          <p className="button">
            <NavLink to="/" className="button-link">
              Take Me Home
            </NavLink>
          </p>
          <img className="image" src={ErrorImage} alt="Error page image" />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
