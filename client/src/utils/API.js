import axios from "axios";

export default {

  getBooks: function(){
    return axios.get("/api/books");
  },

  saveBook: function(bookObj){
    return axios.post("/api/books", bookObj)
  }
}