// function to make http request 
// use JSON placeholder API 
// use axios npm i axios 
const axios = require("axios");

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return results.data
}
fetchData(1);
module.exports = fetchData;
