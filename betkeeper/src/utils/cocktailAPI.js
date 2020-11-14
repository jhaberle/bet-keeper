import axios from "axios";

const BASEURL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const cocktailAPI = () => {
    console.log(axios.get(BASEURL));
};

export default cocktailAPI;