import express from "express";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
const API_KEY = process.env.ETHERSCAN_API_KEY;
const PORT = 3000;

app.get("/latest-block", async (req, res) => {
    const url = `https://api.etherscan.io/v2/api?chainid=1&module=proxy&action=eth_blockNumber&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


