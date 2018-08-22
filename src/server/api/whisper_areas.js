module.exports = (app, db) => {
  app.get('/whisper_areas', async (req, res) => {
    try {
      const results = await db.collection('whisper_areas').find({}).toArray();

      res.send(results);
    } catch(err) {
      console.log(err);

      res.send(500);
    }
  });
}
