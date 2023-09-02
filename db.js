const { mongoose } = require("mongoose");
const URI =
  "mongodb+srv://hovarrincon:eudDkqIFJVwfhofJ@cluster0.ohmrvcr.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URI, options)
  .then(() => console.log("Connect DB Success"))
  .catch((e) => console.log(e));

module.exports = { mongoose };
