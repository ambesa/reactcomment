import axios from "axios";
// IMPORTING AXIOS GETTING BOOKS API USING FUNCTION GET BOOKS
// GETSAVE BOOKS IS FUNCTION TO GET API OF BOOKS USING AXIOS
// DELETEBOOK IS FUNCTION TON DELETE BOOK USING
// ID PARAMETER  AND SAVE BOOK IS  ANOTHER FUNCTION USING BOOK DATA ARGUMENT

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Gets all saved books

  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);

  }
};
