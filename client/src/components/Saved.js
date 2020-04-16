import React, {useState, useEffect} from 'react';
import Spinner from "./Spinner";
import API from "../utils/API";

const Saved = () => {
  const [loading, setLoading] = useState(0);
  const [books, setBooks] = useState();

  const removeBook = (bookId, e) => {
    API.deleteBook(bookId);
    window.location.reload();
  }

  let display;

  useEffect(() => {
    displayBooks(); //Runs on page load
  }, [])
  
  const displayBooks = async () => {
    setLoading(1); //Sets loading to current

    await API.getBooks().then((res) => {
      setBooks(res.data);
    })
    setLoading(2) //Sets loading to done after API.getBooks() has finished
  }
  if (loading === 0){ //Before loading has started
    display = <span className="d-none"></span>
  } else if (loading === 1){ //During loading
    display = <Spinner/>
  } else if (loading === 2){ //When loading has finished

    if (books.length < 1){
      display = <h5 className="text-center">No books to display</h5>
    } else {
        display = books.map(book => { //Displays when loading has finished
          let shortenedDescription;
    
          // Ensuring our site doesn't error out if any of the results have no description
          if (book.description){
            let descArr = book.description.split(" "); //Converting to array
            descArr.length = 12; //Shortening description
            descArr.push("..."); //Adding 3 dots so user knows there's more to description
            shortenedDescription = descArr.join(" "); //Converting back to string
          }
          
          return (
          <li className="list-group-item">
            <div className="row">
              <div className="col-1">
                <img src={book.image} alt={`${book.title} cover`} height="90px"/>
              </div>
              <div className="col-9">
                <h5>{book.title}</h5>
                <p className="text-muted">By {book.authors}</p>
                <p>
                  {shortenedDescription} <a href={book.link} target="_blank">More info</a>
                </p>
              </div>
              <div className="col-2 d-flex">
                <button onClick={(e) => removeBook(book._id, e)} className="btn btn-danger align-self-center">Remove book</button>
              </div>
            </div>
          </li>
          )
        });
      }
    }

  return (
    <div>
      <h3 className="text-center">Your Saved Books</h3>
      <ul className="list-group">
        {display}
      </ul>
    </div>
  )
}

export default Saved;