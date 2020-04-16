import React, {useState} from 'react';
import axios from "axios";
import $ from "jquery";
import SearchResults from "./SearchResults";

const Search = () => {
  const [loading, setLoading] = useState(0);
  const [books, setBooks] = useState();

  const searchForBooks = async (e) => {
    e.preventDefault();
    setLoading(1); //Signifies that loading has began
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${$("#search").val()}`);
    
    setBooks(res.data.items); //Setting books to whatever the API search returns
    setLoading(2); //Signifies that loading has finished
  }

  return (
    <div>
      <h3>Book Search</h3>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Book" autoComplete="off" className="form-control" id="search"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={searchForBooks}>Search</button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        <SearchResults books={books} loading={loading}/>
      </ul>
    </div>
  )
}

export default Search;