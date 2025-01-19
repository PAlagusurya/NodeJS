const testAuth = (req, res, next) => {
  const token = "abc";
  if (token === "abc") {
    next();
  } else {
    res.status(500).send("Unauthorised");
  }
};

module.exports = { testAuth };
