import React from "react";
const BetslipContext = React.createContext({
  handleBetslipInputChange: () => {},
  handleBetslipFormSubmit: () => {},
  loadBets: () => {},
  deleteBets: () => {},
  getBets: () => {},
});
export default BetslipContext;
