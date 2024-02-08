import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();
const app = express();

const baseURL = "https://api.edamam.com";
const api_key = process.env.API_KEY;
const app_id = process.env.APP_ID;
const search = `/search`;
const port = 8000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
// const fetchData = async (baseURL, search, value, app_id, api_key) => {
//   const receipes = {};
// };
app.post("/", async (req, res) => {
  const value = req.body.body;
  try {
    const response = await axios.get(
      `${baseURL}${search}?q=${value}&app_id=${app_id}&app_key=${api_key}`
    );
    const data = response.data;
    console.log(data.hits)
    res.status(200).json(data.hits);
    // res.send(JSON.stringify(data));
    // return receipes;
  } catch (error) {
    console.error('Error fetching data from external API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
