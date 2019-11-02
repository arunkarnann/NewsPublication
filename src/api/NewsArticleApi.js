import axios from "axios";

const articles = async (params) =>{
    axios.get("https://api.myjson.com/bins/zdais")
    .then(data => {console.log(data); return data;})
    .catch(err => {console.log("error")});
}

const getAllArticles = async(params) => {
    let response = ""
    response = await axios.get("https://api.myjson.com/bins/1dkxi4");
    console.log(response);
    return response;
    // .then(data => {console.log("all data"); console.log(data); return data;})
    // .catch(err => {console.log("error")});
}

export default {articles,getAllArticles};