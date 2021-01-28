require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const express = require("express")

const app = express();
app.use(express.json());




app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`));


  