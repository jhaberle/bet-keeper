import React, { useContext } from "react";
import styled from "styled-components";
import DrinkContext from "../utils/drinkContext";

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
  }

  .example_b {
color: #fff !important;
text-transform: uppercase;
text-decoration: none;
background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
padding: 20px;
border-radius: 50px;
display: inline-block;
border: none;
transition: all 0.4s ease 0s;
}

.example_b:hover {
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
`;
const DrinkSearchForm = () => {

  const { search, handleInputChange, handleFormSubmit } = useContext(DrinkContext);
  
  return (
    <StyledDrinkSearchForm>
      <div className="form-group">
        <lable htmlFor="search">Search:</lable>
        <input
          className="form-control"
          value={search}
          name="search"
          type="text"
          placeholder="Search for a Drink"
          id="search"
          onChange={handleInputChange}
        />
        <br />
        <div class="button_cont" align="center"><a onClick={handleFormSubmit} class="example_b" href="add-website-here" target="_blank" rel="nofollow noopener">Search</a></div>
      </div>
    </StyledDrinkSearchForm>
  );
};
export default DrinkSearchForm;
