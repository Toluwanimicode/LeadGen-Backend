// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://DAT:Tolu1329@cluster0.oetks32.mongodb.net/Subscribecollection?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to the database");

     // Apply CORS middleware
        app.use(cors());
        app.use(bodyParser.json());

    // Define routes
    app.use('/', routes);

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    })

})
