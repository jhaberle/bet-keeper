import React, { useContext } from "react";
import styled from "styled-components";
import BetContext from "../utils/betContext";

const StyledDrinkSearchForm = styled.form`
  display: flex;
  border: 1px solid #333333;
  padding: 10px;
  margin-top: 20px;
  width: 60%;
  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
      font-weight: bold;
      margin-bottom: 10px;
    }
    input {
      height: 40px;
      outline: none;
    }
    button {
      height: 40px;
      border-radius: 5px;
      background-color: grey;
      color: #ffffff;
      font-size: 20px;
    }
  }
`;
const DrinkSearchForm = () => {
  const { search, handleInputChange, handleFormSubmit } = useContext(
    BetContext
  );
  return (
    <StyledDrinkSearchForm>
      <div className="form-group">
        <lable htmlFor="search">Search:</lable>
        <input
          className="form-control"
          value={search}
          name="search"
          type="text"
          placeholder="Search for a Match"
          id="search"
          onChange={handleInputChange}
        />
        <br />
        <button onClick={handleFormSubmit}>Search</button>
      </div>
    </StyledDrinkSearchForm>
  );
};
export default DrinkSearchForm;
