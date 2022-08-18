import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import avatar from "../../assets/images/favicon.svg";

const Header = ({ setSearchContact }) => {
  const location = useLocation();
  return (
    <header className="header">
      <div className="container">
        <div
          className={
            window.matchMedia("(max-width: 768px)").matches &&
            location.pathname !== "/"
              ? "d-flex align-items-center justify-content-end"
              : "d-flex align-items-center justify-content-between"
          }
        >
          {window.matchMedia("(min-width: 768px)").matches && (
            <Link to="/">
              <h1>Контакты</h1>
            </Link>
          )}
          {location.pathname === "/" && (
            <div className="field-search">
              <input
                type="search"
                onChange={(e) => setSearchContact(e.target.value)}
                className="field"
              />
            </div>
          )}
          <div className="avatar">
            <img src={avatar} className="avatar-img" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
