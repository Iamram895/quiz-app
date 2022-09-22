const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolver");
const typeDefs = require("./Schema");


const server = new ApolloServer({
    typeDefs,
    resolvers,

});

server.listen(4005).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});