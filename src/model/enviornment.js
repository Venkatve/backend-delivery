require("dotenv").config();

const DB_URL = "mongodb+srv://Venkat:Guvi123@cluster0.u3q6d.mongodb.net/delivary?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4500;
const APP_URL = process.env.WEB_APP_URL;

module.exports = { DB_URL, PORT, APP_URL };
