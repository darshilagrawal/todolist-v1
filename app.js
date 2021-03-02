const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const time=require(__dirname+"/time.js");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));
var items = [];
var workItems = [];


app.get("/", function(req, res) {

    today=time.getDate();
  res.render('lists', {
    listTitle: today,
    itemList: items
  });
})

app.get("/work", function(re, res) {

  res.render('lists', {
    listTitle:"Work",
    itemList: workItems
  })
})

app.post("/", function(req, res) {
  var itemName = req.body.name;
  console.log(req.body.button);
  if (req.body.button === "Work") {
    workItems.push(itemName)
    res.redirect("/work")
  } else {
    items.push(itemName);
    res.redirect("/");
  }

})



app.listen(3000, function() {
  console.log("The Server is up and running on port 3000");
})
