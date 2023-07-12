const express = require('express')

const app = express()
require("dotenv").config();
require("./configuration/database.js");

//const {create/update/delete} = require ('./controller/users.js')
//app.get, app.put, app.delete
// /user, create

app.listen(3000, () => {
    console.log('listening on port 3000')
} )

