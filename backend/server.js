import express from "express";
import fetch from "node-fetch";
import "dotenv/config";

const app = express();
const API_KEY = process.env.ETHERSCAN_API_KEY;

app.get("/latest-block", async (req, res) => {
    const url = `https:https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});


