const connectToMango = require('./db');
const express = require('express');

connectToMango();

const app = express();
const port = 3000;

app.use(express.json());                                // middleware

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})