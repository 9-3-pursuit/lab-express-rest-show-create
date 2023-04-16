//DEPENDECIES
const app = require('./app');

//CONFIGURATION
require("dotenv").config();

//PORT
const PORT = process.env.PORT || 3000;


//Listen
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});