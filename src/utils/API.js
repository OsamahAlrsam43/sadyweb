import axios from "axios";

export default axios.create({
  baseURL: "http://35.224.38.29/api/v1/",
  responseType: "json",
  headers: {
    "Content-type": "application/json",
     "Accept": 'application/pdf',


  }
});
