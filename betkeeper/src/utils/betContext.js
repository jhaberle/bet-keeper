import React from "react";
const BetContext = React.createContext({
  result: {},
  search: "",
  handleInputChange: () => {},
  handleFormSubmit: () => {},
});
export default BetContext;
