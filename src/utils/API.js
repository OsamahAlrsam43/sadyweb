import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  responseType: "json",
  headers: {
    "Content-type": "application/json",
     "Accept": 'application/pdf',


  }
});