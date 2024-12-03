const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  app.get('/', (req, res) => {
    res.send('Book Server is running')
  });
}

main().then(() => console.log("Mongodb connect successful")).catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})