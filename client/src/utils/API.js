import axios from "axios";

export default {

  getBooks: function(){
    return axios.get("/api/books");
  },

  saveBook: function(bookObj){
    return axios.post("/api/books", bookObj);
  },

  deleteBook: function(id){
    return axios.delete("/api/books/" + id);
  }
}