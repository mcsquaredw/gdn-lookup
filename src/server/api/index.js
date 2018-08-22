module.exports = (app, db) => {
  require('./call_types')(app, db);
  require('./calls')(app, db);
  require('./contact_types')(app, db);
  require('./contractors')(app, db);
  require('./whisper_areas')(app, db);
}
