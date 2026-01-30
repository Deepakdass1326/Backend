const app = require("./src/app");
const mongoose = require("mongoose");
const connecttoDB = require('./src/config/database')

connecttoDB()


app.listen(3000, () => {
  console.log("server is running");
});
