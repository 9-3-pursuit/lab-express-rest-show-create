require("dotenv").config() // configuring all our env variables to make sure it is pulling the port
const app = require("./app")
const port = process.env.PORT || 3000

// console.log(process.env.PORT)
// console.log(port)

// Listening for the server changes as you change 
app.listen(port, (req,res) => {
    console.log(`Server running on port ${port}`)
})