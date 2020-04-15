import React from 'react'
import Spinner from "./Spinner";

const SearchResults = (props) => {
  console.log(props.booksToShow);
  let whatToDisplay;

  if (props.loading === 0){
    whatToDisplay = <span className="d-none"></span>;
  } else if (props.loading === 1) {
    whatToDisplay = <Spinner/>;
  } else if (props.loading === 2) {

    
    whatToDisplay = props.booksToShow.map(book => {
      let info = book.volumeInfo;

      let shortenedDescArr = info.description.split(" "); //Converting to array
      shortenedDescArr.length = 12; //Shortening description
      shortenedDescArr.push("..."); //Adding 3 dots so user knows there's more to description
      let shortenedDescription = shortenedDescArr.join(" "); //Converting back to string

      return <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img src={info.imageLinks.thumbnail} alt="book" height="100px"/>
          </div>
          <div className="col-9">
            <h5>{info.title}</h5>
            <p className="text-muted">By {info.authors[0]}</p>
            <p>
              {shortenedDescription} <a href={info.infoLink} target="_blank">More info</a>
            </p>
          </div>
          <div className="col-2 d-flex">
            <button className="btn btn-info align-self-center">Save book</button>
          </div>
        </div>

      </li>
    });
  }

  return whatToDisplay;
}

export default SearchResults;