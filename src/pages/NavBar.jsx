import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navInfo = (
    <>
      <NavLink to="/" className="text-xl font-semibold mr-3">
        Home
      </NavLink>
      <NavLink to="/service" className="text-xl font-semibold mr-3">
        Service
      </NavLink>
      <NavLink to="/about" className="text-xl font-semibold mr-3">
        About
      </NavLink>
      {user && (
        <NavLink to="/booking" className="text-xl font-semibold mr-3">
          My Booking
        </NavLink>
      )}
    </>
  );

  const logout = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const themeTaggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo}
          </ul>
        </div>
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navInfo}</ul>
        <label className="cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            onChange={themeTaggle}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
      <div className="navbar-end items-center">
        {user && (
          <>
            <h3 className="text-1xl font-medium mr-3">
              Welcome to
              <br />
              <p>
                <small>{user?.email}</small>
              </p>
            </h3>

            <img
              className=" w-14 h-14 rounded-full mr-3 hidden md:block"
              src={user?.photoURL}
              alt=""
            />
          </>
        )}

        {user ? (
          <button onClick={logout} className="btn btn-accent">
            LogOut
          </button>
        ) : (
          <Link to="login">
            <button className="text-xl w-32 rounded h-14 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
