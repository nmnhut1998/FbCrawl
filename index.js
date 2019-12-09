const PORT = 8080; 
const app = require("https-localhost")(); 
// app is an express app, do what you usually do with express
app.listen(PORT); 
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname })
  })