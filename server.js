let express = require('express');
let app = express();

//server listens on port
let PORT = process.env.PORT || 3000;

//matches any route
app.all('/*', (req,res) => {
  res.send(`
  <!DOCTYPE html>
    <html>
      <head>
        <title> Skill Tracker </title>
      </head
      <body>
        <p> test </p>
        </p> this is the server <p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log('server on port ' + PORT)
})