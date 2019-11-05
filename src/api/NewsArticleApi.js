import axios from "axios";

const articles = async (params) =>{
    axios.get("https://api.myjson.com/bins/zdais")
    .then(data => {console.log(data); return data;})
    .catch(err => {console.log("error")});
}

const getAllArticles = async(params) => {
    let response = ""
    let category = params
    response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2ecac265d54148ac96ba268ba91ea49f`);
    console.log(response);
    return response;
    // .then(data => {console.log("all data"); console.log(data); return data;})
    // .catch(err => {console.log("error")});
}

export default {articles,getAllArticles};