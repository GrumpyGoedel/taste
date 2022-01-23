const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Ciao World, UPDATED and deployed from GitHub!"));
app.listen(3000, () => console.log("Server ready"));
