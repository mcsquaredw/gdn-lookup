module.exports = (app, db) => {
  app.get('/call_types', async (req, res) => {
    try {
      const results = await db.collection('call_types').find({}).toArray();

      res.send(results);
    } catch(err) {
      console.log(err);

      res.send(500);
    }
  });
}
