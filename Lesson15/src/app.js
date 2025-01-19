const express = require("express");
const { testAuth } = require("./middlewares/auth");

const app = express();

app.use("/test", testAuth, (req, res) => {
  try {
    throw new Error("errored out");
  } catch (e) {
    res.status(500).send("Failed");
  }

  res.send("handled test route after authorisation");
});

app.use("/home", (req, res) => res.send("In Dashboard"));

// Cannot set headers after they are sent to the client
// app.use("/test", (err, req, res, next) => {
//   if (err) {
//     res.status(500).send("Something went wrong");
//   }
// });

app.listen(3000, () => console.log("Listening in port 3000"));
