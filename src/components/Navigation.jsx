import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation-bar">
      <Link className="navigationLink" to="/">
        Home
      </Link>

      <Link className="navigationLink" to="/watchlist">
        Watchlist
      </Link>
      {/* <Link className="navigationLink" to="/addMovie">
        Add Movie
      </Link> */}
    </nav>
  );
};

export default Navigation;
