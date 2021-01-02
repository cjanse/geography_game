import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://restcountries-v1.p.rapidapi.com/all',
  headers: {
    'x-rapidapi-key': 'c9f49c1242msh966ccad3bc13254p17d0ebjsn568038a2f812',
    'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com'
  }
};


export default async function handler(req,res) {
    const response = await axios.request(options);

    res.statusCode = 200;
    res.json(response.data);
}