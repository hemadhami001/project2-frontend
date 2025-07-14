
import axios from 'axios';

const API = axios.create({
    baseURL : "http://localhost:3000/api/",
    headers : {
        'Content-Type': 'application/json', // Set the content type to JSON
        'Accept': 'application/json'  // Accept JSON responses
    }
})

export default API;