const express = require("express");
const morgan = require("morgan");
const views = require("./views");
const app = express();
const models = require("./models");
const { db } = require("./models");
// const user = require("./routes/user");
const wiki = require("./routes/wiki");


db.authenticate().then(() => {
  console.log("connected to the database");
});
app.use('/wiki',wiki);
app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function(req, res) {
  res.send(views.main());
})

const PORT = 3000;

const init = async () => {
  try {
    await models.db.sync();
    models.db.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
init();
