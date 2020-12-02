import axios from "axios";

export default {
  // Gets all books
  getBets: function () {
    return axios.get("http://localhost:3001/api/betslips");
  },
  // Gets the book with the given id
  getBet: function (id) {
    return axios.get("/api/betslips/" + id);
  },
  // Deletes the book with the given id
  deleteBet: function (id) {
    return axios.delete("/api/betslips/" + id);
  },
  // Saves a book to the database
  saveBet: function (betslips) {
    return axios.post("/api/betslips", betslips);
  },
};
