import React from 'react'
import Spinner from "./Spinner";

const SearchResults = (props) => {
  console.log(props.booksToShow);

  if (props.loading === 0){
    return <span className="d-none"></span>
  } else if (props.loading === 1) {
    return <Spinner/>
  } else if (props.loading === 2) {
    return props.booksToShow.map(book => (
      <li>{book.volumeInfo.title}</li>
    ));
  }
}

export default SearchResults;