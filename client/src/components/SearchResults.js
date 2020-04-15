import React from 'react'
import Spinner from "./Spinner";
import axios from "axios";

const SearchResults = (props) => {
  const saveBook = (title, authors, desc, img, link, id, e) => {

    e.target.innerHTML = "Saved";
    e.target.className = "btn btn-success align-self-center";

    let newBookObj = {
      title: title,
      authors: authors,
      description: desc,
      image: img,
      link: link
    }
    axios.post("/api/books", newBookObj).then((res) => {
      console.log(res);
    })
  }

  let display;
  
  if (props.loading === 0){
    display = <span className="d-none"></span>; //Displays if user hasn't searched yet
  } else if (props.loading === 1) {
    display = <Spinner/>; //Displays while books are loading
  } else if (props.loading === 2) {
    display = props.books.map(book => { //Displays books to page
      let info = book.volumeInfo;

      let descArr = info.description.split(" "); //Converting to array
      descArr.length = 12; //Shortening description
      descArr.push("..."); //Adding 3 dots so user knows there's more to description
      let shortenedDescription = descArr.join(" "); //Converting back to string
      
      return (
      <li className="list-group-item">
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
            <button onClick={(e) => saveBook(
              info.title,
              info.authors[0],
              info.description,
              info.imageLinks.thumbnail,
              info.infoLink,
              book.id, e
              )} className="btn btn-info align-self-center">Save book</button>
          </div>
        </div>
      </li>
      )
    });
  }

  return display;
}

export default SearchResults;