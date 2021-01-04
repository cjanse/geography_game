import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://restcountries-v1.p.rapidapi.com/all',
  headers: {
    'x-rapidapi-key': process.env.RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.RAPIDAPI_HOST
  }
};


export default async function handler(req,res) {
    const response = await axios.request(options);

    res.statusCode = 200;
    res.json(response.data);
}