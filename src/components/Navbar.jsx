import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <h1>Simple SPA </h1>
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="stuff">Stuff</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
