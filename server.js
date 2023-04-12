require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT || 3000;

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(port, () => {
  console.log(`Listening on port ${PORT}`);
});