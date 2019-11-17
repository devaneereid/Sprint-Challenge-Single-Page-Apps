import React from "react";
import styled from "styled-components";

const SearchStyles = styled.section`
  text-align: center;
  background: lightgrey;
  padding: 20px;
  font-size: 1.3rem;
  border-radius: 20px;
`;

const handleChange = (event) => {
  console.log(event.target.value)
}

export default function SearchForm(props) {

  return(
    <SearchStyles>
    <section>
      <form onSubmit={props.submit}>
        <input
            name="search"
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e)}
            value={props.results} />
          <button type="submit">Search</button>
      </form>
    </section>
    </SearchStyles>
  )
}

