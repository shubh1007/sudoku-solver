const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

require("dotenv").config();


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
}
);
