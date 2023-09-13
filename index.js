const { default: axios } = require("axios")
const express = require("express")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", async (req, res) => {
    const { data: response } = await axios.get(process.env.URL)
    res.send(response)
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)