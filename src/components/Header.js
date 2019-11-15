import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
          <SearchForm /></div>
            <header className="ui centered">
            <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          </header>
    </Router>
  );
}
