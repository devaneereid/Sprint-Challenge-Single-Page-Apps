import React, {useState} from "react";

export default function SearchForm(props) {
  console.log(props.results)
  return(
    <section>
      <form onSubmit={props.submit}>
        <input
            name="search"
            type="search"
            placeholder="search-name"
            onChange={props.handleChange}
            value={props.results} />
          <button type="submit">Search</button>
      </form>
    </section>
  )
}

