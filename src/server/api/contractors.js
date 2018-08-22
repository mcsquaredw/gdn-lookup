module.exports = (app, db) => {
  app.get('/contractors', async (req, res) => {
    try {
      const results = await db.collection('contractors').find({}).toArray();

      res.send(results);
    } catch(err) {
      console.log(err);

      res.send(500);
    }
  });
}
