import React from 'react';
import './bootstrap.min.css';
import './App.css';
import axios from "axios";
import $ from "jquery";
import Nav from "./components/Nav";
import Search from "./components/Search";

function App() {
  // axios.get("/api/books").then((res) => {
  //   console.log(res);
  // });
  
  return (
    <div className="App">
      <Nav/>
      <div className="container">
        <Search/>
      </div>
      {/* <input id="search" type="text" placeholder="Search for book"/>
      <button onClick={searchForBook}>Search</button> */}



      {/* <form onSubmit={onFormSubmit}>
        <input id="title" type="text" placeholder="title"/>
        <input id="authors" type="text" placeholder="authors"/>
        <input id="description" type="text" placeholder="description"/>
        <input id="image" type="text" placeholder="image"/>
        <input id="link" type="text" placeholder="link"/>
        <button type="submit">Add Book</button>
      </form> */}
    </div>
  );
}

export default App;

// const onFormSubmit = e => {
//   e.preventDefault();

//   let newBookObj = {
//     title: $("#title").val(),
//     author: $("#author").val(),
//     authors: $("#authors").val(),
//     description: $("#description").val(),
//     image: $("#image").val(),
//     link: $("#link").val()
//   }

//   axios.post("/api/books", newBookObj).then((res) => {
//     console.log(res);
//   })
// };