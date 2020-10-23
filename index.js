const express = require("express")
const rR = require("./data/routers/recipeRouter")
const iR = require("./data/routers/ingredientsRouter")

const server = express()

server.use(express.json())

server.use("/recipies", rR)
server.use("/ingredients", iR)


const port = 9000;
server.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
})



module.exports = server
