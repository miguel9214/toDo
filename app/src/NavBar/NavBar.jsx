import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
