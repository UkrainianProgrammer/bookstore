const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000

require('dotenv').config();
const mongoose = require('mongoose');
const bookRoutes = require('./src/books/book.route');

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173/'],
    credentials: true,
}));

// routes
app.use("/api/books", bookRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get('/', (req, res) => {
    res.send('Book Server is running')
  });
}

main().then(() => console.log("Mongodb connect successful")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})