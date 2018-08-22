const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser);

MongoClient.connect(config.getConfig().MONGODB_URI, {useNewUrlParser: true}, (err, client) => {
  if(err) {
    console.log(err);
  } else {
    const db = client.db('gdn');

    require('./api')(app, db);
    app.listen(process.env.PORT || 3000);
  }
});
