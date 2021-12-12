const connectToMango = require('./db');
const express = require('express');
const cors = require('cors');

connectToMango();

const app = express();
const port = 5000;

app.use(cors());                                        // another middleware installed using "npm i cors"
app.use(express.json());                                // middleware

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})