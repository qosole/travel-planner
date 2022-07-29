const express = require('express')
const routes = require('./routes')
const sequelize = require('./config/connection.js')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use(routes)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Server is now listening"))
})