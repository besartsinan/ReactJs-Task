import { NavLink, Outlet } from "react-router-dom";

const Helpbar = () => {
  return (
    <div className="help-bar">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="reachout">Reach Out</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Helpbar;
