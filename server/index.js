<<<<<<< HEAD
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Creating an instance of Express
const app = express()

// Use body parser middleware to parse incoming request bodies
app.use(bodyParser.json())

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors())

// Define a route
app.get('/', (req, res) => {
  res.send('Server is running')
})

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
=======
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Creating an instance of Express
const app = express();

// Use body parser middleware to parse incoming request bodies
app.use(bodyParser.json());

// Use CORS middleware to enable Cross-Origin Resource Sharing
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 6b499f9acbbc1257eac51537b040780b81aa80f5
