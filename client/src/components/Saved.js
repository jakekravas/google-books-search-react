import React, {useState, useEffect} from 'react';
import API from "../utils/API";

const Saved = () => {
  const [loading, setLoading] = useState(0);
  const [books, setBooks] = useState();

  const removeBook = e => {

  }

  let display;

  useEffect(() => {
    displayBooks();
  }, [])
  
  const displayBooks = async () => {
    setLoading(1);

    await API.getBooks().then((res) => {
      setBooks(res.data);
    })
    setLoading(2)
  }
  if (loading === 0){
    display = <span className="d-none"></span>
  } else if (loading === 1){
    display = <p>Loading</p>
  } else if (loading === 2){
    console.log(books);
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
            <button onClick={removeBook} className="btn btn-danger align-self-center">Remove book</button>
          </div>
        </div>
      </li>
      )
    });
  }
  return (
    <div>
      <h3>Your Saved Books</h3>
      <ul className="list-group">
        {display}
      </ul>
    </div>
  )
}

export default Saved;