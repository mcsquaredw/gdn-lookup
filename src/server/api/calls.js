module.exports = (app, db) => {
  app.post('/calls', (req, res) => {
    
  });

  app.get('/calls', (req, res) => {
    res.send(200, "Hello World!");
  });
}
