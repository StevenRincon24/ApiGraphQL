const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: String,
  presidenteName: String,
  dtName: String,
  value: Number,
});

module.exports = model("teams", teamSchema);
