const express = require("express");

const app = express();

app.use("/test", (req, res) => res.send("Testing"));
app.use("/home", (req, res) => res.send("In Dashboard"));

app.listen(3000, () => console.log("Listening in port 3000"));
