const express = require("express");
require('dotenv').config()
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDef");
const { resolvers } = require("./resolvers");

require("./db");
const app = express();

const startServer = async () => {
  const PORT = process.env.PORT;
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  app.use("*", (req, res) => res.status(404).send("Not Found"));
  app.listen(PORT, () => console.log(`Server listening at PORT ${PORT}`));
};

startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
