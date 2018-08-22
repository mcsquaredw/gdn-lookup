module.exports = (app, db) => {
  app.get('/contact_types', async (req, res) => {
    try {
      const results = await db.collection('contact_types').find({}).toArray();

      res.send(results);
    } catch(err) {
      console.log(err);

      res.send(500);
    }
  });
}
