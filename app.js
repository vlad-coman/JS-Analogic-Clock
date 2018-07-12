const express = require('express'),
      app     = express();
require('dotenv').config();      
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
	res.render("index");
})

app.listen(process.env.PORT, function() {
	console.log('Server started');
})