import axios from "axios";

export default {
  // Gets all betslips
  getBets: function () {
    return axios.get("http://localhost:3001/api/betslips");
  },
  // Gets the slip with the given id
  getBet: function (id) {
    return axios.get("/api/betslips/" + id);
  },
  // Deletes the slip with the given id
  deleteBet: function (id) {
    return axios.delete("http://localhost:3001/api/betslips", id);
  },
  // Saves a slip to the database
  saveBet: function (betslips) {
    return axios.post("/api/betslips", betslips);
  },
};
