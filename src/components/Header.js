import React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import SearchForm from "./SearchForm";
import styled from "styled-components";

const HeaderStyles = styled.div`
  font-size: 1rem;
  color: black;
  text-decoration: none;
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  return (
    <Router>
      <HeaderStyles>
      <div className="navbar">
        <Link to="/">Home</Link>
          <SearchForm /></div>
            <header className="ui centered">
            <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
          </header>
          </HeaderStyles>
    </Router>
  );
}
