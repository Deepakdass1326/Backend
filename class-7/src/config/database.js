const mongoose = require('mongoose')

function connecttoDB() {
  mongoose
    .connect(
      "mongodb+srv://deepakkumardeepakkuma234_db_user:n0g7k1YfSk1atCmi@cluster0.oezwvxh.mongodb.net/day-7",
    )
    .then(() => {
      console.log("Database connected");
    });
}


module.exports = connecttoDB