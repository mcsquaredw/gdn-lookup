const MongoClient = require('mongodb').MongoClient;

const whisper_areas = require('./whisper_areas');
const call_types = require('./call_types');
const contact_types = require('./contact_types');
const contractors = require('./contractors');

const config = require('../config');

async function clean(dbo) {
  try {
    await dbo.collection('whisper_areas').drop();
    await dbo.collection('call_types').drop();
    await dbo.collection('contact_types').drop();
    await dbo.collection('contractors').drop();
  } catch(err) {
    console.log(err);
  }
}

async function populate(dbo) {
  try {
    await dbo.collection('whisper_areas').insertMany(whisper_areas);
    await dbo.collection('call_types').insertMany(call_types);
    await dbo.collection('contact_types').insertMany(contact_types);
    await dbo.collection('contractors').insertMany(contractors);
  } catch (err) {
    console.log(err);
  }
}

MongoClient.connect(config.getConfig().MONGODB_URI, {useNewUrlParser:true}, (err, client) => {
  if(err) {
    console.log(err);
  } else {
    console.log("Connected");
    let dbo = client.db('gdn');

    clean(dbo);
    populate(dbo);
  }
});
