const { ApolloServer } = require('apollo-server'); // importing ApolloServer class from Apollo
const typeDefs = require('./schema'); // importing schema

const server = new ApolloServer({ typeDefs }); // create an instance of ApolloServer, using schema

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
