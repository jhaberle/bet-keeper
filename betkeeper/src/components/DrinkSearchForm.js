import React, { useContext } from "react";
import styled from "styled-components";
import BetContext from "../utils/betContext";

const StyledDrinkSearchForm = styled.form`
  display: flex;
  padding: 10px;
  margin-top: 20px;
  width: 100%;

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;

    label {
      font-weight: bold;
      margin-bottom: 10px;
    }
    input {
      margin-top: 10px;
      height: 30px;
      outline: none;
    }
    button {
      height: 40px;
      border-radius: 10px;
      color: #ffffff;
      font-size: 15px;
    }
  }
`;
const DrinkSearchForm = () => {
{ /* const { search, handleInputChange, handleFormSubmit } = useContext(
    BetContext
); */}
  return (
    <StyledDrinkSearchForm>
      <div className="form-group">
        <lable htmlFor="search">Search:</lable>
        <input
          className="form-control"
          name="search"
          type="text"
          placeholder="Search for a Drink"
          id="search"
        />
        <br />
        <button type="button" className="btn btn-success">Search</button>
      </div>
    </StyledDrinkSearchForm>
  );
};
export default DrinkSearchForm;
